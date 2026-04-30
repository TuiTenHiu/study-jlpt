/**
 * tests/quiz.test.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Unit tests for features/quiz.js — the Quiz class.
 *
 * Strategy:
 *   The Quiz class accepts a `dom` object (dependency injection), so we mock
 *   the entire DOM surface.  No browser / jsdom required.
 *   Timers are controlled with vi.useFakeTimers() / vi.useRealTimers().
 *
 * Coverage areas:
 *   1. Constructor initialisation
 *   2. setMode / getMode
 *   3. setCustomPool
 *   4. _buildDataset (pool selection logic)
 *   5. _buildFreshState (state reset)
 *   6. start() / reset() / destroy()
 *   7. submit() + answer evaluation (correct, wrong, empty, double-submit)
 *   8. Timer countdown + timeout handling
 *   9. Consecutive-character repeat prevention
 *  10. End screen (after 20 questions)
 *  11. _setFeedback helper
 *  12. _updateTimerUI (color thresholds + bar width)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
  describe, it, expect,
  vi, beforeEach, afterEach,
} from 'vitest';

import { Quiz } from '../features/quiz.js';
import { HIRAGANA_FLAT, KATAKANA_FLAT } from '../data/kana.js';

/* ════════════════════════════════════════════════════════════════════════════
   Mock DOM factory
   ─────────────────────────────────────────────────────────────────────────
   Each "element" has the properties the Quiz class actually touches.
   We use vi.fn() for classList methods so tests can assert calls.
════════════════════════════════════════════════════════════════════════════ */

function makeMockEl(overrides = {}) {
  return {
    textContent: '',
    className:   '',
    disabled:    false,
    hidden:      false,
    value:       '',
    offsetWidth: 0,                // accessed for reflow trick (void el.offsetWidth)
    style: {
      color:            '',
      width:            '',
      background:       '',
      stroke:           '',
      strokeDashoffset: '',
      display:          '',
    },
    classList: {
      add:      vi.fn(),
      remove:   vi.fn(),
      contains: vi.fn(() => false),
    },
    focus: vi.fn(),
    ...overrides,
  };
}

function makeMockDom() {
  return {
    idleScreen:  makeMockEl(),
    arena:       makeMockEl({ hidden: true }),
    endScreen:   makeMockEl({ hidden: true }),
    qNum:        makeMockEl(),
    qTotal:      makeMockEl(),
    score:       makeMockEl(),
    timerNum:    makeMockEl(),
    timerArc:    makeMockEl(),
    timerBar:    makeMockEl(),
    charDisplay: makeMockEl(),
    input:       makeMockEl({ value: '' }),
    btnSubmit:   makeMockEl(),
    feedback:    makeMockEl(),
    endIcon:     makeMockEl(),
    finalScore:  makeMockEl(),
    finalTotal:  makeMockEl(),
    statCorrect: makeMockEl(),
    statWrong:   makeMockEl(),
  };
}

/* Total questions constant — mirrors the private TOTAL_QUESTIONS in quiz.js */
const TOTAL_QUESTIONS = 20;
const SECONDS_PER_Q   = 10;

/* ════════════════════════════════════════════════════════════════════════════
   1. Constructor
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — constructor', () => {
  it('creates an instance without throwing', () => {
    expect(() => new Quiz(makeMockDom())).not.toThrow();
  });

  it('default mode is "mixed"', () => {
    const quiz = new Quiz(makeMockDom());
    expect(quiz.getMode()).toBe('mixed');
  });

  it('_customPool starts as null', () => {
    const quiz = new Quiz(makeMockDom());
    expect(quiz._customPool).toBeNull();
  });

  it('_timerInterval starts as null', () => {
    const quiz = new Quiz(makeMockDom());
    expect(quiz._timerInterval).toBeNull();
  });

  it('initial state has zero score', () => {
    const quiz = new Quiz(makeMockDom());
    expect(quiz._state.score).toBe(0);
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   2. setMode / getMode
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — setMode / getMode', () => {
  let quiz;
  beforeEach(() => { quiz = new Quiz(makeMockDom()); });

  it.each(['hiragana', 'katakana', 'mixed', 'custom'])(
    'setMode("%s") is reflected by getMode()',
    (mode) => {
      quiz.setMode(mode);
      expect(quiz.getMode()).toBe(mode);
    }
  );

  it('mode persists across _buildFreshState()', () => {
    quiz.setMode('katakana');
    const state = quiz._buildFreshState();
    expect(state.mode).toBe('katakana');
  });

  it('last setMode wins', () => {
    quiz.setMode('hiragana');
    quiz.setMode('mixed');
    expect(quiz.getMode()).toBe('mixed');
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   3. setCustomPool
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — setCustomPool', () => {
  let quiz;
  beforeEach(() => { quiz = new Quiz(makeMockDom()); });

  it('accepts a valid pool and stores it', () => {
    const pool = [{ char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }];
    quiz.setCustomPool(pool);
    expect(quiz._customPool).toEqual(pool);
  });

  it('sets _customPool to null when called with null', () => {
    quiz.setCustomPool([{ char: 'あ', romaji: 'a' }]);
    quiz.setCustomPool(null);
    expect(quiz._customPool).toBeNull();
  });

  it('sets _customPool to null when called with an empty array', () => {
    quiz.setCustomPool([{ char: 'あ', romaji: 'a' }]);
    quiz.setCustomPool([]);
    expect(quiz._customPool).toBeNull();
  });

  it('single-entry pool is kept (not cleared)', () => {
    const pool = [{ char: 'あ', romaji: 'a' }];
    quiz.setCustomPool(pool);
    expect(quiz._customPool).toEqual(pool);
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   4. _buildDataset
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — _buildDataset', () => {
  let quiz;
  beforeEach(() => { quiz = new Quiz(makeMockDom()); quiz._customPool = null; });

  it('returns full hiragana flat for mode="hiragana"', () => {
    quiz._state.mode = 'hiragana';
    expect(quiz._buildDataset()).toEqual(HIRAGANA_FLAT);
  });

  it('returns full katakana flat for mode="katakana"', () => {
    quiz._state.mode = 'katakana';
    expect(quiz._buildDataset()).toEqual(KATAKANA_FLAT);
  });

  it('returns combined pool for mode="mixed"', () => {
    quiz._state.mode = 'mixed';
    const ds = quiz._buildDataset();
    expect(ds.length).toBe(HIRAGANA_FLAT.length + KATAKANA_FLAT.length);
  });

  it('combined pool contains both hiragana and katakana chars', () => {
    quiz._state.mode = 'mixed';
    const ds   = quiz._buildDataset();
    const chars = ds.map(e => e.char);
    expect(chars).toContain('が');
    expect(chars).toContain('ガ');
  });

  it('returns custom pool when _customPool is set (overrides mode)', () => {
    const pool = [{ char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }];
    quiz._state.mode = 'mixed';   // would normally use full combined set
    quiz._customPool = pool;
    expect(quiz._buildDataset()).toEqual(pool);
  });

  it('custom pool overrides hiragana mode too', () => {
    const pool = [{ char: 'さ', romaji: 'sa' }];
    quiz._state.mode = 'hiragana';
    quiz._customPool = pool;
    expect(quiz._buildDataset()).toEqual(pool);
  });

  it('returns a defensive copy (mutating result does not affect source)', () => {
    quiz._state.mode = 'hiragana';
    const ds = quiz._buildDataset();
    const originalLen = HIRAGANA_FLAT.length;
    ds.push({ char: 'X', romaji: 'x' });
    expect(HIRAGANA_FLAT.length).toBe(originalLen);
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   5. _buildFreshState
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — _buildFreshState', () => {
  let quiz;
  beforeEach(() => { quiz = new Quiz(makeMockDom()); });

  it('resets score, counts, qNum, and answered', () => {
    quiz.setMode('katakana');
    const state = quiz._buildFreshState();
    expect(state.score).toBe(0);
    expect(state.correctCount).toBe(0);
    expect(state.wrongCount).toBe(0);
    expect(state.qNum).toBe(0);
    expect(state.answered).toBe(false);
  });

  it('resets dataset to empty array', () => {
    const state = quiz._buildFreshState();
    expect(state.dataset).toEqual([]);
  });

  it('resets lastChar to empty string', () => {
    const state = quiz._buildFreshState();
    expect(state.lastChar).toBe('');
  });

  it('preserves the current mode', () => {
    quiz.setMode('hiragana');
    expect(quiz._buildFreshState().mode).toBe('hiragana');
  });

  it('defaults to "mixed" when called before any setMode', () => {
    const freshQuiz = new Quiz(makeMockDom());
    // _state starts undefined, mode inside _buildFreshState falls back to 'mixed'
    expect(freshQuiz._state.mode).toBe('mixed');
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   6. start() / reset() / destroy()
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — start / reset / destroy', () => {
  let quiz, dom;

  beforeEach(() => {
    vi.useFakeTimers();
    dom  = makeMockDom();
    quiz = new Quiz(dom);
  });
  afterEach(() => vi.useRealTimers());

  /* ── start() ─── */
  it('start() hides idle screen', () => {
    quiz.start();
    expect(dom.idleScreen.style.display).toBe('none');
  });

  it('start() reveals arena', () => {
    quiz.start();
    expect(dom.arena.hidden).toBe(false);
  });

  it('start() keeps end screen hidden', () => {
    quiz.start();
    expect(dom.endScreen.hidden).toBe(true);
  });

  it('start() sets question number to 1', () => {
    quiz.start();
    expect(dom.qNum.textContent).toBe(1);
  });

  it('start() shows total as TOTAL_QUESTIONS', () => {
    quiz.start();
    expect(dom.qTotal.textContent).toBe(TOTAL_QUESTIONS);
  });

  it('start() resets score display to 0', () => {
    quiz.start();
    expect(dom.score.textContent).toBe(0);
  });

  it('start() sets current question', () => {
    quiz.start();
    expect(quiz._state.currentQ).not.toBeNull();
    expect(typeof quiz._state.currentQ.char).toBe('string');
    expect(typeof quiz._state.currentQ.romaji).toBe('string');
  });

  it('start() starts the timer', () => {
    quiz.start();
    expect(quiz._timerInterval).not.toBeNull();
  });

  it('start() rebuilds the dataset', () => {
    quiz.setMode('hiragana');
    quiz.start();
    expect(quiz._state.dataset.length).toBeGreaterThan(0);
  });

  it('calling start() again resets score', () => {
    quiz.start();
    dom.input.value = quiz._state.currentQ.romaji;
    quiz.submit();                     // correct answer
    vi.advanceTimersByTime(1200);      // load q2
    quiz.start();                      // restart
    expect(quiz._state.score).toBe(0);
  });

  /* ── reset() ─── */
  it('reset() shows idle screen', () => {
    quiz.start();
    quiz.reset();
    expect(dom.idleScreen.style.display).toBe('');
  });

  it('reset() hides arena', () => {
    quiz.start();
    quiz.reset();
    expect(dom.arena.hidden).toBe(true);
  });

  it('reset() hides end screen', () => {
    quiz.start();
    quiz.reset();
    expect(dom.endScreen.hidden).toBe(true);
  });

  it('reset() stops the timer', () => {
    quiz.start();
    quiz.reset();
    expect(quiz._timerInterval).toBeNull();
  });

  /* ── destroy() ─── */
  it('destroy() stops the timer without throwing', () => {
    quiz.start();
    expect(() => quiz.destroy()).not.toThrow();
  });

  it('destroy() nullifies _timerInterval', () => {
    quiz.start();
    quiz.destroy();
    expect(quiz._timerInterval).toBeNull();
  });

  it('destroy() before start() does not throw', () => {
    expect(() => quiz.destroy()).not.toThrow();
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   7. submit() — answer evaluation
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — submit / answer evaluation', () => {
  let quiz, dom;

  beforeEach(() => {
    vi.useFakeTimers();
    dom  = makeMockDom();
    quiz = new Quiz(dom);
    quiz.start();
  });
  afterEach(() => vi.useRealTimers());

  /* ── Correct answer ─── */
  it('correct answer increments score by 1', () => {
    dom.input.value = quiz._state.currentQ.romaji;
    quiz.submit();
    expect(quiz._state.score).toBe(1);
    expect(quiz._state.correctCount).toBe(1);
    expect(quiz._state.wrongCount).toBe(0);
  });

  it('correct answer updates score DOM element', () => {
    dom.input.value = quiz._state.currentQ.romaji;
    quiz.submit();
    expect(dom.score.textContent).toBe(1);
  });

  it('correct answer sets input className to "correct"', () => {
    dom.input.value = quiz._state.currentQ.romaji;
    quiz.submit();
    expect(dom.input.className).toBe('correct');
  });

  it('correct answer disables input', () => {
    dom.input.value = quiz._state.currentQ.romaji;
    quiz.submit();
    expect(dom.input.disabled).toBe(true);
  });

  it('evaluation is case-insensitive (uppercase romaji accepted)', () => {
    dom.input.value = quiz._state.currentQ.romaji.toUpperCase();
    quiz.submit();
    expect(quiz._state.score).toBe(1);
  });

  it('evaluation is case-insensitive (mixed case accepted)', () => {
    const romaji = quiz._state.currentQ.romaji;
    dom.input.value = romaji[0].toUpperCase() + romaji.slice(1);
    quiz.submit();
    expect(quiz._state.score).toBe(1);
  });

  /* ── Wrong answer ─── */
  it('wrong answer does NOT increment score', () => {
    dom.input.value = '____invalid____';
    quiz.submit();
    expect(quiz._state.score).toBe(0);
    expect(quiz._state.wrongCount).toBe(1);
    expect(quiz._state.correctCount).toBe(0);
  });

  it('wrong answer sets input className to "wrong"', () => {
    dom.input.value = '____invalid____';
    quiz.submit();
    expect(dom.input.className).toBe('wrong');
  });

  it('wrong answer disables input', () => {
    dom.input.value = '____invalid____';
    quiz.submit();
    expect(dom.input.disabled).toBe(true);
  });

  /* ── Edge cases ─── */
  it('empty input (only spaces) does nothing — question stays open', () => {
    dom.input.value = '   ';
    quiz.submit();
    expect(quiz._state.answered).toBe(false);
    expect(quiz._state.score).toBe(0);
    expect(dom.input.disabled).toBe(false);
  });

  it('completely empty input does nothing', () => {
    dom.input.value = '';
    quiz.submit();
    expect(quiz._state.answered).toBe(false);
  });

  it('cannot submit twice for the same question (second call ignored)', () => {
    const romaji = quiz._state.currentQ.romaji;
    dom.input.value = romaji;
    quiz.submit();              // correct → score=1, answered=true

    dom.input.value = romaji;
    quiz.submit();              // should be ignored
    expect(quiz._state.score).toBe(1);
  });

  it('submit() stops the timer on correct answer', () => {
    dom.input.value = quiz._state.currentQ.romaji;
    quiz.submit();
    expect(quiz._timerInterval).toBeNull();
  });

  it('submit() stops the timer on wrong answer', () => {
    dom.input.value = 'wrong!!!';
    quiz.submit();
    expect(quiz._timerInterval).toBeNull();
  });

  it('marks answered=true after submission', () => {
    dom.input.value = quiz._state.currentQ.romaji;
    quiz.submit();
    expect(quiz._state.answered).toBe(true);
  });

  /* ── Next question after submit ─── */
  it('advances to question 2 after answering and waiting 1200 ms', () => {
    dom.input.value = quiz._state.currentQ.romaji;
    quiz.submit();
    vi.advanceTimersByTime(1200);
    expect(quiz._state.qNum).toBe(2);
  });

  it('resets input value for the next question', () => {
    dom.input.value = 'a';
    quiz.submit();
    vi.advanceTimersByTime(1200);
    expect(dom.input.value).toBe('');
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   8. Timer countdown + timeout
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — timer', () => {
  let quiz, dom;

  beforeEach(() => {
    vi.useFakeTimers();
    dom  = makeMockDom();
    quiz = new Quiz(dom);
  });
  afterEach(() => vi.useRealTimers());

  it('timer starts when quiz starts', () => {
    quiz.start();
    expect(quiz._timerInterval).not.toBeNull();
    expect(quiz._state.timeLeft).toBe(SECONDS_PER_Q);
  });

  it('timeLeft decrements by 1 each second', () => {
    quiz.start();
    vi.advanceTimersByTime(1000);
    expect(quiz._state.timeLeft).toBe(SECONDS_PER_Q - 1);
    vi.advanceTimersByTime(1000);
    expect(quiz._state.timeLeft).toBe(SECONDS_PER_Q - 2);
  });

  it('timeout after SECONDS_PER_Q seconds marks question as answered', () => {
    quiz.start();
    vi.advanceTimersByTime(SECONDS_PER_Q * 1000);
    expect(quiz._state.answered).toBe(true);
  });

  it('timeout increments wrongCount (not correctCount)', () => {
    quiz.start();
    vi.advanceTimersByTime(SECONDS_PER_Q * 1000);
    expect(quiz._state.wrongCount).toBe(1);
    expect(quiz._state.correctCount).toBe(0);
  });

  it('timeout does NOT increment score', () => {
    quiz.start();
    vi.advanceTimersByTime(SECONDS_PER_Q * 1000);
    expect(quiz._state.score).toBe(0);
  });

  it('timeout disables input and submit button', () => {
    quiz.start();
    vi.advanceTimersByTime(SECONDS_PER_Q * 1000);
    expect(dom.input.disabled).toBe(true);
    expect(dom.btnSubmit.disabled).toBe(true);
  });

  it('early submit stops the timer', () => {
    quiz.start();
    dom.input.value = quiz._state.currentQ.romaji;
    quiz.submit();
    expect(quiz._timerInterval).toBeNull();
  });

  it('timer resets to SECONDS_PER_Q for each new question', () => {
    quiz.start();
    dom.input.value = quiz._state.currentQ.romaji;
    quiz.submit();
    vi.advanceTimersByTime(1200); // trigger _nextQuestion
    expect(quiz._state.timeLeft).toBe(SECONDS_PER_Q);
    expect(quiz._timerInterval).not.toBeNull();
  });

  it('destroy() during countdown stops the timer', () => {
    quiz.start();
    vi.advanceTimersByTime(2000); // partially through the countdown
    quiz.destroy();
    expect(quiz._timerInterval).toBeNull();
    // no further decrements happen
    const savedTimeLeft = quiz._state.timeLeft;
    vi.advanceTimersByTime(3000);
    expect(quiz._state.timeLeft).toBe(savedTimeLeft);
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   9. Consecutive character repeat prevention
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — no consecutive repeated character', () => {
  let quiz;

  beforeEach(() => {
    vi.useFakeTimers();
    quiz = new Quiz(makeMockDom());
  });
  afterEach(() => vi.useRealTimers());

  it('consecutive questions always have different characters (small pool)', () => {
    const pool = [
      { char: 'あ', romaji: 'a' },
      { char: 'い', romaji: 'i' },
      { char: 'う', romaji: 'u' },
    ];
    quiz.setCustomPool(pool);
    quiz.start();

    let prevChar = quiz._state.currentQ.char;

    for (let i = 0; i < 15; i++) {
      if (quiz._state.qNum >= TOTAL_QUESTIONS) break;

      // bypass evaluation and jump to next question
      quiz._state.answered = true;
      quiz._nextQuestion();

      const nowChar = quiz._state.currentQ?.char;
      if (!nowChar) break; // ended quiz

      expect(nowChar).not.toBe(prevChar);
      prevChar = nowChar;
    }
  });

  it('consecutive questions different with full mixed pool (stress test)', () => {
    quiz.start();
    let prevChar = quiz._state.currentQ.char;

    for (let i = 0; i < TOTAL_QUESTIONS - 1; i++) {
      quiz._state.answered = true;
      quiz._nextQuestion();
      const nowChar = quiz._state.currentQ?.char;
      if (!nowChar) break;
      expect(nowChar).not.toBe(prevChar);
      prevChar = nowChar;
    }
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   10. End screen — after 20 questions
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — end screen', () => {
  let quiz, dom;

  beforeEach(() => {
    vi.useFakeTimers();
    dom  = makeMockDom();
    quiz = new Quiz(dom);
  });
  afterEach(() => vi.useRealTimers());

  /**
   * Helper: run through all 20 questions by timing out each one.
   * Returns the quiz instance for further assertions.
   */
  function runToEnd() {
    quiz.start();
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      vi.advanceTimersByTime(SECONDS_PER_Q * 1000); // timeout current Q
      vi.advanceTimersByTime(1500);                 // trigger next Q (or endQuiz)
    }
  }

  /**
   * Helper: run through all 20 questions answering correctly.
   */
  function runToEndAllCorrect() {
    quiz.start();
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      dom.input.value = quiz._state.currentQ?.romaji ?? '';
      quiz.submit();
      vi.advanceTimersByTime(1200); // trigger next Q (or endQuiz)
    }
  }

  it('end screen is shown after all questions time out', () => {
    runToEnd();
    expect(dom.endScreen.hidden).toBe(false);
  });

  it('arena is hidden at end', () => {
    runToEnd();
    expect(dom.arena.hidden).toBe(true);
  });

  it('final score is 0 when all questions timed out', () => {
    runToEnd();
    expect(String(dom.finalScore.textContent)).toBe('0');
  });

  it('wrong count equals TOTAL_QUESTIONS when all timed out', () => {
    runToEnd();
    expect(String(dom.statWrong.textContent)).toBe(String(TOTAL_QUESTIONS));
  });

  it('correct count is 0 when all timed out', () => {
    runToEnd();
    expect(String(dom.statCorrect.textContent)).toBe('0');
  });

  it('shows 📚 icon for low score (0 / 20 = 0%)', () => {
    runToEnd();
    expect(dom.endIcon.textContent).toBe('📚');
  });

  it('shows 🏆 icon for a perfect score (20 / 20 = 100%)', () => {
    runToEndAllCorrect();
    expect(dom.endIcon.textContent).toBe('🏆');
  });

  it('shows 🎉 icon for passing score (12 / 20 = 60%)', () => {
    quiz.start();
    // Answer 12 correctly, 8 timed out
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      if (i < 12) {
        dom.input.value = quiz._state.currentQ?.romaji ?? '';
        quiz.submit();
        vi.advanceTimersByTime(1200);
      } else {
        vi.advanceTimersByTime(SECONDS_PER_Q * 1000);
        vi.advanceTimersByTime(1500);
      }
    }
    expect(dom.endIcon.textContent).toBe('🎉');
  });

  it('correct + wrong counts sum to TOTAL_QUESTIONS', () => {
    runToEnd();
    const correct = Number(dom.statCorrect.textContent);
    const wrong   = Number(dom.statWrong.textContent);
    expect(correct + wrong).toBe(TOTAL_QUESTIONS);
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   11. _setFeedback
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — _setFeedback', () => {
  let quiz, dom;

  beforeEach(() => {
    dom  = makeMockDom();
    quiz = new Quiz(dom);
  });

  it('sets textContent', () => {
    quiz._setFeedback('correct', '✅ Correct!');
    expect(dom.feedback.textContent).toBe('✅ Correct!');
  });

  it('adds "show" and type class for correct feedback', () => {
    quiz._setFeedback('correct', '✅ Correct!');
    expect(dom.feedback.className).toContain('show');
    expect(dom.feedback.className).toContain('correct');
  });

  it('adds "show" and type class for wrong feedback', () => {
    quiz._setFeedback('wrong', '❌ Wrong!');
    expect(dom.feedback.className).toContain('show');
    expect(dom.feedback.className).toContain('wrong');
  });

  it('adds "show" and type class for timeout feedback', () => {
    quiz._setFeedback('timeout', "⏰ Time's up!");
    expect(dom.feedback.className).toContain('show');
    expect(dom.feedback.className).toContain('timeout');
  });

  it('clears textContent when empty string passed', () => {
    quiz._setFeedback('correct', '✅ Correct!');
    quiz._setFeedback('', '');
    expect(dom.feedback.textContent).toBe('');
  });

  it('removes "show" when cleared', () => {
    quiz._setFeedback('correct', '✅ Correct!');
    quiz._setFeedback('', '');
    expect(dom.feedback.className).not.toContain('show');
  });

  it('className is exactly "quiz-feedback" after clear', () => {
    quiz._setFeedback('', '');
    expect(dom.feedback.className).toBe('quiz-feedback');
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   12. _updateTimerUI
════════════════════════════════════════════════════════════════════════════ */
describe('Quiz — _updateTimerUI', () => {
  let quiz, dom;

  beforeEach(() => {
    dom  = makeMockDom();
    quiz = new Quiz(dom);
  });

  /* ── Timer number display ─── */
  it('shows SECONDS_PER_Q at full time', () => {
    quiz._updateTimerUI(SECONDS_PER_Q);
    expect(dom.timerNum.textContent).toBe(SECONDS_PER_Q);
  });

  it('shows 0 at zero seconds', () => {
    quiz._updateTimerUI(0);
    expect(dom.timerNum.textContent).toBe(0);
  });

  it('clamps display to 0 for negative values', () => {
    quiz._updateTimerUI(-2);
    expect(dom.timerNum.textContent).toBe(0);
  });

  it('counts down correctly for mid-values', () => {
    quiz._updateTimerUI(3);
    expect(dom.timerNum.textContent).toBe(3);
  });

  /* ── Color thresholds ─── */
  it('uses primary color when t > 3', () => {
    quiz._updateTimerUI(5);
    expect(dom.timerArc.style.stroke).toBe('var(--primary)');
    expect(dom.timerNum.style.color).toBe('var(--primary)');
  });

  it('uses warn color when t === 3', () => {
    quiz._updateTimerUI(3);
    expect(dom.timerArc.style.stroke).toBe('var(--warn)');
  });

  it('uses danger color when t === 2', () => {
    quiz._updateTimerUI(2);
    expect(dom.timerArc.style.stroke).toBe('var(--danger)');
    expect(dom.timerNum.style.color).toBe('var(--danger)');
  });

  it('uses danger color when t === 1', () => {
    quiz._updateTimerUI(1);
    expect(dom.timerArc.style.stroke).toBe('var(--danger)');
  });

  it('uses danger color when t === 0', () => {
    quiz._updateTimerUI(0);
    expect(dom.timerArc.style.stroke).toBe('var(--danger)');
  });

  /* ── Progress bar width ─── */
  it('bar is 100% at full time', () => {
    quiz._updateTimerUI(SECONDS_PER_Q);
    expect(dom.timerBar.style.width).toBe('100%');
  });

  it('bar is 0% at zero time', () => {
    quiz._updateTimerUI(0);
    expect(dom.timerBar.style.width).toBe('0%');
  });

  it('bar is 60% at 6/10 seconds', () => {
    quiz._updateTimerUI(6);
    expect(dom.timerBar.style.width).toBe('60%');
  });

  it('bar is 20% at 2/10 seconds', () => {
    quiz._updateTimerUI(2);
    expect(dom.timerBar.style.width).toBe('20%');
  });

  /* ── SVG arc strokeDashoffset ─── */
  const ARC = 2 * Math.PI * 28; // r=28; same constant as quiz.js

  it('strokeDashoffset is 0 at full time (arc fully drawn)', () => {
    quiz._updateTimerUI(SECONDS_PER_Q);
    expect(Number(dom.timerArc.style.strokeDashoffset)).toBeCloseTo(0);
  });

  it('strokeDashoffset equals ARC_CIRCUMFERENCE at 0 seconds (arc empty)', () => {
    quiz._updateTimerUI(0);
    expect(Number(dom.timerArc.style.strokeDashoffset)).toBeCloseTo(ARC);
  });

  it('strokeDashoffset is proportional at mid-time', () => {
    quiz._updateTimerUI(2); // 2/5 = 40% time left → 60% of arc consumed
    const expected = ARC * (1 - 2 / SECONDS_PER_Q);
    expect(Number(dom.timerArc.style.strokeDashoffset)).toBeCloseTo(expected);
  });
});
