/**
 * features/particleQuiz.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Logic cho Particle Quiz — trò chơi điền trợ từ tiếng Nhật.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { particleQuestions } from '../data/particles.js';

export class ParticleQuiz {
  /**
   * @param {Object} dom  Các tham chiếu đến phần tử DOM của quiz
   */
  constructor(dom) {
    this.dom = dom;
    this.allQuestions = particleQuestions;
    this.queue = [];
    this.state = {
      currentQ: null,
      score: 0,
      correct: 0,
      wrong: 0,
      total: 0,
      isAnswering: false,
      mode: 'multiple', // 'multiple' | 'typing'
      filter: { lesson: 'all', difficulty: 'all' },
      wrongList: []
    };
  }

  // ─── Lọc và khởi động ────────────────────────────────────────────────────

  /** Lọc câu hỏi theo bài và độ khó, sau đó bắt đầu phiên chơi */
  startGame(filter = {}) {
    this.state.filter = { lesson: 'all', difficulty: 'all', ...filter };
    let pool = [...this.allQuestions];

    if (this.state.filter.lesson !== 'all') {
      const lesson = Number(this.state.filter.lesson);
      pool = pool.filter(q => q.lesson === lesson);
    }
    if (this.state.filter.difficulty !== 'all') {
      const diff = Number(this.state.filter.difficulty);
      pool = pool.filter(q => q.difficulty === diff);
    }

    if (pool.length === 0) {
      this._showMessage('Không có câu hỏi nào phù hợp bộ lọc này.');
      return;
    }

    this._shuffle(pool);
    this.queue = pool;
    this.state = {
      ...this.state,
      currentQ: null,
      score: 0,
      correct: 0,
      wrong: 0,
      total: pool.length,
      isAnswering: false,
      wrongList: []
    };

    this.dom.startScreen.hidden = true;
    this.dom.gameScreen.hidden = false;
    this.dom.endScreen.hidden = true;
    this._nextQuestion();
  }

  // ─── Luồng câu hỏi ───────────────────────────────────────────────────────

  _nextQuestion() {
    if (this.queue.length === 0) {
      this._endGame();
      return;
    }

    this.state.currentQ = this.queue.shift();
    const q = this.state.currentQ;
    this.state.isAnswering = false;

    // Cập nhật thanh tiến trình
    const answered = this.state.correct + this.state.wrong;
    const pct = (answered / this.state.total) * 100;
    this.dom.progressBar.style.width = `${pct}%`;
    this.dom.progressText.textContent = `${answered + 1} / ${this.state.total}`;
    this.dom.scoreDisplay.textContent = this.state.score;

    // Hiển thị câu hỏi
    this._renderQuestion(q);

    // Hiển thị lựa chọn tùy theo chế độ
    if (this.state.mode === 'multiple') {
      this._renderChoices(q);
    } else {
      this._renderTypingInput();
    }

    this.dom.explanation.hidden = true;
    this.dom.explanation.textContent = '';
  }

  _renderQuestion(q) {
    // Tô sáng ô trống trong câu
    const html = q.sentence.replace(/___/g,
      '<span class="pq-blank">　　　</span>'
    );
    this.dom.questionText.innerHTML = html;
    this.dom.translationText.textContent = q.translation;

    // Badge độ khó
    const labels = { 1: '⭐ Dễ', 2: '⭐⭐ Trung bình', 3: '⭐⭐⭐ Khó' };
    this.dom.diffBadge.textContent = labels[q.difficulty] || '';
    this.dom.diffBadge.className = `pq-diff-badge diff-${q.difficulty}`;

    // Badge bài học
    this.dom.lessonBadge.textContent = `Bài ${q.lesson}`;
  }

  _renderChoices(q) {
    this.dom.choicesArea.hidden = false;
    this.dom.typingArea.hidden = true;

    // Xáo trộn 4 lựa chọn (1 đúng + 3 sai)
    const choices = this._shuffle([q.answer, ...q.distractors]);
    this.dom.choicesArea.innerHTML = '';

    choices.forEach(particle => {
      const btn = document.createElement('button');
      btn.className = 'pq-choice-btn';
      btn.textContent = particle;
      btn.dataset.value = particle;
      btn.addEventListener('click', () => this._submitAnswer(particle));
      this.dom.choicesArea.appendChild(btn);
    });
  }

  _renderTypingInput() {
    this.dom.choicesArea.hidden = true;
    this.dom.typingArea.hidden = false;
    this.dom.typingInput.value = '';
    this.dom.typingInput.focus();
  }

  // ─── Xử lý đáp án ────────────────────────────────────────────────────────

  submitTyping() {
    if (this.state.isAnswering) return;
    const answer = this.dom.typingInput.value.trim();
    if (!answer) return;
    this._submitAnswer(answer);
  }

  _submitAnswer(answer) {
    if (this.state.isAnswering) return;
    this.state.isAnswering = true;

    const q = this.state.currentQ;
    const isCorrect = answer === q.answer;

    if (isCorrect) {
      this.state.score += this._scoreForDifficulty(q.difficulty);
      this.state.correct++;
      this._showFeedback(true, answer, q);
    } else {
      this.state.wrong++;
      this.state.wrongList.push({ q, given: answer });
      this._showFeedback(false, answer, q);
    }

    // Tiếp câu sau
    setTimeout(() => {
      this._nextQuestion();
    }, 2200);
  }

  _scoreForDifficulty(diff) {
    return { 1: 5, 2: 10, 3: 20 }[diff] || 10;
  }

  _showFeedback(isCorrect, given, q) {
    // Tô màu ô trống
    const blankEls = this.dom.questionText.querySelectorAll('.pq-blank');
    blankEls.forEach(el => {
      el.textContent = q.answer;
      el.className = `pq-blank ${isCorrect ? 'correct' : 'wrong'}`;
    });

    // Tô màu nút (chế độ trắc nghiệm)
    if (this.state.mode === 'multiple') {
      this.dom.choicesArea.querySelectorAll('.pq-choice-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.value === q.answer) btn.classList.add('correct');
        else if (btn.dataset.value === given) btn.classList.add('wrong');
      });
    } else {
      this.dom.typingInput.disabled = true;
      this.dom.typingInput.className = isCorrect ? 'correct' : 'wrong';
    }

    // Hiện giải thích
    this.dom.explanation.hidden = false;
    this.dom.explanation.textContent = `${isCorrect ? '✅' : '❌'} ${q.explanation}`;
    this.dom.explanation.className = `pq-explanation ${isCorrect ? 'correct' : 'wrong'}`;

    // Cập nhật thống kê
    this.dom.scoreDisplay.textContent = this.state.score;
  }

  // ─── Kết thúc ────────────────────────────────────────────────────────────

  _endGame() {
    this.dom.gameScreen.hidden = true;
    this.dom.endScreen.hidden = false;

    const total = this.state.correct + this.state.wrong;
    const pct = total > 0 ? Math.round((this.state.correct / total) * 100) : 0;

    this.dom.endScore.textContent = this.state.score;
    this.dom.endCorrect.textContent = this.state.correct;
    this.dom.endWrong.textContent = this.state.wrong;
    this.dom.endPercent.textContent = `${pct}%`;

    // Medal theo % đúng
    const medal = pct >= 90 ? '🏆' : pct >= 70 ? '🥈' : pct >= 50 ? '🥉' : '📖';
    this.dom.endMedal.textContent = medal;

    // Danh sách câu sai
    this._renderWrongList();
  }

  _renderWrongList() {
    const container = this.dom.wrongListContainer;
    container.innerHTML = '';

    if (this.state.wrongList.length === 0) {
      container.innerHTML = '<p class="pq-perfect">🎉 Bạn trả lời đúng tất cả!</p>';
      return;
    }

    const title = document.createElement('h4');
    title.textContent = `📝 Các câu trả lời sai (${this.state.wrongList.length} câu):`;
    container.appendChild(title);

    this.state.wrongList.forEach(({ q, given }) => {
      const item = document.createElement('div');
      item.className = 'pq-wrong-item';
      item.innerHTML = `
        <div class="pq-wrong-sentence">${q.sentence.replace(/___/g, `<strong class="pq-answer-highlight">${q.answer}</strong>`)}</div>
        <div class="pq-wrong-meta">
          <span class="pq-wrong-given">Bạn chọn: <em>${given}</em></span>
          <span class="pq-wrong-correct">Đúng: <strong>${q.answer}</strong></span>
        </div>
        <div class="pq-wrong-explain">${q.explanation}</div>
      `;
      container.appendChild(item);
    });
  }

  // ─── Điều hướng ──────────────────────────────────────────────────────────

  setMode(mode) {
    this.state.mode = mode;
  }

  goToStart() {
    this.dom.gameScreen.hidden = true;
    this.dom.endScreen.hidden = true;
    this.dom.startScreen.hidden = false;
  }

  insertChar(char) {
    if (this.state.mode !== 'typing' || this.state.isAnswering) return;
    this.dom.typingInput.value += char;
    this.dom.typingInput.focus();
  }

  // ─── Tiện ích ────────────────────────────────────────────────────────────

  _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  _showMessage(msg) {
    alert(msg);
  }

  /** Thống kê nhanh để debug */
  getStats() {
    return {
      score: this.state.score,
      correct: this.state.correct,
      wrong: this.state.wrong,
      remaining: this.queue.length
    };
  }
}
