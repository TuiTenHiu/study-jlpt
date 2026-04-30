/**
 * features/quiz.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Fast Typing Quiz — all quiz logic in one encapsulated class.
 *
 * Responsibilities:
 *   • Random character selection (no consecutive repeats)
 *   • 5-second countdown timer with SVG ring + progress bar
 *   • Answer evaluation (correct / wrong / timeout)
 *   • Score tracking
 *   • DOM updates for the quiz UI
 *
 * Usage (from main.js):
 *   import { Quiz } from './features/quiz.js';
 *   const quiz = new Quiz(domRefs);
 *   quiz.start();          // begin a session
 *   quiz.submit();         // submit typed answer
 *   quiz.setMode('mixed'); // 'hiragana' | 'katakana' | 'mixed'
 *   quiz.reset();          // return to idle screen
 *   quiz.destroy();        // clean up when leaving quiz mode
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { HIRAGANA_FLAT, KATAKANA_FLAT } from '../data/kana.js';

/* ── Constants ────────────────────────────────────────────────────────────── */
const TOTAL_QUESTIONS   = 20;
const SECONDS_PER_Q     = 10;
const ARC_CIRCUMFERENCE = 2 * Math.PI * 28; // r=28 SVG circle

/* ════════════════════════════════════════════════════════════════════════════
   Quiz class
════════════════════════════════════════════════════════════════════════════ */
export class Quiz {
  /**
   * @param {Object} dom  Object of DOM element references (see getDomRefs in main.js)
   */
  constructor(dom) {
    this.dom            = dom;
    this._timerInterval = null;
    this._customPool    = null; // Array<{char,romaji}> | null
    this._state         = this._buildFreshState();
  }

  /* ── Public API ─────────────────────────────────────────────────────────── */

  /** Change the active character set. Call before start(). */
  setMode(mode) {
    this._state.mode = mode;
  }

  /** Return the current mode string. */
  getMode() {
    return this._state.mode;
  }

  /**
   * Set a custom pool of characters for the next quiz session.
   * Pass null to clear and fall back to the normal mode-based pool.
   * @param {Array<{char:string,romaji:string}>|null} pool
   */
  setCustomPool(pool) {
    this._customPool = pool && pool.length >= 1 ? pool : null;
  }

  /** Start a fresh 20-question session. */
  start() {
    this._state          = this._buildFreshState();
    this._state.dataset  = this._buildDataset();
    this._showArena();
    this._nextQuestion();
  }

  /** Submit the answer currently typed in the input field. */
  submit() {
    if (this._state.answered) return;
    const typed = this.dom.input.value.trim().toLowerCase();
    if (!typed) { this.dom.input.focus(); return; }
    this._evaluate(typed);
  }

  /** Return the quiz UI to the idle/welcome screen. */
  reset() {
    this._stopTimer();
    this._showIdle();
  }

  /** Stop the timer without changing UI (called when switching away from quiz mode). */
  destroy() {
    this._stopTimer();
  }

  /* ── State helpers ──────────────────────────────────────────────────────── */

  /** Return a clean initial state object. */
  _buildFreshState() {
    return {
      mode:         this._state?.mode ?? 'mixed', // preserve mode between sessions
      dataset:      [],
      currentQ:     null,   // { char, romaji }
      lastChar:     '',     // prevent same char twice in a row
      score:        0,
      qNum:         0,
      correctCount: 0,
      wrongCount:   0,
      timeLeft:     SECONDS_PER_Q,
      answered:     false,
    };
  }

  /** Build the quiz pool for the current mode (or use custom pool if set). */
  _buildDataset() {
    // Custom pool takes priority over the mode-based pool
    if (this._customPool && this._customPool.length >= 1) {
      return [...this._customPool];
    }
    switch (this._state.mode) {
      case 'hiragana': return [...HIRAGANA_FLAT];
      case 'katakana': return [...KATAKANA_FLAT];
      default:         return [...HIRAGANA_FLAT, ...KATAKANA_FLAT];
    }
  }

  /* ── Question flow ──────────────────────────────────────────────────────── */

  /** Advance to the next question, or end the quiz if all Qs are done. */
  _nextQuestion() {
    if (this._state.qNum >= TOTAL_QUESTIONS) {
      this._endQuiz();
      return;
    }

    // Pick a random entry — avoid repeating the previous character
    const { dataset, lastChar } = this._state;
    let pick;
    do {
      pick = dataset[Math.floor(Math.random() * dataset.length)];
    } while (dataset.length > 1 && pick.char === lastChar);

    this._state.lastChar  = pick.char;
    this._state.currentQ  = pick;
    this._state.answered  = false;
    this._state.qNum++;

    // Update counter widgets
    this.dom.qNum.textContent   = this._state.qNum;
    this.dom.qTotal.textContent = TOTAL_QUESTIONS;
    this.dom.score.textContent  = this._state.score;

    // Reset input field
    const inp         = this.dom.input;
    inp.value         = '';
    inp.className     = '';
    inp.disabled      = false;
    this.dom.btnSubmit.disabled = false;

    // Clear feedback label
    this._setFeedback('', '');

    // Animate the new character in
    const charEl = this.dom.charDisplay;
    charEl.classList.remove('fade-in');
    void charEl.offsetWidth; // force reflow to restart animation
    charEl.textContent = pick.char;
    charEl.classList.add('fade-in');

    // Start the countdown
    this._startTimer();
    inp.focus();
  }

  /**
   * Evaluate a submitted answer string.
   * @param {string} typed  Lower-cased, trimmed user input
   */
  _evaluate(typed) {
    this._stopTimer();
    this._state.answered = true;

    const isCorrect = typed === this._state.currentQ.romaji.toLowerCase();

    if (isCorrect) {
      this._state.score++;
      this._state.correctCount++;
      this.dom.input.className = 'correct';
      this._setFeedback('correct', '✅ Correct!');
    } else {
      this._state.wrongCount++;
      this.dom.input.className = 'wrong';
      this._setFeedback('wrong', `❌ Wrong!  Answer: ${this._state.currentQ.romaji}`);
    }

    this.dom.input.disabled     = true;
    this.dom.btnSubmit.disabled = true;
    this.dom.score.textContent  = this._state.score;

    // Pause briefly before moving on
    setTimeout(() => this._nextQuestion(), 1200);
  }

  /** Called when the 5-second timer expires without an answer. */
  _onTimeout() {
    if (this._state.answered) return;
    this._state.answered  = true;
    this._state.wrongCount++;

    this.dom.input.value      = '';
    this.dom.input.disabled   = true;
    this.dom.input.className  = 'wrong';
    this.dom.btnSubmit.disabled = true;

    this._setFeedback('timeout', `⏰ Time's up!  Answer: ${this._state.currentQ.romaji}`);

    setTimeout(() => this._nextQuestion(), 1500);
  }

  /** Display the results screen after all questions are exhausted. */
  _endQuiz() {
    this._stopTimer();
    const { score, correctCount, wrongCount } = this._state;
    const pct  = Math.round((score / TOTAL_QUESTIONS) * 100);
    const icon = pct >= 80 ? '🏆' : pct >= 50 ? '🎉' : '📚';

    this.dom.endIcon.textContent     = icon;
    this.dom.finalScore.textContent  = score;
    this.dom.finalTotal.textContent  = TOTAL_QUESTIONS;
    this.dom.statCorrect.textContent = correctCount;
    this.dom.statWrong.textContent   = wrongCount;

    this.dom.arena.hidden     = true;
    this.dom.endScreen.hidden = false;
  }

  /* ── Timer ──────────────────────────────────────────────────────────────── */

  /** Start (or restart) the countdown clock. */
  _startTimer() {
    this._stopTimer();
    this._state.timeLeft = SECONDS_PER_Q;
    this._updateTimerUI(SECONDS_PER_Q);

    this._timerInterval = setInterval(() => {
      this._state.timeLeft--;
      this._updateTimerUI(this._state.timeLeft);

      if (this._state.timeLeft <= 0) {
        this._stopTimer();
        this._onTimeout();
      }
    }, 1000);
  }

  /** Clear the setInterval without touching the UI. */
  _stopTimer() {
    if (this._timerInterval) {
      clearInterval(this._timerInterval);
      this._timerInterval = null;
    }
  }

  /**
   * Sync all timer UI elements to the given remaining seconds.
   * @param {number} t  Remaining seconds (0–SECONDS_PER_Q)
   */
  _updateTimerUI(t) {
    const pct = t / SECONDS_PER_Q;

    // Numeric label inside the ring
    this.dom.timerNum.textContent = Math.max(0, t);

    // SVG arc stroke-dashoffset
    this.dom.timerArc.style.strokeDashoffset = ARC_CIRCUMFERENCE * (1 - pct);

    // Color: purple → amber → red as time runs out
    const color = t <= 2 ? 'var(--danger)' : t <= 3 ? 'var(--warn)' : 'var(--primary)';
    this.dom.timerArc.style.stroke = color;
    this.dom.timerNum.style.color  = color;

    // Horizontal progress bar
    this.dom.timerBar.style.width = `${pct * 100}%`;
    this.dom.timerBar.style.background =
      t <= 2 ? 'linear-gradient(90deg,var(--danger),#f97316)' :
      t <= 3 ? 'linear-gradient(90deg,var(--warn),#f97316)'   :
               'linear-gradient(90deg,var(--primary),var(--accent))';
  }

  /* ── UI helpers ─────────────────────────────────────────────────────────── */

  _showIdle() {
    this.dom.idleScreen.style.display = '';
    this.dom.arena.hidden             = true;
    this.dom.endScreen.hidden         = true;
  }

  _showArena() {
    this.dom.idleScreen.style.display = 'none';
    this.dom.arena.hidden             = false;
    this.dom.endScreen.hidden         = true;
  }

  /**
   * Update the feedback label below the input.
   * @param {string} type  'correct' | 'wrong' | 'timeout' | ''
   * @param {string} msg   Display text
   */
  _setFeedback(type, msg) {
    const fb     = this.dom.feedback;
    fb.textContent = msg;
    fb.className   = `quiz-feedback${msg ? ` show ${type}` : ''}`;
  }
}
