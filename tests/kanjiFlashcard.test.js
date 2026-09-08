import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { KanjiFlashcard } from '../features/kanjiFlashcard.js';
import { kanjiData } from '../data/kanji.js';

describe('KanjiFlashcard', () => {
  let dom;
  let flashcard;

  beforeEach(() => {
    // Mock the DOM elements
    dom = {
      cardWrapper: { classList: { toggle: vi.fn(), remove: vi.fn() }, addEventListener: vi.fn() },
      kanjiFront: { style: {}, textContent: '' },
      kanjiFrontSvg: { style: {}, innerHTML: '', querySelectorAll: vi.fn(() => []) },
      kanjiBackMeaning: { textContent: '' },
      kanjiBackOn: { textContent: '' },
      kanjiBackKun: { textContent: '' },
      kanjiBackMnemonic: { textContent: '' },
      kanjiBackExamples: { innerHTML: '', appendChild: vi.fn() },
      progressText: { textContent: '' },
      btnPrev: { disabled: false, addEventListener: vi.fn() },
      btnNext: { disabled: false, addEventListener: vi.fn() },
      btnShuffle: { addEventListener: vi.fn() }
    };

    // Global document mock for createElement
    global.document = {
      createElement: vi.fn(() => ({ innerHTML: '' }))
    };

    // Mock fetch for SVG
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve('<svg><path></path><text></text></svg>')
      })
    );

    // Mock requestAnimationFrame (không tồn tại trong Node/Vitest)
    global.requestAnimationFrame = vi.fn((fn) => fn());

    // Use fake timers to test setTimeout in _resetAndRender
    vi.useFakeTimers();

    flashcard = new KanjiFlashcard(dom);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('khởi tạo với dữ liệu gốc', () => {
    expect(flashcard.queue.length).toBe(kanjiData.length);
    expect(flashcard.currentIndex).toBe(0);
    expect(dom.kanjiFront.textContent).toBe(kanjiData[0].kanji);
  });

  it('có thể lật thẻ (flip)', () => {
    expect(flashcard.isFlipped).toBe(false);
    flashcard.flipCard();
    expect(flashcard.isFlipped).toBe(true);
    expect(dom.cardWrapper.classList.toggle).toHaveBeenCalledWith('flipped', true);
  });

  it('chuyển thẻ tiếp theo (next)', () => {
    flashcard.nextCard();
    expect(flashcard.currentIndex).toBe(1);
    
    // Test _resetAndRender logic
    expect(dom.cardWrapper.classList.remove).toHaveBeenCalledWith('flipped');
    
    // Fast-forward timer for the setTimeout in _resetAndRender
    vi.runAllTimers();
    expect(dom.kanjiFront.textContent).toBe(kanjiData[1].kanji);
  });

  it('chuyển thẻ trước đó (prev)', () => {
    // Di chuyển lên card 1 trước
    flashcard.nextCard();
    vi.runAllTimers();
    expect(flashcard.currentIndex).toBe(1);

    // Di chuyển lùi lại
    flashcard.prevCard();
    expect(flashcard.currentIndex).toBe(0);
    vi.runAllTimers();
    expect(dom.kanjiFront.textContent).toBe(kanjiData[0].kanji);
  });

  it('không thể prev khi ở card đầu tiên', () => {
    flashcard.prevCard();
    expect(flashcard.currentIndex).toBe(0); // Không đổi
  });

  it('xáo trộn (shuffle) thẻ', () => {
    const originalFirstKanji = flashcard.queue[0].kanji;
    
    // Mock Math.random to make it deterministic (reverse order)
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.99;
    global.Math = mockMath;
    
    flashcard.shuffle();
    vi.runAllTimers();
    
    expect(flashcard.currentIndex).toBe(0);
    // Độ dài không đổi
    expect(flashcard.queue.length).toBe(kanjiData.length);
  });

  it('tải và hiển thị SVG animation trong modal (Stroke Order)', async () => {
    const fakePath = {
      getTotalLength: () => 120,
      style: {},
      offsetHeight: 0,  // trigger reflow mock
    };
    const fakeText = { style: {}, offsetHeight: 0 };

    // Mock strokeModalBody.querySelectorAll
    dom.strokeModalBody = {
      innerHTML: '',
      querySelectorAll: vi.fn((selector) => {
        if (selector === 'path') return [fakePath];
        if (selector === 'text') return [fakeText];
        return [];
      })
    };

    // Rebuild flashcard với dom mới
    flashcard.dom.strokeModalBody = dom.strokeModalBody;

    // Gọi trực tiếp hàm vẽ nét của class mới
    await flashcard._playStrokeAnimation('日', false);

    // Kiểm tra fetch được gọi đúng URL (Hex của 日 là 065e5)
    expect(global.fetch).toHaveBeenCalledWith(
      'https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/065e5.svg'
    );

    // Kiểm tra CSS animation được gán vào path
    expect(fakePath.style.strokeDasharray).toBe(120);
    expect(fakePath.style.animation).toContain('drawKanjiStroke');

    // Kiểm tra CSS animation được gán vào text (số thứ tự nét)
    expect(fakeText.style.animation).toContain('fadeKanjiNumber');
  });
});
