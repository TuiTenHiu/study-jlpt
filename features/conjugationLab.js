/**
 * features/conjugationLab.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Conjugation Lab — A step-by-step verb conjugation mini-game.
 *
 * Unlike traditional quizzes that test the final answer, this game walks
 * the learner through THE PROCESS of conjugation:
 *   1. Show the verb in ます form
 *   2. Animate removing ます
 *   3. Present the rule selection (for Group 1)
 *   4. Animate the character transformation
 *   5. Show the final result
 *
 * Wrong answers get explanations + retry, not just "wrong".
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
  allVerbs,
  targetForms,
  generateSteps,
  group1Rules,
} from '../data/conjugation.js';

// ── Helpers ──────────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── ConjugationLab class ─────────────────────────────────────────────────────

export class ConjugationLab {
  /**
   * @param {Object} dom – references to HTML elements
   */
  constructor(dom) {
    this.dom = dom;
    this.verbs = [];         // current session verbs
    this.currentIndex = 0;
    this.score = 0;
    this.totalAttempts = 0;
    this.wrongCount = 0;
    this.currentStepData = null; // generated steps for current verb
    this.currentStepIdx = 0;     // which step we're on
    this.selectedForm = 'te';    // 'te' or 'ta'
    this._locked = false;
    this._retryCount = 0;
  }

  // ── Session management ──────────────────────────────────────────────────

  /**
   * Load verbs from the flat allVerbs array.
   * @param {number|string} limit – word count or 'all'
   */
  loadVerbs(limit) {
    let all = [...allVerbs];

    // Deduplicate by masu form (just in case)
    const seen = new Set();
    all = all.filter(v => {
      if (seen.has(v.masu)) return false;
      seen.add(v.masu);
      return true;
    });

    shuffle(all);
    this.verbs = limit === 'all' ? all : all.slice(0, Number(limit) || 10);
  }

  /** Start a new game session. */
  startSession() {
    if (this.verbs.length === 0) return;

    this.currentIndex = 0;
    this.score = 0;
    this.wrongCount = 0;
    this.totalAttempts = 0;

    this.dom.idleScreen.hidden = true;
    this.dom.arena.hidden = false;
    this.dom.endScreen.hidden = true;

    this._loadVerb();
  }

  /** Reset to idle screen. */
  reset() {
    this.dom.idleScreen.hidden = false;
    this.dom.arena.hidden = true;
    this.dom.endScreen.hidden = true;
  }

  /** Set the target conjugation form. */
  setForm(formId) {
    this.selectedForm = formId;
  }

  // ── Core game flow ──────────────────────────────────────────────────────

  _loadVerb() {
    this._locked = false;
    this._retryCount = 0;
    const verb = this.verbs[this.currentIndex];

    // Generate conjugation steps
    this.currentStepData = generateSteps(verb, this.selectedForm);
    this.currentStepIdx = 0;

    // Update header
    const total = this.verbs.length;
    this.dom.progressEl.textContent = `${this.currentIndex + 1} / ${total}`;
    this.dom.scoreEl.textContent = this.score;

    // Clear previous content
    this.dom.stepsContainer.innerHTML = '';
    this.dom.optionsContainer.innerHTML = '';
    this.dom.feedbackEl.textContent = '';
    this.dom.feedbackEl.className = 'cl-feedback';
    this.dom.resultCard.hidden = true;
    this.dom.nextBtn.hidden = true;

    // Show verb info card
    this._renderVerbCard();

    // Start showing steps
    this._showNextStep();
  }

  _renderVerbCard() {
    const verb = this.verbs[this.currentIndex];
    const form = targetForms.find(f => f.id === this.selectedForm);

    this.dom.verbDisplay.textContent = verb.masu;
    this.dom.verbMeaning.textContent = verb.vi;
    this.dom.targetForm.textContent = form.label;

    // Group badge
    const groupLabels = { 1: 'Nhóm 1', 2: 'Nhóm 2', 3: 'Nhóm 3 (BQT)' };
    this.dom.groupBadge.textContent = groupLabels[verb.group];
    this.dom.groupBadge.className = `cl-group-badge cl-group-${verb.group}`;
  }

  _showNextStep() {
    if (!this.currentStepData) return;
    const { steps } = this.currentStepData;

    if (this.currentStepIdx >= steps.length) {
      // All steps done — show final result
      this._showFinalResult();
      return;
    }

    const step = steps[this.currentStepIdx];

    if (step.type === 'info') {
      // Information-only step: show animation and auto-advance
      this._renderInfoStep(step);
    } else if (step.type === 'choose_suffix' || step.type === 'choose_rule') {
      // Interactive step: show options
      this._renderInteractiveStep(step);
    }
  }

  // ── Step rendering ──────────────────────────────────────────────────────

  _renderInfoStep(step) {
    const stepEl = document.createElement('div');
    stepEl.className = 'cl-step cl-step--info cl-step--enter';

    if (step.id === 'remove_masu') {
      // Animated removal of ます
      stepEl.innerHTML = `
        <div class="cl-step-label">${step.instruction}</div>
        <div class="cl-transform">
          <div class="cl-morph-container">
            <span class="cl-morph-base">${step.after}</span><span class="cl-morph-removed">${step.removed}</span>
          </div>
          <div class="cl-arrow">→</div>
          <div class="cl-morph-result" id="cl-step-result-${this.currentStepIdx}">${step.after}</div>
        </div>
      `;
    } else if (step.id === 'irregular_transform') {
      stepEl.innerHTML = `
        <div class="cl-step-label">${step.instruction}</div>
        <div class="cl-transform">
          <div class="cl-morph-before">${step.before}</div>
          <div class="cl-arrow">→</div>
          <div class="cl-morph-result cl-morph-result--special">${step.after}</div>
        </div>
        <div class="cl-step-explain">${step.explain}</div>
      `;
    }

    this.dom.stepsContainer.appendChild(stepEl);

    // Trigger enter animation
    requestAnimationFrame(() => {
      stepEl.classList.add('cl-step--visible');
    });

    // Animate ます removal
    if (step.id === 'remove_masu') {
      setTimeout(() => {
        const removedSpan = stepEl.querySelector('.cl-morph-removed');
        if (removedSpan) {
          removedSpan.classList.add('cl-morph-removed--fading');
        }
      }, 600);

      setTimeout(() => {
        const resultEl = stepEl.querySelector(`#cl-step-result-${this.currentStepIdx}`);
        if (resultEl) resultEl.classList.add('cl-morph-result--revealed');
      }, 1000);
    }

    // Auto-advance after animation
    setTimeout(() => {
      this.currentStepIdx++;
      this._showNextStep();
    }, step.id === 'remove_masu' ? 1400 : 1800);
  }

  _renderInteractiveStep(step) {
    // Clear feedback and options
    this.dom.optionsContainer.innerHTML = '';
    this.dom.feedbackEl.textContent = '';
    this.dom.feedbackEl.className = 'cl-feedback';

    const stepEl = document.createElement('div');
    stepEl.className = 'cl-step cl-step--interactive cl-step--enter';

    stepEl.innerHTML = `
      <div class="cl-step-label">${step.instruction}</div>
      <div class="cl-step-question">${step.question}</div>
    `;

    this.dom.stepsContainer.appendChild(stepEl);

    requestAnimationFrame(() => {
      stepEl.classList.add('cl-step--visible');
    });

    // Render options as cards
    setTimeout(() => {
      this._renderOptions(step);
    }, 400);
  }

  _renderOptions(step) {
    this.dom.optionsContainer.innerHTML = '';
    this._locked = false;

    step.options.forEach((option, idx) => {
      const btn = document.createElement('button');
      btn.className = 'cl-option';
      btn.textContent = option;
      btn.style.animationDelay = `${idx * 80}ms`;

      btn.addEventListener('click', () => this._handleOptionClick(option, step, btn));
      this.dom.optionsContainer.appendChild(btn);
    });
  }

  _handleOptionClick(chosen, step, btnEl) {
    if (this._locked) return;
    this._locked = true;
    this.totalAttempts++;

    const isCorrect = this._isCorrectAnswer(chosen, step);

    if (isCorrect) {
      btnEl.classList.add('cl-option--correct');
      this._showFeedback('✅ Chính xác!', 'correct');

      // Animate the transformation
      setTimeout(() => {
        this._animateTransformation(step);
      }, 600);

      // Advance to next step
      setTimeout(() => {
        this.currentStepIdx++;
        this._showNextStep();
      }, 1600);
    } else {
      this._retryCount++;
      this.wrongCount++;
      btnEl.classList.add('cl-option--wrong');
      btnEl.disabled = true;

      // Show detailed explanation
      const explain = step.explain || 'Hãy thử lại!';
      this._showFeedback(`❌ Chưa đúng! ${explain}`, 'wrong');

      // Allow retry after a short delay
      setTimeout(() => {
        this._locked = false;
      }, 800);
    }
  }

  _isCorrectAnswer(chosen, step) {
    if (step.type === 'choose_suffix') {
      return chosen === step.correctAnswer;
    }
    if (step.type === 'choose_rule') {
      // Check if chosen matches the correct rule label
      return chosen === step.correctAnswer || chosen === step.correctRule;
    }
    return false;
  }

  _animateTransformation(step) {
    const stepEl = document.createElement('div');
    stepEl.className = 'cl-step cl-step--transform cl-step--enter';

    stepEl.innerHTML = `
      <div class="cl-transform">
        <div class="cl-morph-before">${step.before}</div>
        <div class="cl-arrow cl-arrow--animated">→</div>
        <div class="cl-morph-result cl-morph-result--pop">${step.after}</div>
      </div>
    `;

    this.dom.stepsContainer.appendChild(stepEl);
    requestAnimationFrame(() => {
      stepEl.classList.add('cl-step--visible');
    });
  }

  // ── Final result ────────────────────────────────────────────────────────

  _showFinalResult() {
    const { finalAnswer, verb } = this.currentStepData;
    const form = targetForms.find(f => f.id === this.selectedForm);

    // Mark as correct if no retries needed
    if (this._retryCount === 0) {
      this.score++;
      this.dom.scoreEl.textContent = this.score;
    }

    // Show result card
    this.dom.resultCard.hidden = false;
    this.dom.resultCard.innerHTML = `
      <div class="cl-result-inner">
        <div class="cl-result-emoji">${this._retryCount === 0 ? '🎉' : '💡'}</div>
        <div class="cl-result-label">Kết quả</div>
        <div class="cl-result-verb">${verb.masu}</div>
        <div class="cl-result-arrow">→ ${form.label}</div>
        <div class="cl-result-answer">${finalAnswer}</div>
        <div class="cl-result-meaning">${verb.vi}</div>
      </div>
    `;

    // Animate result card
    requestAnimationFrame(() => {
      this.dom.resultCard.classList.add('cl-result--revealed');
    });

    // Show next button
    setTimeout(() => {
      this.dom.nextBtn.hidden = false;
      this.dom.optionsContainer.innerHTML = '';
    }, 600);
  }

  /** Go to next verb or end. */
  next() {
    this.dom.resultCard.classList.remove('cl-result--revealed');
    this.currentIndex++;
    if (this.currentIndex >= this.verbs.length) {
      this._showEnd();
    } else {
      this._loadVerb();
    }
  }

  /** Skip current verb. */
  skip() {
    this.currentIndex++;
    if (this.currentIndex >= this.verbs.length) {
      this._showEnd();
    } else {
      this._loadVerb();
    }
  }

  // ── End screen ──────────────────────────────────────────────────────────

  _showEnd() {
    this.dom.arena.hidden = true;
    this.dom.endScreen.hidden = false;

    const total = this.verbs.length;
    const pct = Math.round((this.score / total) * 100);

    this.dom.finalScoreEl.textContent = `${this.score} / ${total}`;
    this.dom.finalCorrectEl.textContent = this.score;
    this.dom.finalWrongEl.textContent = total - this.score;

    let emoji = '🌱';
    if (pct >= 90) emoji = '🏆';
    else if (pct >= 70) emoji = '⭐';
    else if (pct >= 50) emoji = '💪';
    this.dom.endScreen.querySelector('.cl-end-icon').textContent = emoji;
  }

  // ── Feedback helper ─────────────────────────────────────────────────────

  _showFeedback(msg, type) {
    this.dom.feedbackEl.textContent = msg;
    this.dom.feedbackEl.className = `cl-feedback cl-feedback--${type}`;
  }
}
