/**
 * features/flashcard.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Vocabulary Flashcard System — manages loading, state, and UI for word learning.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { playWord } from './audio.js';
import { vocabData } from '../data/vocab.js';

export class Flashcard {
  /**
   * @param {Object} dom  Keyboard references to UI elements
   */
  constructor(dom) {
    this.dom = dom;
    this.vocab = [];
    this.currentIndex = 0;
    this.isFlipped = false;
    this.currentLesson = 1;
    this.learnedWords = JSON.parse(localStorage.getItem('learned_words') || '[]');
    
    this._initEvents();
  }

  _initEvents() {
    // Click card to flip
    this.dom.card.addEventListener('click', () => this.flip());
  }

  /** Load lessons from vocabData and reset state. */
  loadLessons(lessonsArray, limit) {
    this.currentLessons = lessonsArray || [];
    this.limit = (limit === undefined) ? 'all' : limit;

    if (this.currentLessons.length === 0) {
      this.vocab = [];
      this.render();
      return;
    }

    try {
      let allWords = [];
      this.currentLessons.forEach((num) => {
        const wordsForLesson = vocabData[num];
        if (wordsForLesson && wordsForLesson.length > 0) {
          // Attach lesson number to track learned state properly
          const words = wordsForLesson.map(w => ({ ...w, _lessonNum: num }));
          allWords.push(...words);
        }
      });

      // Shuffle the full pool, then apply limit
      for (let i = allWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allWords[i], allWords[j]] = [allWords[j], allWords[i]];
      }
      this.vocab = (this.limit === 'all') ? allWords : allWords.slice(0, this.limit);

      this.currentIndex = 0;
      this.isFlipped = false;
      this.render();
      
      // Speak the first word of the newly loaded lessons
      if (this.vocab.length > 0) {
        this.speak();
      }
    } catch (error) {
      console.error('Failed to load lessons:', error);
    }
  }

  next() {
    if (this.vocab.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.vocab.length;
    this.isFlipped = false;
    this.render();
    this.speak();
  }

  prev() {
    if (this.vocab.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.vocab.length) % this.vocab.length;
    this.isFlipped = false;
    this.render();
    this.speak();
  }

  shuffle() {
    if (this.vocab.length === 0) return;
    // Fisher-Yates shuffle
    for (let i = this.vocab.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.vocab[i], this.vocab[j]] = [this.vocab[j], this.vocab[i]];
    }
    this.currentIndex = 0;
    this.isFlipped = false;
    this.render();
    this.speak();
  }

  flip() {
    if (this.vocab.length === 0) return;
    this.isFlipped = !this.isFlipped;
    this.dom.card.classList.toggle('flipped', this.isFlipped);
    // Speak the Japanese word every time user interacts with the card
    this.speak();
  }

  toggleLearned() {
    if (this.vocab.length === 0) return;
    const word = this.vocab[this.currentIndex];
    const key = `${word._lessonNum}_${word.jp}`;
    
    if (this.learnedWords.includes(key)) {
      this.learnedWords = this.learnedWords.filter(k => k !== key);
    } else {
      this.learnedWords.push(key);
    }
    
    localStorage.setItem('learned_words', JSON.stringify(this.learnedWords));
    this.render();
  }

  /**
   * Speak the current word's Japanese text.
   * Delegates to the new audio engine in audio.js.
   */
  speak() {
    if (this.vocab.length === 0) return;
    
    const word = this.vocab[this.currentIndex];
    // We pass both buttons so they both show the "busy" state while audio plays
    playWord(word, [this.dom.btnSpeakFront, this.dom.btnSpeakBack]);
  }

  render() {
    if (this.vocab.length === 0) {
      this.dom.front.textContent = '---';
      this.dom.backRomaji.textContent = '---';
      this.dom.backVi.textContent = '---';
      this.dom.progress.textContent = 'Card 0 / 0';
      return;
    }

    const word = this.vocab[this.currentIndex];
    const key = `${word._lessonNum}_${word.jp}`;
    const isLearned = this.learnedWords.includes(key);

    // Update content
    if (word.image) {
      this.dom.front.innerHTML = `
        <div class="vocab-img-container">
          <img src="images/vocab/${word.image}" alt="${word.jp}" class="vocab-img">
          <div class="card-text-jp" style="margin-top:15px">${word.jp}</div>
        </div>
      `;
    } else {
      this.dom.front.textContent = word.jp;
    }

    this.dom.backRomaji.textContent = word.romaji;
    this.dom.backVi.textContent = word.vi;
    this.dom.progress.textContent = `Card ${this.currentIndex + 1} / ${this.vocab.length}`;
    
    // Update visual states
    this.dom.card.classList.toggle('flipped', this.isFlipped);
    this.dom.cardWrapper.classList.toggle('is-learned', isLearned);
    
    if (this.dom.btnLearned) {
      this.dom.btnLearned.textContent = isLearned ? '✓ Learned' : 'Mark as Learned';
      this.dom.btnLearned.classList.toggle('active', isLearned);
    }
  }

  /** Reset UI when switching to this mode. */
  activate() {
    if (this.vocab.length === 0 && this.currentLessons && this.currentLessons.length > 0) {
      this.loadLessons(this.currentLessons, this.limit);
    } else {
      this.render();
    }
  }
}
