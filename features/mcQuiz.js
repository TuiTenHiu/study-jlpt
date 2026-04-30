/**
 * features/mcQuiz.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Multiple Choice Quiz — reverse direction.
 *
 * Question : romaji (e.g. "na")
 * Answers  : 4 large Japanese character buttons  (e.g. な に ぬ ね)
 *
 * The user clicks (or presses 1-4) to select the correct character.
 * Immediate colour feedback: green = correct, red = wrong.
 * Auto-advances to the next question after 1.4 s.
 *
 * Public API (mirrors Quiz class for easy wiring in main.js):
 *   new MultipleChoiceQuiz(dom)
 *   .setMode(mode)          'hiragana' | 'katakana' | 'mixed' | 'custom'
 *   .getMode()
 *   .setCustomPool(pool)    Array<{char,romaji}> | null
 *   .start()
 *   .selectChoice(index)    0-3
 *   .reset()
 *   .destroy()
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { HIRAGANA_FLAT, KATAKANA_FLAT } from '../data/kana.js';

/* ── Constants ────────────────────────────────────────────────────────────── */
const TOTAL_QUESTIONS = 20;
const CHOICE_COUNT = 4;
const NEXT_Q_DELAY_MS = 1400;

/* ── Helpers ──────────────────────────────────────────────────────────────── */

/** Fisher-Yates shuffle — returns a new shuffled copy. */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** True if char contains at least one Hiragana code point. */
const isHiragana = char => /[\u3040-\u309F]/.test(char);

/* ════════════════════════════════════════════════════════════════════════════
   MultipleChoiceQuiz class
════════════════════════════════════════════════════════════════════════════ */
export class MultipleChoiceQuiz {
  /**
   * @param {Object} dom  Shape: see mcDom in main.js
   *   idleScreen, arena, endScreen,
   *   qNum, qTotal, score,
   *   romajiDisplay, scriptLabel,
   *   choices[],                   ← Array of 4 button elements
   *   feedback,
   *   endIcon, finalScore, finalTotal, statCorrect, statWrong
   */
  constructor(dom) {
    this.dom = dom;
    this._customPool = null;
    this._nextTimer = null;
    this._fullPool = [...HIRAGANA_FLAT, ...KATAKANA_FLAT]; // always used for distractors
    this._state = this._buildFreshState();
  }

  /* ── Public API ─────────────────────────────────────────────────────────── */

  setMode(mode) { this._state.mode = mode; }
  getMode() { return this._state.mode; }

  setCustomPool(pool) {
    this._customPool = pool && pool.length >= 1 ? pool : null;
  }

  /** Start a fresh 20-question session. */
  start() {
    this._clearNextTimer();
    this._state = this._buildFreshState();
    this._state.dataset = this._buildDataset();
    this._showArena();
    this._nextQuestion();
  }

  /**
   * User clicked choice button at given index (0-3).
   * @param {number} index
   */
  selectChoice(index) {
    if (this._state.answered) return;
    this._state.answered = true;
    this._evaluate(index);
  }

  reset() {
    this._clearNextTimer();
    this._showIdle();
  }

  destroy() {
    this._clearNextTimer();
  }

  /* ── State ──────────────────────────────────────────────────────────────── */

  _buildFreshState() {
    return {
      mode: this._state?.mode ?? 'mixed',
      dataset: [],
      currentQ: null,        // { char, romaji }
      choices: [],          // Array<{char,romaji}> length CHOICE_COUNT
      correctIndex: -1,
      lastChar: '',
      score: 0,
      qNum: 0,
      correctCount: 0,
      wrongCount: 0,
      answered: false,
    };
  }

  _buildDataset() {
    if (this._customPool) return [...this._customPool];
    switch (this._state.mode) {
      case 'hiragana': return [...HIRAGANA_FLAT];
      case 'katakana': return [...KATAKANA_FLAT];
      default: return [...HIRAGANA_FLAT, ...KATAKANA_FLAT];
    }
  }

  /* ── Question flow ──────────────────────────────────────────────────────── */

  _nextQuestion() {
    if (this._state.qNum >= TOTAL_QUESTIONS) {
      this._endQuiz();
      return;
    }

    const { dataset, lastChar } = this._state;

    // Pick the correct answer (no consecutive repeat)
    let correct;
    do {
      correct = dataset[Math.floor(Math.random() * dataset.length)];
    } while (dataset.length > 1 && correct.char === lastChar);

    this._state.lastChar = correct.char;
    this._state.currentQ = correct;
    this._state.answered = false;
    this._state.qNum++;

    // Build 4 shuffled choices
    const distractors = this._generateDistractors(correct);
    const shuffled = shuffle([correct, ...distractors]);

    this._state.choices = shuffled;
    this._state.correctIndex = shuffled.findIndex(e => e.char === correct.char);

    this._renderQuestion(correct, shuffled);
  }

  /**
   * Generate (CHOICE_COUNT - 1) distractor entries.
   * Distractors must have a different `char` AND different `romaji`
   * to avoid ambiguous questions (e.g. じ and ぢ both = "ji").
   */
  _generateDistractors(correct) {
    // Prefer the current dataset for thematic distractors; fall back to full pool
    const pool = this._state.dataset.length >= 8
      ? this._state.dataset
      : this._fullPool;

    const usedChars = new Set([correct.char]);
    const usedRomaji = new Set([correct.romaji]);

    // Candidates: different char AND different romaji
    let candidates = shuffle(
      pool.filter(e => !usedChars.has(e.char) && !usedRomaji.has(e.romaji))
    );

    // If not enough unique-romaji candidates, relax to unique-char only from full pool
    if (candidates.length < CHOICE_COUNT - 1) {
      candidates = shuffle(this._fullPool.filter(e => !usedChars.has(e.char)));
    }

    return candidates.slice(0, CHOICE_COUNT - 1);
  }

  _evaluate(selectedIndex) {
    const correctIdx = this._state.correctIndex;
    const isCorrect = selectedIndex === correctIdx;

    // Always show correct answer in green
    this.dom.choices[correctIdx].classList.add('mc-correct');

    if (isCorrect) {
      this._state.score++;
      this._state.correctCount++;
      this._setFeedback('correct', '✅ Correct!');
    } else {
      this._state.wrongCount++;
      this.dom.choices[selectedIndex].classList.add('mc-wrong');
      const correctChar = this._state.choices[correctIdx].char;
      this._setFeedback('wrong', `❌ Wrong!  Correct: ${correctChar}`);
    }

    // Disable all buttons until next question
    this.dom.choices.forEach(btn => { btn.disabled = true; });
    this.dom.score.textContent = this._state.score;

    this._nextTimer = setTimeout(() => this._nextQuestion(), NEXT_Q_DELAY_MS);
  }

  _renderQuestion(correct, choices) {
    // Animate romaji question in
    const romajiEl = this.dom.romajiDisplay;
    romajiEl.classList.remove('mc-pop');
    void romajiEl.offsetWidth;           // reflow to restart animation
    romajiEl.textContent = correct.romaji;
    romajiEl.classList.add('mc-pop');

    // Script label above the romaji
    this.dom.scriptLabel.textContent = isHiragana(correct.char)
      ? 'Find the Hiragana for:'
      : 'Find the Katakana for:';

    // Render choice buttons
    this.dom.choices.forEach((btn, i) => {
      btn.textContent = choices[i]?.char ?? '?';
      btn.className = 'mc-choice';
      btn.disabled = false;
    });

    // Header counters
    this.dom.qNum.textContent = this._state.qNum;
    this.dom.qTotal.textContent = TOTAL_QUESTIONS;
    this.dom.score.textContent = this._state.score;

    this._setFeedback('', '');
  }

  /* ── End screen ─────────────────────────────────────────────────────────── */

  _endQuiz() {
    const { score, correctCount, wrongCount } = this._state;
    const pct = Math.round((score / TOTAL_QUESTIONS) * 100);
    const icon = pct >= 80 ? '🏆' : pct >= 50 ? '🎉' : '📚';

    this.dom.endIcon.textContent = icon;
    this.dom.finalScore.textContent = score;
    this.dom.finalTotal.textContent = TOTAL_QUESTIONS;
    this.dom.statCorrect.textContent = correctCount;
    this.dom.statWrong.textContent = wrongCount;

    this.dom.arena.hidden = true;
    this.dom.endScreen.hidden = false;
  }

  /* ── UI helpers ─────────────────────────────────────────────────────────── */

  _showIdle() {
    this.dom.arena.hidden = true;
    this.dom.endScreen.hidden = true;
    this.dom.idleScreen.style.display = '';
  }

  _showArena() {
    this.dom.idleScreen.style.display = 'none';
    this.dom.arena.hidden = false;
    this.dom.endScreen.hidden = true;
  }

  _setFeedback(type, msg) {
    const fb = this.dom.feedback;
    fb.textContent = msg;
    fb.className = `quiz-feedback${msg ? ` show ${type}` : ''}`;
  }

  _clearNextTimer() {
    if (this._nextTimer) {
      clearTimeout(this._nextTimer);
      this._nextTimer = null;
    }
  }
}
