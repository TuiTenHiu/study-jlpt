/**
 * features/audio.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Audio engine for the Japanese study app.
 *
 * Priority chain:
 *   1. `audio` field on vocab item  → play real audio file
 *   2. Web Speech API (ja-JP voice) → synthesized fallback
 *
 * Usage:
 *   import { playWord, cancelSpeech } from './audio.js';
 *   await playWord(wordObj, buttonEl);
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ── Internal state ─────────────────────────────────────────────────────── */

/** Keeps track of the active HTMLAudioElement so we can stop it. */
let _activeAudio = null;

/** Pre-fetched list of available voices (populated lazily). */
let _voices = [];

/** Whether voices have been loaded at least once. */
let _voicesReady = false;

/* ── Voice loading ──────────────────────────────────────────────────────── */

function _loadVoices() {
  _voices = window.speechSynthesis?.getVoices() ?? [];
  if (_voices.length) _voicesReady = true;
}

function _getBestJaVoice() {
  _loadVoices();
  // Prefer exact ja-JP match, then any ja-* voice, then null (browser default)
  return (
    _voices.find(v => v.lang === 'ja-JP' && !v.localService === false) ?? // remote (usually higher quality)
    _voices.find(v => v.lang === 'ja-JP') ??
    _voices.find(v => v.lang.startsWith('ja')) ??
    null
  );
}

/* ── Public API ─────────────────────────────────────────────────────────── */

/**
 * Cancel any in-progress audio or speech synthesis immediately.
 */
export function cancelSpeech() {
  // Stop real-audio
  if (_activeAudio) {
    _activeAudio.pause();
    _activeAudio.currentTime = 0;
    _activeAudio = null;
  }
  // Stop synthesis
  if (window.speechSynthesis?.speaking) {
    window.speechSynthesis.cancel();
  }
}

/**
 * Play pronunciation for a vocab word.
 *
 * @param {{ jp: string, audio?: string }} word
 *   The vocab entry. If `audio` is set, that URL is played first.
 * @param {HTMLElement|null} [btn]
 *   Optional button element that will be disabled while audio plays.
 * @returns {Promise<void>}  Resolves when playback ends (or on error).
 */
export function playWord(word, btn = null) {
  cancelSpeech();

  if (word?.audio) {
    // Prepend the local audio directory path
    const src = `audio/${word.audio}`;
    return _playAudioFile(src, btn);
  }
  return _speak(word?.jp ?? '', btn);
}

/**
 * Convenience alias — speak a raw Japanese string.
 * Used by any code that only has text, not a full vocab object.
 *
 * @param {string} text
 * @param {HTMLElement|null} [btn]
 */
export function speakJapanese(text, btn = null) {
  cancelSpeech();
  return _speak(text, btn);
}

/* ── Internal helpers ───────────────────────────────────────────────────── */

/**
 * Play a real audio file.
 * @param {string} src  URL / path to the audio file.
 * @param {HTMLElement|null} btn
 */
function _playAudioFile(src, btn) {
  return new Promise(resolve => {
    const audio = new Audio(src);
    _activeAudio = audio;

    _setButtonBusy(btn, true);

    audio.addEventListener('ended', () => {
      _activeAudio = null;
      _setButtonBusy(btn, false);
      resolve();
    });

    audio.addEventListener('error', () => {
      console.warn(`[audio] Failed to load "${src}", falling back to synthesis.`);
      _activeAudio = null;
      _setButtonBusy(btn, false);
      resolve();
    });

    audio.play().catch(() => {
      // play() promise rejection (e.g. autoplay policy) — silently resolve
      _activeAudio = null;
      _setButtonBusy(btn, false);
      resolve();
    });
  });
}

/**
 * Speak text via the Web Speech API with a Japanese voice.
 * @param {string} text
 * @param {HTMLElement|null} btn
 */
function _speak(text, btn) {
  if (!window.speechSynthesis || !text.trim()) return Promise.resolve();

  return new Promise(resolve => {
    const utterance    = new SpeechSynthesisUtterance(text);
    utterance.lang     = 'ja-JP';
    utterance.rate     = 0.65;   // Slower → clearer for learners
    utterance.pitch    = 1.0;
    utterance.volume   = 1.0;

    utterance.onend    = () => { _setButtonBusy(btn, false); resolve(); };
    utterance.onerror  = () => { _setButtonBusy(btn, false); resolve(); };

    _setButtonBusy(btn, true);

    const doSpeak = () => {
      const voice = _getBestJaVoice();
      if (voice) utterance.voice = voice;
      window.speechSynthesis.speak(utterance);
    };

    if (_voicesReady) {
      doSpeak();
    } else {
      // Voices load asynchronously on first call in some browsers
      window.speechSynthesis.addEventListener('voiceschanged', () => {
        _loadVoices();
        doSpeak();
      }, { once: true });
      // Also try immediately in case voiceschanged already fired
      _loadVoices();
      if (_voicesReady) doSpeak();
    }
  });
}

/**
 * Toggle a speaker button's disabled state and visual style.
 * @param {HTMLElement|HTMLElement[]|null} btn
 * @param {boolean} busy
 */
function _setButtonBusy(btn, busy) {
  if (!btn) return;
  const buttons = Array.isArray(btn) ? btn : [btn];
  
  buttons.forEach(b => {
    if (!b) return;
    b.disabled = busy;
    b.classList.toggle('speaking', busy);
  });
}
