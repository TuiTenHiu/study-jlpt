/**
 * features/kanjiFlashcard.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Quản lý Flashcard Kanji N5
 * - Mặt trước: Chữ Kanji font Minchō to, đẹp
 * - Nút ✍️ góc trên phải: Mở modal xem thứ tự nét vẽ (Stroke Order)
 * - Mặt sau: Nghĩa, Âm On/Kun, Mẹo nhớ, Ví dụ
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { kanjiData } from '../data/kanji.js';

export class KanjiFlashcard {
  constructor(domElements) {
    this.dom = domElements;
    this.queue = [...kanjiData];
    this.currentIndex = 0;
    this.isFlipped = false;
    this._svgCache = new Map(); // Cache SVG đã tải để không fetch lại

    this._bindEvents();
    this.renderCard();
  }

  _bindEvents() {
    // Lật thẻ (nhấn vào vùng thẻ)
    this.dom.cardWrapper.addEventListener('click', () => this.flipCard());

    // Điều hướng — stopPropagation để không trigger flip
    this.dom.btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      this.nextCard();
    });
    this.dom.btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prevCard();
    });
    this.dom.btnShuffle.addEventListener('click', (e) => {
      e.stopPropagation();
      this.shuffle();
    });

    // Nút ✍️ mở modal stroke order
    if (this.dom.btnStrokeOrder) {
      this.dom.btnStrokeOrder.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = this.queue[this.currentIndex];
        this.openStrokeModal(card.kanji);
      });
    }

    // Đóng modal
    if (this.dom.strokeModal) {
      // Nút ✕
      this.dom.btnStrokeClose.addEventListener('click', () => this.closeStrokeModal());
      // Nhấn ra ngoài overlay
      this.dom.strokeModal.addEventListener('click', (e) => {
        if (e.target === this.dom.strokeModal) this.closeStrokeModal();
      });
      // Phím Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.closeStrokeModal();
      });
    }

    // Nút Xem lại (replay animation)
    if (this.dom.btnStrokeReplay) {
      this.dom.btnStrokeReplay.addEventListener('click', () => {
        const card = this.queue[this.currentIndex];
        this._playStrokeAnimation(card.kanji, true);
      });
    }
  }

  /* ── CARD ACTIONS ───────────────────────────────────────────────── */

  flipCard() {
    this.isFlipped = !this.isFlipped;
    this.dom.cardWrapper.classList.toggle('flipped', this.isFlipped);
  }

  nextCard() {
    if (this.currentIndex < this.queue.length - 1) {
      this.currentIndex++;
      this._resetAndRender();
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this._resetAndRender();
    }
  }

  shuffle() {
    for (let i = this.queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
    }
    this.currentIndex = 0;
    this._resetAndRender();
  }

  _resetAndRender() {
    this.isFlipped = false;
    this.dom.cardWrapper.classList.remove('flipped');

    // Thay nội dung sau khi thẻ đã quay hết (khớp với CSS transition 0.45s)
    clearTimeout(this._renderTimer);
    this._renderTimer = setTimeout(() => {
      // requestAnimationFrame không có trong môi trường test (Node) → fallback
      const raf = typeof requestAnimationFrame === 'function'
        ? requestAnimationFrame
        : (fn) => fn();
      raf(() => this.renderCard());
    }, 450);
  }

  /* ── RENDER CARD ────────────────────────────────────────────────── */

  renderCard() {
    if (this.queue.length === 0) return;

    const card = this.queue[this.currentIndex];

    // ── Batch tất cả DOM writes vào 1 block ──
    // (đọc dữ liệu trước, ghi DOM sau — tránh layout thrashing)
    const meaning  = card.meaning;
    const on       = `ON: ${card.on}`;
    const kun      = `KUN: ${card.kun}`;
    const mnemonic = `💡 Mẹo nhớ: ${card.mnemonic}`;
    const progress = `${this.currentIndex + 1} / ${this.queue.length}`;

    // Xây dựng examples HTML dưới dạng string trước để ghi 1 lần
    const examplesHTML = card.examples.map(ex =>
      `<li><strong>${ex.word}</strong> (${ex.reading}): ${ex.meaning}</li>`
    ).join('');

    // Ghi DOM — toàn bộ tập trung ở đây
    this.dom.kanjiFront.textContent           = card.kanji;
    this.dom.kanjiBackMeaning.textContent     = meaning;
    this.dom.kanjiBackOn.textContent          = on;
    this.dom.kanjiBackKun.textContent         = kun;
    this.dom.kanjiBackMnemonic.textContent    = mnemonic;
    this.dom.kanjiBackExamples.innerHTML      = examplesHTML;
    this.dom.progressText.textContent         = progress;
    this.dom.btnPrev.disabled = this.currentIndex === 0;
    this.dom.btnNext.disabled = this.currentIndex === this.queue.length - 1;
  }

  /* ── STROKE ORDER MODAL ─────────────────────────────────────────── */

  openStrokeModal(char) {
    if (!this.dom.strokeModal) return;

    // Cập nhật tiêu đề
    if (this.dom.strokeModalTitle) this.dom.strokeModalTitle.textContent = char;

    // Hiện modal
    this.dom.strokeModal.hidden = false;

    // Tải và chạy animation
    this._playStrokeAnimation(char, false);
  }

  closeStrokeModal() {
    if (this.dom.strokeModal) this.dom.strokeModal.hidden = true;
  }

  /**
   * Tải SVG từ KanjiVG và chạy animation vẽ từng nét.
   * @param {string} char     - Ký tự Kanji cần vẽ
   * @param {boolean} replay  - Nếu true: xóa animation rồi chạy lại
   */
  async _playStrokeAnimation(char, replay) {
    const body = this.dom.strokeModalBody;
    if (!body) return;

    const hex = char.charCodeAt(0).toString(16).padStart(5, '0');
    const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`;

    // Nếu chưa cache, hiện "Đang tải..."
    if (!this._svgCache.has(char)) {
      body.innerHTML = '<div class="stroke-loading">Đang tải...</div>';
    }

    try {
      // Dùng cache nếu đã tải trước đó
      let svgText = this._svgCache.get(char);
      if (!svgText) {
        const res = await fetch(url);
        if (!res.ok) throw new Error('SVG not found');
        svgText = await res.text();
        this._svgCache.set(char, svgText);
      }

      // Inject SVG vào modal body
      body.innerHTML = svgText;

      // Thiết lập animation cho từng nét (path)
      const paths = body.querySelectorAll('path');
      const texts = body.querySelectorAll('text');

      let delay = 0;
      const timePerStroke = 0.75; // giây

      paths.forEach((path, i) => {
        const len = path.getTotalLength();

        // Reset nếu replay
        if (replay) {
          path.style.animation = 'none';
          path.offsetHeight; // trigger reflow để reset animation
        }

        path.style.strokeDasharray  = len;
        path.style.strokeDashoffset = len;
        path.style.animation = `drawKanjiStroke ${timePerStroke}s ease-in-out ${delay}s forwards`;

        if (texts[i]) {
          if (replay) {
            texts[i].style.animation = 'none';
            texts[i].offsetHeight;
          }
          texts[i].style.animation = `fadeKanjiNumber 0.2s linear ${delay}s forwards`;
        }

        delay += timePerStroke * 0.65;
      });

    } catch (err) {
      console.warn('KanjiVG không có sẵn:', err);
      body.innerHTML = `
        <div class="stroke-loading">
          Không tải được dữ liệu nét vẽ.<br>
          Kiểm tra kết nối mạng.
        </div>`;
    }
  }
}
