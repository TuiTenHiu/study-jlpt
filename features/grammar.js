/**
 * features/grammar.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Grammar System — manages loading and UI for grammar points.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { grammarData } from '../data/grammar.js';

export class Grammar {
  /**
   * @param {Object} dom  References to UI elements
   */
  constructor(dom) {
    this.dom = dom;
    this.currentLesson = 1;
  }

  /**
   * Load a specific lesson and render it.
   * @param {number} lessonNum 
   */
  loadLesson(lessonNum) {
    this.currentLesson = lessonNum;
    this.render();
  }

  /** Render the grammar points for the current lesson. */
  render() {
    if (!this.dom.container) return;
    
    const lessonPoints = grammarData[this.currentLesson];
    this.dom.container.innerHTML = '';

    if (!lessonPoints || lessonPoints.length === 0) {
      this.dom.container.innerHTML = `
        <div class="grammar-empty">
          <div class="empty-icon">📚</div>
          <p>Dữ liệu ngữ pháp cho bài ${this.currentLesson} đang được cập nhật...</p>
        </div>
      `;
      return;
    }

    lessonPoints.forEach((point, index) => {
      const card = document.createElement('div');
      card.className = 'grammar-card';
      card.style.animationDelay = `${index * 0.1}s`;

      const examplesHtml = point.examples.map((ex, exIdx) => `
        <div class="grammar-example">
          <div class="ex-label">例 ${exIdx + 1}:</div>
          <div class="ex-jp">${ex.jp}</div>
          <div class="ex-roma">${ex.romaji}</div>
          <div class="ex-vi">${ex.vi}</div>
        </div>
      `).join('');

      card.innerHTML = `
        <div class="grammar-card-header">
          <div class="grammar-num"><span>${index + 1}</span></div>
          <h3 class="grammar-title">${point.title}</h3>
        </div>
        <div class="grammar-card-body">
          <div class="grammar-structure-box">
            <span class="label">Cấu trúc:</span>
            <code class="structure">${point.structure}</code>
          </div>
          <div class="grammar-explanation">
            <p>${point.explanation}</p>
          </div>
          <div class="grammar-examples-header">Ví dụ minh họa:</div>
          <div class="grammar-examples-list">
            ${examplesHtml}
          </div>
        </div>
      `;
      this.dom.container.appendChild(card);
    });

    // Scroll to top of panel
    this.dom.container.scrollTop = 0;
  }
}
