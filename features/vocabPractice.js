/**
 * features/vocabPractice.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Vocabulary Practice (Learn Mode) — implement adaptive repetition (SRS-like).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { playWord } from './audio.js';
import { vocabData } from '../data/vocab.js';

export class VocabPractice {
  /**
   * @param {Object} dom  Keyboard references to UI elements
   */
  constructor(dom) {
    this.dom = dom;
    this.queue = [];
    this.vocabSource = [];
    this.currentLesson = 1;
    this.state = {
      currentWord: null,
      score: 0,
      correctCount: 0,
      wrongCount: 0,
      sessionStarted: false,
      isAnswering: false,
      mode: 'jp_to_all' // 'jp_to_all' | 'vi_to_jp'
    };
  }

  /** Load lessons and start session. */
  loadLessons(lessonsArray) {
    this.currentLessons = lessonsArray || [];
    if (this.currentLessons.length === 0) {
      this.vocabSource = [];
      this.dom.arena.hidden = true;
      return;
    }

    try {
      this.vocabSource = [];
      this.currentLessons.forEach((num) => {
        const wordsForLesson = vocabData[num];
        if (wordsForLesson && wordsForLesson.length > 0) {
          const words = wordsForLesson.map(w => ({ ...w, _lessonNum: num }));
          this.vocabSource.push(...words);
        }
      });
      
      this.startSession();
    } catch (error) {
      console.error('Failed to load lessons for practice:', error);
    }
  }

  startSession() {
    if (this.vocabSource.length === 0) return;
    
    // Copy and shuffle initial pool
    let pool = [...this.vocabSource];
    this._shuffle(pool);
    
    // Limit to 50 random words per session to prevent exhaustion
    this.queue = pool.slice(0, 50);
    
    this.state = {
      currentWord: null,
      score: 0,
      correctCount: 0,
      wrongCount: 0,
      sessionStarted: true,
      isAnswering: false,
      mode: this.state.mode
    };

    this.dom.arena.hidden = false;
    this.dom.endScreen.hidden = true;
    
    this._nextWord();
  }

  submit(answer) {
    if (this.state.isAnswering || !this.state.currentWord) return;
    
    const word = this.state.currentWord;
    const typed = answer.trim(); // Don't lowercase for Japanese characters
    
    if (!typed) {
      this.dom.input.focus();
      return;
    }

    this.state.isAnswering = true;

    // Check against romaji OR Vietnamese meaning (in jp_to_all mode)
    // OR check against Japanese word (in vi_to_jp mode)
    let isCorrect = false;
    if (this.state.mode === 'vi_to_jp') {
      isCorrect = typed === word.jp;
    } else {
      isCorrect = typed.toLowerCase() === word.romaji.toLowerCase() || 
                  typed.toLowerCase() === word.vi.toLowerCase();
    }

    if (isCorrect) {
      this.state.score += 10;
      this.state.correctCount++;
      // Remove from queue
      this.queue.shift();
      this._showFeedback('correct', '✅ Correct!');
    } else {
      this.state.wrongCount++;
      // Move to end of queue for repetition
      const failed = this.queue.shift();
      this.queue.push(failed);
      const correctAnswer = this.state.mode === 'vi_to_jp' ? word.jp : `${word.romaji} / ${word.vi}`;
      this._showFeedback('wrong', `❌ Incorrect! Answer: ${correctAnswer}`);
    }

    this._updateStats();

    // Brief pause then next
    setTimeout(() => {
      this._clearFeedback();
      this.state.isAnswering = false;
      this._nextWord();
    }, 1600);
  }

  _nextWord() {
    if (this.queue.length === 0) {
      this._endSession();
      return;
    }

    this.state.currentWord = this.queue[0];
    
    if (this.state.mode === 'vi_to_jp') {
      this.dom.question.textContent = this.state.currentWord.vi;
    } else {
      this.dom.question.textContent = this.state.currentWord.jp;
    }

    this.dom.input.value = '';
    this.dom.input.focus();
    this._updateStats();

    // Auto-play pronunciation
    playWord(this.state.currentWord);
  }

  _endSession() {
    this.dom.arena.hidden = true;
    this.dom.endScreen.hidden = false;
    this.dom.finalScore.textContent = this.state.score;
    this.dom.finalCorrect.textContent = this.state.correctCount;
    this.dom.finalWrong.textContent = this.state.wrongCount;
  }

  setMode(mode) {
    this.state.mode = mode;
    if (this.state.sessionStarted) {
      this.startSession();
    }
  }

  insertChar(char) {
    if (this.state.isAnswering) return;
    this.dom.input.value += char;
    this.dom.input.focus();
  }

  clearInput() {
    this.dom.input.value = '';
    this.dom.input.focus();
  }

  _updateStats() {
    this.dom.score.textContent = this.state.score;
    this.dom.remaining.textContent = this.queue.length;
  }

  _showFeedback(type, msg) {
    this.dom.feedback.textContent = msg;
    this.dom.feedback.className = `vocab-feedback show ${type}`;
    this.dom.input.className = type;
    this.dom.input.disabled = true;
    if (this.dom.btnSubmit) this.dom.btnSubmit.disabled = true;
  }

  _clearFeedback() {
    this.dom.feedback.textContent = '';
    this.dom.feedback.className = 'vocab-feedback';
    this.dom.input.className = '';
    this.dom.input.disabled = false;
    if (this.dom.btnSubmit) this.dom.btnSubmit.disabled = false;
  }

  _shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
