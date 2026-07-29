/**
 * features/wordAssembly.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Word Assembly Game — players tap/click syllable tiles to spell a word.
 *
 * Gameplay:
 *   1. A clue is shown (Vietnamese meaning + romaji)
 *   2. Scrambled syllable tiles appear below
 *   3. User taps tiles to build the answer in the answer slots
 *   4. Tap a placed tile to remove it back to the bank
 *   5. Correct → ✅ animation → next word; Wrong → ❌ shake
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { playWord } from './audio.js';
import { vocabData } from '../data/vocab.js';

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Fisher-Yates shuffle (in-place). */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Returns true if the string contains any kanji (CJK Unified Ideographs).
 * Used to exclude kanji words/tiles from the Word Assembly game.
 */
function hasKanji(str) {
  return /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/.test(str);
}

/**
 * Split a Japanese word into syllable-like segments.
 * Treats each Unicode code-point as one tile (handles kanji, kana, katakana).
 * Combines small kana (っ ッ ゃゅょャュョ) with the preceding char.
 */
function splitJP(word) {
  const SMALL_KANA = new Set(['っ','ッ','ゃ','ゅ','ょ','ャ','ュ','ョ','ぁ','ぃ','ぅ','ぇ','ぉ','ァ','ィ','ゥ','ェ','ォ']);
  const chars = [...word]; // spread handles multi-byte
  const tiles = [];
  for (let i = 0; i < chars.length; i++) {
    if (i + 1 < chars.length && SMALL_KANA.has(chars[i + 1])) {
      tiles.push(chars[i] + chars[i + 1]);
      i++;
    } else {
      tiles.push(chars[i]);
    }
  }
  return tiles;
}

/**
 * Generate distractor tiles from other words in the pool.
 * Returns an array of extra syllables not in the target word.
 * @param {string[]} targetTiles  – correct tiles
 * @param {Object[]} wordPool     – all available words
 * @param {number}   count        – how many distractors
 */
function getDistractors(targetTiles, wordPool, count = 4) {
  const targetSet = new Set(targetTiles);
  const candidates = new Set();

  // Collect tiles from other words (skip any tile that contains kanji)
  for (const w of wordPool) {
    for (const t of splitJP(w.jp)) {
      if (!targetSet.has(t) && !hasKanji(t)) candidates.add(t);
    }
    if (candidates.size >= count * 3) break;
  }

  return shuffle([...candidates]).slice(0, count);
}

// ── WordAssembly class ────────────────────────────────────────────────────────

export class WordAssembly {
  /**
   * @param {Object} dom  – references to HTML elements
   * @param {Object} dom.idleScreen
   * @param {Object} dom.arena
   * @param {Object} dom.endScreen
   * @param {Object} dom.clueVi       – Vietnamese meaning display
   * @param {Object} dom.clueRomaji   – Romaji display
   * @param {Object} dom.answerStrip  – container for placed tiles
   * @param {Object} dom.tileBank     – container for tile buttons
   * @param {Object} dom.feedback     – inline feedback text
   * @param {Object} dom.scoreEl
   * @param {Object} dom.progressEl
   * @param {Object} dom.finalScoreEl
   * @param {Object} dom.finalCorrectEl
   * @param {Object} dom.finalWrongEl
   * @param {Object} dom.btnHint
   */
  constructor(dom) {
    this.dom = dom;
    this.vocab = [];            // current session word list
    this.currentIndex = 0;
    this.score = 0;
    this.wrongCount = 0;
    this.placed = [];           // tiles placed in answer strip [{tile, originalIndex}]
    this.availableTiles = [];   // all tiles for current question (target + distractors)
    this.targetTiles = [];      // correct tiles in order
    this.hintsUsed = 0;
    this._answerLocked = false;
  }

  // ── Session management ──────────────────────────────────────────────────

  /** Load words from selected lessons. */
  loadLessons(lessonsArray, limit) {
    this.lessonsArray = lessonsArray || [];
    this.limit = limit;

    if (this.lessonsArray.length === 0) {
      this.vocab = [];
      return;
    }

    let all = [];
    this.lessonsArray.forEach(num => {
      const words = vocabData[num];
      if (words) {
        words.forEach(w => all.push({ ...w, _lessonNum: num }));
      }
    });

    // Filter out: words shorter than 2 chars OR containing kanji
    all = all.filter(w => w.jp && [...w.jp].length >= 2 && !hasKanji(w.jp));

    shuffle(all);
    this.vocab = limit === 'all' ? all : all.slice(0, Number(limit));
  }

  /** Set an arbitrary array of words (from "List & Select"). */
  setCustomVocab(wordsArray) {
    // Exclude words shorter than 2 chars or containing kanji
    this.vocab = wordsArray.filter(w => w.jp && [...w.jp].length >= 2 && !hasKanji(w.jp));
    shuffle(this.vocab);
  }

  /** Start a new game session. */
  startSession() {
    if (this.vocab.length === 0) return;

    this.currentIndex = 0;
    this.score = 0;
    this.wrongCount = 0;
    this.hintsUsed = 0;

    this.dom.idleScreen.hidden = true;
    this.dom.arena.hidden = false;
    this.dom.endScreen.hidden = true;

    this._loadQuestion();
  }

  // ── Question logic ──────────────────────────────────────────────────────

  _loadQuestion() {
    this._answerLocked = false;
    this.placed = [];

    const word = this.vocab[this.currentIndex];
    this.targetTiles = splitJP(word.jp);

    // Build tile bank: correct tiles + distractors, shuffled
    const distractorCount = Math.min(4, Math.max(2, this.targetTiles.length));
    const distractors = getDistractors(this.targetTiles, this.vocab, distractorCount);
    this.availableTiles = shuffle([...this.targetTiles, ...distractors]);

    // Update clue
    this.dom.clueVi.textContent = word.vi;
    this.dom.clueRomaji.textContent = word.romaji;

    // Progress
    const total = this.vocab.length;
    this.dom.progressEl.textContent = `${this.currentIndex + 1} / ${total}`;
    this.dom.scoreEl.textContent = this.score;

    // Clear feedback
    this._setFeedback('', '');

    // Render answer strip (empty slots)
    this._renderAnswerStrip();

    // Render tile bank
    this._renderTileBank();
  }

  // ── Rendering ───────────────────────────────────────────────────────────

  _renderAnswerStrip() {
    const strip = this.dom.answerStrip;
    strip.innerHTML = '';

    this.targetTiles.forEach((_, idx) => {
      const slot = document.createElement('div');
      slot.className = 'wa-slot';
      slot.dataset.idx = idx;

      const placed = this.placed.find(p => p.slotIdx === idx);
      if (placed) {
        slot.textContent = placed.tile;
        slot.classList.add('wa-slot--filled');
        slot.addEventListener('click', () => this._removeTile(idx));
      } else {
        slot.classList.add('wa-slot--empty');
      }

      strip.appendChild(slot);
    });
  }

  _renderTileBank() {
    const bank = this.dom.tileBank;
    bank.innerHTML = '';

    this.availableTiles.forEach((tile, i) => {
      const isUsed = this.placed.some(p => p.tileIdx === i);

      const btn = document.createElement('button');
      btn.className = 'wa-tile' + (isUsed ? ' wa-tile--used' : '');
      btn.textContent = tile;
      btn.disabled = isUsed || this._answerLocked;
      btn.dataset.tileIdx = i;
      btn.addEventListener('click', () => this._placeTile(tile, i));

      bank.appendChild(btn);
    });
  }

  // ── Tile interaction ────────────────────────────────────────────────────

  /** Place a tile into the next empty slot. */
  _placeTile(tile, tileIdx) {
    if (this._answerLocked) return;

    // Find first empty slot
    const nextSlot = this.targetTiles.findIndex((_, idx) =>
      !this.placed.some(p => p.slotIdx === idx)
    );
    if (nextSlot === -1) return; // all slots filled

    this.placed.push({ tile, tileIdx, slotIdx: nextSlot });
    this._renderAnswerStrip();
    this._renderTileBank();

    // Auto-check when all slots filled
    if (this.placed.length === this.targetTiles.length) {
      setTimeout(() => this._checkAnswer(), 150);
    }
  }

  /** Remove a tile from a slot, returning it to bank. */
  _removeTile(slotIdx) {
    if (this._answerLocked) return;
    this.placed = this.placed.filter(p => p.slotIdx !== slotIdx);
    this._renderAnswerStrip();
    this._renderTileBank();
    this._setFeedback('', '');
  }

  // ── Answer checking ─────────────────────────────────────────────────────

  _checkAnswer() {
    if (this._answerLocked) return;
    this._answerLocked = true;

    // Build answer from placed tiles ordered by slotIdx
    const ordered = [...this.placed].sort((a, b) => a.slotIdx - b.slotIdx);
    const answer = ordered.map(p => p.tile).join('');
    const correct = this.targetTiles.join('');

    if (answer === correct) {
      this._onCorrect();
    } else {
      this._onWrong();
    }
  }

  _onCorrect() {
    this.score++;
    this.dom.scoreEl.textContent = this.score;
    this._setFeedback('✅ Chính xác!', 'correct');

    // Animate slots
    this.dom.answerStrip.querySelectorAll('.wa-slot').forEach(s => {
      s.classList.add('wa-slot--correct');
    });

    // Play audio of the correct word before advancing
    playWord(this.vocab[this.currentIndex]);

    setTimeout(() => this._nextOrEnd(), 1000);
  }

  _onWrong() {
    this.wrongCount++;
    const correct = this.targetTiles.join('');
    this._setFeedback(`❌ Đáp án đúng: ${correct}`, 'wrong');

    this.dom.answerStrip.querySelectorAll('.wa-slot').forEach(s => {
      s.classList.add('wa-slot--wrong');
    });

    setTimeout(() => this._nextOrEnd(), 1200);
  }

  _nextOrEnd() {
    this.currentIndex++;
    if (this.currentIndex >= this.vocab.length) {
      this._showEnd();
    } else {
      this._loadQuestion();
    }
  }

  // ── Hint ────────────────────────────────────────────────────────────────

  hint() {
    if (this._answerLocked) return;

    // Find next unfilled slot
    const nextSlot = this.targetTiles.findIndex((_, idx) =>
      !this.placed.some(p => p.slotIdx === idx)
    );
    if (nextSlot === -1) return;

    const correctTile = this.targetTiles[nextSlot];

    // Find the first unused tile in bank matching correctTile
    const bankIdx = this.availableTiles.findIndex((t, i) =>
      t === correctTile && !this.placed.some(p => p.tileIdx === i)
    );
    if (bankIdx === -1) return;

    this.hintsUsed++;
    this.placed.push({ tile: correctTile, tileIdx: bankIdx, slotIdx: nextSlot });
    this._renderAnswerStrip();
    this._renderTileBank();

    if (this.placed.length === this.targetTiles.length) {
      setTimeout(() => this._checkAnswer(), 200);
    }
  }

  /** Skip current word without penalty (just advance). */
  skip() {
    const correct = this.targetTiles.join('');
    this._setFeedback(`⏭ Bỏ qua — đáp án: ${correct}`, 'wrong');
    this._answerLocked = true;
    setTimeout(() => this._nextOrEnd(), 1500);
  }

  // ── End screen ───────────────────────────────────────────────────────────

  _showEnd() {
    this.dom.arena.hidden = true;
    this.dom.endScreen.hidden = false;

    const total = this.vocab.length;
    const pct = Math.round((this.score / total) * 100);

    this.dom.finalScoreEl.textContent = `${this.score} / ${total}`;
    this.dom.finalCorrectEl.textContent = this.score;
    this.dom.finalWrongEl.textContent = this.wrongCount;

    // Emoji rating
    let emoji = '🌱';
    if (pct >= 90) emoji = '🏆';
    else if (pct >= 70) emoji = '⭐';
    else if (pct >= 50) emoji = '💪';
    this.dom.endScreen.querySelector('.wa-end-icon').textContent = emoji;
  }

  /** Reset to idle. */
  reset() {
    this.dom.idleScreen.hidden = false;
    this.dom.arena.hidden = true;
    this.dom.endScreen.hidden = true;
  }

  // ── Feedback helper ──────────────────────────────────────────────────────

  _setFeedback(msg, type) {
    this.dom.feedback.textContent = msg;
    this.dom.feedback.className = 'wa-feedback' + (type ? ` wa-feedback--${type}` : '');
  }
}
