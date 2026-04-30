/**
 * main.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Application entry point.
 *
 * Responsibilities:
 *   • Build the learn-mode character grid panels from kana data
 *   • Handle tab switching (Hiragana ↔ Katakana) in learn mode
 *   • Handle mode switching (Learn ↔ Quiz)
 *   • Manage the learn-mode popup modal
 *   • Handle Selection Mode — user picks individual characters for quiz
 *   • Wire quiz controls to the Quiz class
 *   • Keep UI and business logic cleanly separated
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { HIRAGANA_ROWS, KATAKANA_ROWS } from './data/kana.js';
import { Quiz } from './features/quiz.js';
import { Flashcard } from './features/flashcard.js';
import { VocabPractice } from './features/vocabPractice.js';
import { translations } from './data/translations.js';

/* ════════════════════════════════════════════════════════════════════════════
   DOM REFERENCES — collected once at startup
════════════════════════════════════════════════════════════════════════════ */

/** Grab a single element by id; throws clearly if missing. */
function el(id) {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Element #${id} not found`);
  return node;
}

/* ── Mode bar ─────────────────────────────────────────────────────────────── */
const modeLearnBtn  = el('mode-learn');
const modeQuizBtn   = el('mode-quiz');
const learnPanel    = el('learn-panel');
const quizPanel     = el('quiz-panel');
const vocabPanel    = el('vocab-panel');

/* ── Learn mode ───────────────────────────────────────────────────────────── */
const tabHiraganaBtn = el('tab-hiragana');
const tabKatakanaBtn = el('tab-katakana');
const panelHiragana  = el('panel-hiragana');
const panelKatakana  = el('panel-katakana');
const btnSelectMode  = el('btn-select-mode');

/* ── Learn modal ──────────────────────────────────────────────────────────── */
const modalOverlay  = el('modal-overlay');
const modalCharEl   = el('modal-char-display');
const modalRomaEl   = el('modal-romaji-display');
const modalTypeEl   = el('modal-type-label');
const modalCloseBtn = el('modal-close-btn');

/* ── Selection bar ────────────────────────────────────────────────────────── */
const selectionBar   = el('selection-bar');
const selCountNum    = el('sel-count-num');

/* ── Quiz DOM refs (passed to Quiz class) ─────────────────────────────────── */
const quizDom = {
  idleScreen:  el('quiz-idle'),
  arena:       el('quiz-arena'),
  endScreen:   el('quiz-end'),
  qNum:        el('q-num'),
  qTotal:      el('q-total'),
  score:       el('q-score'),
  timerNum:    el('timer-num'),
  timerArc:    el('timer-arc'),
  timerBar:    el('timer-bar'),
  charDisplay: el('quiz-char'),
  input:       el('quiz-input'),
  btnSubmit:   el('btn-submit'),
  feedback:    el('quiz-feedback'),
  endIcon:     el('end-icon'),
  finalScore:  el('final-score'),
  finalTotal:  el('final-total'),
  statCorrect: el('stat-correct'),
  statWrong:   el('stat-wrong'),
  // MC Quiz specific DOM refs
  mcArena:     el('mc-arena'),
  mcScore:     el('mc-score'),
  mcQNum:      el('mc-q-num'),
  mcQTotal:    el('mc-q-total'),
  mcRomaji:    el('mc-romaji'),
  mcScript:    el('mc-script'),
  mcChoices:   [
    el('mc-choice-0'), el('mc-choice-1'), el('mc-choice-2'), el('mc-choice-3')
  ],
  mcFeedback:  el('mc-feedback'),
};

/* ── Flashcard DOM refs ─────────────────────────────────────────────────── */
const flashcardDom = {
  cardWrapper: el('flashcard-wrapper'),
  card:        el('flashcard-el'),
  front:       el('card-jp'),
  backRomaji:  el('card-romaji'),
  backVi:      el('card-vi'),
  progress:    el('vocab-progress'),
  btnLearned:  el('btn-mark-learned'),
  btnSpeakFront: el('btn-speak-front'),
  btnSpeakBack:  el('btn-speak-back')
};

const vocabFlashSection    = el('vocab-flash-section');
const vocabPracticeSection  = el('vocab-practice-section');

const practiceDom = {
  arena:        el('practice-arena'),
  endScreen:    el('practice-end'),
  question:     el('p-question'),
  input:        el('p-input'),
  btnSubmit:    el('p-submit'),
  feedback:     el('p-feedback'),
  score:        el('p-score'),
  remaining:    el('p-remaining'),
  finalScore:   el('p-final-score'),
  finalCorrect: el('p-stat-correct'),
  finalWrong:   el('p-stat-wrong')
};

/* ── Quiz mode toggle buttons ─────────────────────────────────────────────── */
const qmBtns = {
  mixed:    el('qm-mixed'),
  hiragana: el('qm-hiragana'),
  katakana: el('qm-katakana'),
  custom:   el('qm-custom'),
};
const qmCustomCount = el('qm-custom-count');

/* ════════════════════════════════════════════════════════════════════════════
   SELECTION MODE STATE
   selectedPool  – Map<charString, { char, romaji }> of chosen characters
   selectionMode – whether the grid is in "tap to pick" mode
════════════════════════════════════════════════════════════════════════════ */

/** Characters the user has manually picked; keyed by the Japanese char string. */
const selectedPool = new Map();

/** When true, clicking a card selects/deselects it instead of opening modal. */
let selectionMode = false;

/* ── Selection Mode — toggle ──────────────────────────────────────────────── */

/** Toggle the "tap to select" mode on/off. */
function toggleSelectionMode() {
  selectionMode = !selectionMode;
  btnSelectMode.classList.toggle('sel-mode-active', selectionMode);
  btnSelectMode.textContent = selectionMode ? '✔ Done Selecting' : '✏️ Select for Quiz';

  // Add/remove a visual hint class on both panels so cards show hover affordance
  document.querySelectorAll('.char-card:not(.empty)').forEach(card => {
    card.classList.toggle('selectable', selectionMode);
  });
}

/* ── Selection Mode — card toggle ─────────────────────────────────────────── */

/**
 * Toggle the selected state of a single card.
 * Updates both the DOM visual and the selectedPool map.
 * @param {HTMLElement} card
 * @param {{ char: string, romaji: string }} item
 */
function toggleCardSelection(card, item) {
  if (selectedPool.has(item.char)) {
    selectedPool.delete(item.char);
    card.classList.remove('quiz-selected');
  } else {
    selectedPool.set(item.char, item);
    card.classList.add('quiz-selected');
  }
  updateSelectionUI();
}

/* ── Selection Mode — UI sync ─────────────────────────────────────────────── */

/** Sync counter badge, floating bar visibility, and quiz "Custom" button. */
function updateSelectionUI() {
  const count = selectedPool.size;

  // Floating action bar
  selCountNum.textContent = count;
  selectionBar.hidden = count === 0;

  // "Custom (n)" button in quiz panel — show only if there's a selection
  qmCustomCount.textContent = count;
  qmBtns.custom.hidden = count === 0;

  // If we just cleared everything, deactivate custom quiz mode
  if (count === 0 && quiz.getMode() === 'custom') {
    setQuizMode('mixed');
  }
}

/** Remove all selections from the grid and clear the map. */
function clearSelection() {
  document.querySelectorAll('.char-card.quiz-selected').forEach(card => {
    card.classList.remove('quiz-selected');
  });
  selectedPool.clear();
  updateSelectionUI();
}

/* ════════════════════════════════════════════════════════════════════════════
   LEARN MODE — Grid builder
════════════════════════════════════════════════════════════════════════════ */

/** Tracks the currently highlighted card in the learn grid (non-selection modal highlight). */
let selectedCard = null;

/**
 * Build and render the kana character grid inside a panel element.
 *
 * @param {string} panelId     ID of the container element
 * @param {Array}  rows        HIRAGANA_ROWS or KATAKANA_ROWS
 * @param {string} typeLabel   Human-readable label ('Hiragana' / 'Katakana')
 * @param {string} jpLabel     Japanese script label (e.g. 'ひらがな')
 */
function buildPanel(panelId, rows, typeLabel, jpLabel) {
  const panel = document.getElementById(panelId);
  panel.innerHTML = '';

  // Section heading
  const hdr = document.createElement('div');
  hdr.className = 'section-header';
  hdr.innerHTML = `<span class="jp-label">${jpLabel}</span><h2>${typeLabel} Characters</h2>`;
  panel.appendChild(hdr);

  rows.forEach((row, rowIndex) => {
    // Divider between rows (not before the first)
    if (rowIndex > 0) {
      const div = document.createElement('div');
      div.className = 'divider';
      panel.appendChild(div);
    }

    // Row label (e.g. "VOWELS (あ行)")
    const rowLabel = document.createElement('div');
    rowLabel.className   = 'row-label';
    rowLabel.textContent = row.label;
    panel.appendChild(rowLabel);

    // Card grid
    const grid = document.createElement('div');
    grid.className = 'char-grid';

    row.chars.forEach(item => {
      const card = document.createElement('div');

      if (!item) {
        // Null = empty placeholder cell
        card.className = 'char-card empty';
        card.innerHTML = '<span class="char-jp" style="opacity:.1">・</span>';
      } else {
        const { char, romaji } = item;
        card.className = 'char-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `${char} — ${romaji}`);
        card.dataset.char   = char;
        card.dataset.romaji = romaji;
        card.dataset.type   = typeLabel;
        card.innerHTML = `
          <span class="char-jp">${char}</span>
          <span class="char-romaji">${romaji}</span>
          <span class="sel-check" aria-hidden="true">✓</span>`;

        // Click: either select or open modal depending on mode
        card.addEventListener('click', () => {
          if (selectionMode) {
            toggleCardSelection(card, item);
          } else {
            openModal(card);
          }
        });

        card.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (selectionMode) {
              toggleCardSelection(card, item);
            } else {
              openModal(card);
            }
          }
        });
      }

      grid.appendChild(card);
    });

    panel.appendChild(grid);
  });
}

/* ════════════════════════════════════════════════════════════════════════════
   LEARN MODE — Tab switching
════════════════════════════════════════════════════════════════════════════ */

/** Currently visible learn tab ('hiragana' | 'katakana'). */
let activeLearnTab = 'hiragana';

/**
 * Show one alphabet tab and hide the other.
 * @param {'hiragana'|'katakana'} tab
 */
function switchTab(tab) {
  activeLearnTab = tab;

  tabHiraganaBtn.classList.toggle('active', tab === 'hiragana');
  tabHiraganaBtn.setAttribute('aria-selected', tab === 'hiragana');
  panelHiragana.hidden = tab !== 'hiragana';

  tabKatakanaBtn.classList.toggle('active', tab === 'katakana');
  tabKatakanaBtn.setAttribute('aria-selected', tab === 'katakana');
  panelKatakana.hidden = tab !== 'katakana';

  // Clear modal highlight (but preserve quiz-selected across tabs)
  if (selectedCard) { selectedCard.classList.remove('selected'); selectedCard = null; }
}

/* ════════════════════════════════════════════════════════════════════════════
   LEARN MODE — Modal popup
════════════════════════════════════════════════════════════════════════════ */

/**
 * Open the character detail modal for a given card element.
 * @param {HTMLElement} card
 */
function openModal(card) {
  // Highlight the tapped card
  if (selectedCard) selectedCard.classList.remove('selected');
  selectedCard = card;
  card.classList.add('selected');

  // Populate modal content
  modalTypeEl.textContent = card.dataset.type;
  modalCharEl.textContent = card.dataset.char;
  modalRomaEl.innerHTML   = `/ <span>${card.dataset.romaji}</span> /`;

  modalOverlay.classList.add('open');
  modalCloseBtn.focus();
}

/** Close the learn-mode modal. */
function closeModal() {
  modalOverlay.classList.remove('open');
}

// Modal close triggers
modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

/* ════════════════════════════════════════════════════════════════════════════
   MODE SWITCHING — Learn ↔ Quiz
════════════════════════════════════════════════════════════════════════════ */

/** Currently active application mode ('learn' | 'quiz'). */
let activeMode = 'learn';

/**
 * Switch between learn mode (grid view) and quiz mode.
 * @param {'learn'|'quiz'} mode
 */
function switchMode(mode) {
  activeMode = mode;

  learnPanel.style.display = mode === 'learn' ? '' : 'none';
  quizPanel.classList.toggle('active', mode === 'quiz');
  vocabPanel.hidden = mode !== 'vocab';

  modeLearnBtn.classList.toggle('active',     mode === 'learn');
  modeQuizBtn.classList.remove('active');
  modeQuizBtn.classList.toggle('quiz-active', mode === 'quiz');

  const modeVocabBtn = document.getElementById('mode-vocab');
  if (modeVocabBtn) modeVocabBtn.classList.toggle('active', mode === 'vocab');

  // Pause the quiz timer if the user leaves quiz mode
  if (mode === 'learn' || mode === 'vocab') quiz.destroy();

  // Initialize vocab mode if needed
  if (mode === 'vocab') {
    if (activeVocabSubMode === 'flash') flashcard.activate();
    else vocabPractice.loadLessons(selectedLessons);
  }

  // Close any open modal when switching
  closeModal();
}

/* ════════════════════════════════════════════════════════════════════════════
   QUIZ — Controls wiring
════════════════════════════════════════════════════════════════════════════ */

/** Instantiate the Quiz with all required DOM references. */
const quiz = new Quiz(quizDom);

/** Instantiate Flashcard system. */
const flashcard = new Flashcard(flashcardDom);

/** Instantiate Vocab Practice system. */
const vocabPractice = new VocabPractice(practiceDom);

/* ── Vocabulary Sub-mode Switching ───────────────────────────────────────── */
let activeVocabSubMode = 'flash';

function setVocabSubMode(sub) {
  activeVocabSubMode = sub;
  vocabFlashSection.hidden = sub !== 'flash';
  vocabPracticeSection.hidden = sub !== 'practice';

  el('vsub-flash').classList.toggle('active', sub === 'flash');
  el('vsub-practice').classList.toggle('active', sub === 'practice');

  if (sub === 'practice') {
    vocabPractice.loadLessons(selectedLessons);
    el('btn-vocab-tool').hidden = true;
  } else {
    flashcard.activate();
    el('btn-vocab-tool').hidden = false;
  }
}

/* ── Lesson Selection Logic ──────────────────────────────────────────────── */
const AVAILABLE_LESSONS = 25;
let selectedLessons = [1];

function renderLessonToggles() {
  const grid = el('lesson-toggles-grid');
  if (!grid) return;
  grid.innerHTML = '';
  for (let i = 1; i <= AVAILABLE_LESSONS; i++) {
    const btn = document.createElement('button');
    btn.className = 'lesson-toggle-btn' + (selectedLessons.includes(i) ? ' active' : '');
    btn.textContent = i;
    btn.onclick = () => toggleLesson(i);
    grid.appendChild(btn);
  }
}

function toggleLesson(num) {
  if (selectedLessons.includes(num)) {
    selectedLessons = selectedLessons.filter(l => l !== num);
  } else {
    selectedLessons.push(num);
    selectedLessons.sort((a, b) => a - b);
  }
  renderLessonToggles();
  triggerLessonLoad();
}

function selectAllLessons() {
  selectedLessons = Array.from({length: AVAILABLE_LESSONS}, (_, i) => i + 1);
  renderLessonToggles();
  triggerLessonLoad();
}

function clearAllLessons() {
  selectedLessons = [];
  renderLessonToggles();
  triggerLessonLoad();
}

function triggerLessonLoad() {
  if (activeVocabSubMode === 'flash') {
    flashcard.loadLessons(selectedLessons);
  } else {
    vocabPractice.loadLessons(selectedLessons);
  }
}

/* ── Vocabulary Practice Mode Switching ──────────────────────────────────── */

function setPracticeMode(mode) {
  vocabPractice.setMode(mode);
  
  el('p-mode-ja').classList.toggle('active', mode === 'jp_to_all');
  el('p-mode-vi').classList.toggle('active', mode === 'vi_to_jp');
  
  // Show/hide virtual keyboard
  el('p-keyboard-container').hidden = mode !== 'vi_to_jp';
  
  if (mode === 'vi_to_jp') {
    renderPracticeKeyboard('hira');
  }
}

function switchPracticeKeyboard(type) {
  renderPracticeKeyboard(type);
  el('p-kb-tab-hira').classList.toggle('active', type === 'hira');
  el('p-kb-tab-kata').classList.toggle('active', type === 'kata');
}

function renderPracticeKeyboard(type) {
  const grid = el('p-keyboard-grid');
  grid.innerHTML = '';
  
  const rows = type === 'hira' ? HIRAGANA_ROWS : KATAKANA_ROWS;
  
  // Basic Kana are the first 11 rows in data/kana.js
  const basicRows = rows.slice(0, 11);
  const others = rows.slice(11);

  // Re-structure basic kana to be horizontal (Consonants as columns)
  // Max 5 vowels, so 5 rows in the horizontal layout
  for (let vowelIdx = 0; vowelIdx < 5; vowelIdx++) {
    basicRows.forEach(row => {
      const item = row.chars[vowelIdx];
      if (item) {
        const btn = document.createElement('button');
        btn.className = 'kb-char-btn';
        btn.textContent = item.char;
        btn.onclick = () => vocabPractice.insertChar(item.char);
        grid.appendChild(btn);
      } else {
        // Empty cell for the grid
        const empty = document.createElement('div');
        empty.className = 'kb-char-btn empty';
        grid.appendChild(empty);
      }
    });
  }

  // Add the rest (Dakuten, Yoon) normally below
  const divider = document.createElement('div');
  divider.style.gridColumn = '1 / -1';
  divider.style.height = '1px';
  divider.style.background = 'var(--border)';
  divider.style.margin = '10px 0';
  grid.appendChild(divider);

  others.forEach(row => {
    row.chars.forEach(item => {
      if (item) {
        const btn = document.createElement('button');
        btn.className = 'kb-char-btn';
        btn.textContent = item.char;
        btn.onclick = () => vocabPractice.insertChar(item.char);
        grid.appendChild(btn);
      }
    });
  });

  // Add special characters row
  const specRow = document.createElement('div');
  specRow.className = 'kb-special-row';
  
  ['～', 'ー'].forEach(s => {
    const sBtn = document.createElement('button');
    sBtn.className = 'kb-char-btn kb-special-btn';
    sBtn.textContent = s;
    sBtn.onclick = () => vocabPractice.insertChar(s);
    specRow.appendChild(sBtn);
  });
  
  grid.appendChild(specRow);
}

function clearPracticeInput() {
  vocabPractice.clearInput();
}

/**
 * Switch the quiz character pool.
 * @param {'mixed'|'hiragana'|'katakana'|'custom'} mode
 */
function setQuizMode(mode) {
  quiz.setMode(mode);
  Object.entries(qmBtns).forEach(([key, btn]) => {
    btn.classList.toggle('active', key === mode);
  });
}

/**
 * Switch between Fast Type and Multiple Choice quiz.
 * @param {'type'|'mc'} type
 */
function setQuizType(type) {
  quiz.setType(type);
  el('qt-type').classList.toggle('active', type === 'type');
  el('qt-mc').classList.toggle('active', type === 'mc');

  if (type === 'mc') {
    el('idle-title').textContent = 'Multiple Choice Quiz';
    el('idle-desc').textContent = 'Select the correct Japanese character for the given Romaji.';
    el('idle-icon').textContent = '🎯';
  } else {
    el('idle-title').textContent = 'Fast Typing Quiz';
    el('idle-desc').textContent = 'A random character appears — type the correct romaji before time runs out!';
    el('idle-icon').textContent = '⚡';
  }
}

/** Start a normal quiz session (uses selected quiz mode or full dataset). */
function startQuiz() {
  quiz.setCustomPool(null); // clear any previous custom pool
  quiz.start();
}

/**
 * Start a quiz with ONLY the user-selected characters from the grid.
 * Switches to quiz view automatically.
 */
function startQuizWithSelection() {
  if (selectedPool.size === 0) return;

  const pool = Array.from(selectedPool.values());
  quiz.setCustomPool(pool);
  quiz.setMode('custom');

  // Make sure the "Custom" button is active in quiz controls
  Object.entries(qmBtns).forEach(([key, btn]) => {
    btn.classList.toggle('active', key === 'custom');
  });

  // Switch to quiz view and start
  switchMode('quiz');
  quiz.start();
}

/** Reset quiz to idle screen. */
function resetQuiz() { quiz.reset(); }

/* ── Multi-language Support ──────────────────────────────────────────────── */
let currentLang = localStorage.getItem('app_lang') || 'vi';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('app_lang', lang);

  // Sync switcher UI
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === `lang-btn-${lang}`);
  });

  translateUI();
}

function translateUI() {
  const dict = translations[currentLang];
  if (!dict) return;

  // Translate text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });
}

/** Forward Enter key in the input to quiz. */
function onInputKeydown(e) {
  if (e.key === 'Enter') { e.preventDefault(); quiz.submit(); }
}

/* ── Keyboard shortcuts ───────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  // Esc closes the learn modal (not the quiz)
  if (e.key === 'Escape' && activeMode === 'learn') closeModal();
});

/* ════════════════════════════════════════════════════════════════════════════
   GLOBAL EXPOSURE
   Functions called from inline HTML event attributes must be on window.
════════════════════════════════════════════════════════════════════════════ */
Object.assign(window, {
  switchMode,
  switchTab,
  setQuizMode,
  startQuiz,
  startQuizWithSelection,
  resetQuiz,
  clearSelection,
  submitAnswer: () => quiz.submit(),
  setQuizType,
  selectMCChoice: (idx) => quiz.submitMC(idx),
  // Lesson Picker globals
  toggleLesson,
  selectAllLessons,
  clearAllLessons,
  nextVocab: () => flashcard.next(),
  prevVocab: () => flashcard.prev(),
  shuffleVocab: () => flashcard.shuffle(),
  toggleLearned: () => flashcard.toggleLearned(),
  // Practice globals
  setVocabSubMode,
  submitPractice: () => vocabPractice.submit(el('p-input').value),
  onPracticeKeydown: (e) => {
    if (e.key === 'Enter') { e.preventDefault(); vocabPractice.submit(el('p-input').value); }
  },
  restartPractice: () => vocabPractice.startSession(),
  setPracticeMode,
  switchPracticeKeyboard,
  clearPracticeInput,
  // Audio pronunciation
  speakCurrentCard: () => flashcard.speak(),
  // Multi-language
  setLanguage,
});

/* ════════════════════════════════════════════════════════════════════════════
   INIT — Build learn panels on page load
════════════════════════════════════════════════════════════════════════════ */
buildPanel('panel-hiragana', HIRAGANA_ROWS, 'Hiragana', 'ひらがな');
buildPanel('panel-katakana', KATAKANA_ROWS, 'Katakana', 'カタカナ');
renderLessonToggles();

// Initialize language
setLanguage(currentLang);
