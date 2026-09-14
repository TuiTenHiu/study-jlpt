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

// ── ConjugationLab class ─────────────────────────────────────────────────────

export class ConjugationLab {
  constructor(dom) {
    this.dom = dom;
    this.selectedForm = 'te';    // 'te', 'ta', 'nai', 'dict'
    this.currentStepData = null;
    this.verbs = allVerbs; // Provide access to verbs list for autocomplete
  }

  setForm(formId) {
    this.selectedForm = formId;
    
    // If there is already a valid verb in the input, auto-conjugate
    const inputEl = document.getElementById('cl-verb-input');
    if (inputEl && inputEl.value.trim()) {
      this.conjugateDirect(inputEl.value.trim());
    }
  }

  conjugateDirect(masuForm) {
    const errorEl = document.getElementById('cl-input-error');
    
    if (!masuForm) {
      if (errorEl) errorEl.style.display = 'none';
      this.dom.arena.hidden = true;
      return;
    }

    const verb = this.verbs.find(v => v.masu === masuForm);
    if (!verb) {
      if (errorEl) {
        errorEl.style.display = 'block';
        errorEl.textContent = 'Không tìm thấy động từ này. Vui lòng nhập động từ ở thể ます (VD: たべます).';
      }
      this.dom.arena.hidden = true;
      return;
    }
    
    if (errorEl) errorEl.style.display = 'none';

    this.dom.arena.hidden = false;
    this.currentStepData = generateSteps(verb, this.selectedForm);
    this._renderVerbCard(verb);
    this._renderExplanation();
  }

  _renderVerbCard(verb) {
    const form = targetForms.find(f => f.id === this.selectedForm);

    if (this.dom.verbDisplay) this.dom.verbDisplay.textContent = verb.masu;
    if (this.dom.verbMeaning) this.dom.verbMeaning.textContent = verb.vi;
    if (this.dom.targetForm) this.dom.targetForm.textContent = form.label;

    // Group badge
    const groupLabels = { 1: 'Nhóm 1', 2: 'Nhóm 2', 3: 'Nhóm 3' };
    if (this.dom.groupBadge) {
      this.dom.groupBadge.textContent = groupLabels[verb.group] || ('Nhóm ' + verb.group);
      this.dom.groupBadge.className = 'cl-group-badge cl-group-' + verb.group;
    }
  }

  _renderExplanation() {
    if (!this.currentStepData) return;
    const { steps, finalAnswer } = this.currentStepData;
    const form = targetForms.find(f => f.id === this.selectedForm);

    const resultArrow = document.getElementById('cl-result-arrow');
    const resultAnswer = document.getElementById('cl-result-answer');
    if (resultArrow) resultArrow.textContent = '→ ' + form.label;
    if (resultAnswer) resultAnswer.textContent = finalAnswer;

    if (!this.dom.stepsContainer) return;
    this.dom.stepsContainer.innerHTML = '';

    steps.forEach((step) => {
      const stepEl = document.createElement('div');
      stepEl.className = 'cl-step cl-step--visible';
      stepEl.style.position = 'relative';
      stepEl.style.transform = 'none';
      stepEl.style.opacity = '1';
      stepEl.style.marginBottom = '15px';
      stepEl.style.padding = '15px';
      stepEl.style.border = '1px solid var(--border)';

      if (step.type === 'info') {
        let html = '';
        html += '<div class="cl-step-label" style="font-weight:600;margin-bottom:8px;">' + step.instruction + '</div>';
        html += '<div class="cl-transform" style="justify-content:center;">';
        html += '<div class="cl-morph-before" style="font-size:1.2rem;">' + step.before + '</div>';
        html += '<div class="cl-arrow" style="margin:0 15px;">→</div>';
        html += '<div class="cl-morph-result" style="font-size:1.2rem;color:var(--primary);opacity:1;">' + step.after + '</div>';
        html += '</div>';
        if (step.explain) {
          html += '<div class="cl-step-explain" style="margin-top:10px;color:var(--text-2);font-size:0.95rem;">' + step.explain + '</div>';
        }
        stepEl.innerHTML = html;
      } else if (step.type === 'choose_suffix' || step.type === 'choose_rule') {
        let html = '';
        html += '<div class="cl-step-label" style="font-weight:600;margin-bottom:5px;">' + step.instruction + '</div>';
        if (step.explain) {
          html += '<div class="cl-step-explain" style="margin-bottom:12px;color:var(--text-2);font-size:0.95rem;"><strong>Quy tắc:</strong> ' + step.explain + '</div>';
        }
        html += '<div class="cl-transform" style="justify-content:center;background:var(--bg-hover);padding:10px;border-radius:8px;">';
        html += '<div class="cl-morph-before" style="font-size:1.2rem;">' + step.before + '</div>';
        html += '<div class="cl-arrow" style="margin:0 15px;">→</div>';
        html += '<div class="cl-morph-result" style="font-size:1.2rem;color:var(--primary);font-weight:bold;opacity:1;">' + step.after + '</div>';
        html += '</div>';
        stepEl.innerHTML = html;
      }
      this.dom.stepsContainer.appendChild(stepEl);
    });
  }
}
