/**
 * tests/vocabPractice.test.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Unit tests for features/vocabPractice.js — the VocabPractice class.
 *
 * Strategy:
 *   The VocabPractice class accepts a `dom` object (dependency injection).
 *   We mock the DOM surface and provide sample vocabulary data.
 *   Timers are controlled with vi.useFakeTimers().
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { VocabPractice } from '../features/vocabPractice.js';

// Mock audio.js
vi.mock('../features/audio.js', () => ({
  playWord: vi.fn(),
}));

import { playWord } from '../features/audio.js';

function makeMockEl(overrides = {}) {
  return {
    textContent: '',
    className:   '',
    disabled:    false,
    hidden:      false,
    value:       '',
    focus:       vi.fn(),
    ...overrides,
  };
}

function makeMockDom() {
  return {
    arena:        makeMockEl({ hidden: true }),
    endScreen:    makeMockEl({ hidden: true }),
    question:     makeMockEl(),
    input:        makeMockEl({ value: '' }),
    btnSubmit:    makeMockEl(),
    feedback:     makeMockEl(),
    score:        makeMockEl(),
    remaining:    makeMockEl(),
    finalScore:   makeMockEl(),
    finalCorrect: makeMockEl(),
    finalWrong:   makeMockEl(),
  };
}

const sampleVocab = [
  { jp: 'おはよう', romaji: 'ohayou', vi: 'Chào buổi sáng' },
  { jp: 'こんにちは', romaji: 'konnichiwa', vi: 'Xin chào' },
  { jp: 'おやすみ', romaji: 'oyasumi', vi: 'Chúc ngủ ngon' },
];

describe('VocabPractice', () => {
  let practice;
  let dom;

  beforeEach(() => {
    vi.useFakeTimers();
    dom = makeMockDom();
    practice = new VocabPractice(dom);
    practice.vocabSource = [...sampleVocab];
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it('constructor initializes state correctly', () => {
    expect(practice.state.score).toBe(0);
    expect(practice.state.sessionStarted).toBe(false);
    expect(practice.queue).toEqual([]);
  });

  it('startSession() prepares the queue and starts the session', () => {
    practice.startSession();
    expect(practice.state.sessionStarted).toBe(true);
    expect(practice.queue.length).toBe(sampleVocab.length);
    expect(dom.arena.hidden).toBe(false);
    expect(dom.endScreen.hidden).toBe(true);
    expect(practice.state.currentWord).toBeDefined();
    vi.advanceTimersByTime(400);
    expect(playWord).toHaveBeenCalled();
  });

  it('submit() handles correct romaji answer', () => {
    practice.startSession();
    const currentWord = practice.state.currentWord;
    const initialQueueLength = practice.queue.length;

    practice.submit(currentWord.romaji);

    expect(practice.state.score).toBe(10);
    expect(practice.state.correctCount).toBe(1);
    expect(practice.queue.length).toBe(initialQueueLength - 1);
    expect(dom.input.className).toBe('correct');
    expect(dom.feedback.textContent).toContain('Correct');
  });

  it('submit() handles correct Vietnamese answer', () => {
    practice.startSession();
    const currentWord = practice.state.currentWord;

    practice.submit(currentWord.vi);

    expect(practice.state.score).toBe(10);
    expect(practice.state.correctCount).toBe(1);
    expect(dom.input.className).toBe('correct');
  });

  it('submit() handles incorrect answer and moves word to end of queue', () => {
    practice.startSession();
    const currentWord = practice.state.currentWord;
    const initialQueueLength = practice.queue.length;

    practice.submit('wrong answer');

    expect(practice.state.score).toBe(0);
    expect(practice.state.wrongCount).toBe(1);
    expect(practice.queue.length).toBe(initialQueueLength);
    expect(practice.queue[practice.queue.length - 1]).toEqual(currentWord);
    expect(dom.input.className).toBe('wrong');
    expect(dom.feedback.textContent).toContain('Incorrect');
  });

  it('submit() ignores empty input but focuses it', () => {
    practice.startSession();
    practice.submit('   ');
    expect(practice.state.isAnswering).toBe(false);
    expect(dom.input.focus).toHaveBeenCalled();
  });

  it('advances to next word after submission delay', () => {
    practice.startSession();
    practice.submit(practice.state.currentWord.romaji);
    
    vi.advanceTimersByTime(1800);
    
    expect(practice.state.isAnswering).toBe(false);
    expect(dom.input.value).toBe('');
    expect(dom.input.disabled).toBe(false);
  });

  it('ends session when queue is empty', () => {
    practice.vocabSource = [sampleVocab[0]];
    practice.startSession();
    
    practice.submit(sampleVocab[0].romaji);
    vi.advanceTimersByTime(1800);

    expect(dom.arena.hidden).toBe(true);
    expect(dom.endScreen.hidden).toBe(false);
    expect(dom.finalScore.textContent).toBe(10);
    expect(dom.finalCorrect.textContent).toBe(1);
  });

  it('shuffle() randomly reorders the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const original = [...arr];
    practice._shuffle(arr);
    // Theoretically could be the same, but very unlikely
    expect(arr).not.toEqual(original);
    expect(arr.sort()).toEqual(original.sort());
  });

  describe('Reverse Mode (vi_to_jp)', () => {
    it('shows Vietnamese prompt instead of Japanese', () => {
      practice.setMode('vi_to_jp');
      practice.startSession();
      // It should display Vietnamese (sampleVocab uses 'vi' field)
      expect(dom.question.textContent).toBe(practice.state.currentWord.vi);
    });

    it('validates Japanese characters correctly', () => {
      practice.setMode('vi_to_jp');
      practice.startSession();
      const currentWord = practice.state.currentWord;
      
      practice.submit(currentWord.jp);
      expect(practice.state.correctCount).toBe(1);
      expect(dom.input.className).toBe('correct');
    });

    it('fails when given romaji in reverse mode', () => {
      practice.setMode('vi_to_jp');
      practice.startSession();
      const currentWord = practice.state.currentWord;
      
      practice.submit(currentWord.romaji);
      expect(practice.state.correctCount).toBe(0);
      expect(dom.input.className).toBe('wrong');
      // Should show Japanese answer in feedback
      expect(dom.feedback.textContent).toContain(currentWord.jp);
    });

    it('insertChar() appends character to input', () => {
      practice.setMode('vi_to_jp');
      practice.startSession();
      practice.insertChar('あ');
      expect(dom.input.value).toBe('あ');
      practice.insertChar('い');
      expect(dom.input.value).toBe('あい');
    });

    it('clearInput() resets input value', () => {
      dom.input.value = 'abc';
      practice.clearInput();
      expect(dom.input.value).toBe('');
    });
  });
});
