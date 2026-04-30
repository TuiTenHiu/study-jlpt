/**
 * tests/kana.test.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Unit tests for data/kana.js
 *
 * Tests cover:
 *   • HIRAGANA_ROWS  – structure, labels, null placeholders, specific chars
 *   • KATAKANA_ROWS  – mirrors hiragana structure, no cross-script contamination
 *   • HIRAGANA_FLAT  – no nulls, unique chars, known mappings
 *   • KATAKANA_FLAT  – same count as hiragana, matching romaji per sound
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { describe, it, expect } from 'vitest';
import {
  HIRAGANA_ROWS,
  KATAKANA_ROWS,
  HIRAGANA_FLAT,
  KATAKANA_FLAT,
} from '../data/kana.js';

/* ════════════════════════════════════════════════════════════════════════════
   Helpers
════════════════════════════════════════════════════════════════════════════ */

/** All non-null char entries from a rows array (same logic as flattenRows). */
const flatten = rows => rows.flatMap(r => r.chars.filter(Boolean));

/** Regex matching the Unicode Hiragana block. */
const HIRAGANA_RE = /[\u3040-\u309F]/;

/** Regex matching the Unicode Katakana block. */
const KATAKANA_RE = /[\u30A0-\u30FF]/;

/* ════════════════════════════════════════════════════════════════════════════
   HIRAGANA_ROWS
════════════════════════════════════════════════════════════════════════════ */
describe('HIRAGANA_ROWS', () => {

  it('exports an array', () => {
    expect(Array.isArray(HIRAGANA_ROWS)).toBe(true);
  });

  it('has 11 rows (voiced + combination rows)', () => {
    expect(HIRAGANA_ROWS).toHaveLength(11);
  });

  it('every row has a non-empty label string', () => {
    HIRAGANA_ROWS.forEach(row => {
      expect(typeof row.label).toBe('string');
      expect(row.label.trim().length).toBeGreaterThan(0);
    });
  });

  it('every row has a chars array', () => {
    HIRAGANA_ROWS.forEach(row => {
      expect(Array.isArray(row.chars)).toBe(true);
      expect(row.chars.length).toBeGreaterThan(0);
    });
  });

  it('every non-null char entry has char and romaji strings', () => {
    HIRAGANA_ROWS.forEach(row => {
      row.chars.forEach(entry => {
        if (entry !== null) {
          expect(typeof entry.char).toBe('string');
          expect(typeof entry.romaji).toBe('string');
          expect(entry.char.length).toBeGreaterThan(0);
          expect(entry.romaji.length).toBeGreaterThan(0);
        }
      });
    });
  });

  it('first row is G-row and contains がぎぐげご', () => {
    const chars = HIRAGANA_ROWS[0].chars.map(e => e.char);
    expect(chars).toContain('が');
    expect(chars).toContain('ぎ');
    expect(chars).toContain('ぐ');
    expect(chars).toContain('げ');
    expect(chars).toContain('ご');
  });

  /*
  it('Y-row (や行) has null placeholders for missing yi and ye positions', () => {
    const yRow = HIRAGANA_ROWS.find(r => r.label.includes('Y-row'));
    expect(yRow).toBeDefined();
    expect(yRow.chars[1]).toBeNull(); // yi does not exist
    expect(yRow.chars[3]).toBeNull(); // ye does not exist
    expect(yRow.chars[0]?.char).toBe('や');
    expect(yRow.chars[2]?.char).toBe('ゆ');
    expect(yRow.chars[4]?.char).toBe('よ');
  });

  it('W-row (わ行) has only wa and wo (2 non-null entries)', () => {
    const wRow = HIRAGANA_ROWS.find(r => r.label.includes('W-row'));
    expect(wRow).toBeDefined();
    const nonNull = wRow.chars.filter(Boolean);
    expect(nonNull).toHaveLength(2);
    const chars = nonNull.map(e => e.char);
    expect(chars).toContain('わ');
    expect(chars).toContain('を');
  });

  it('contains a row with ん (n)', () => {
    const nRow = HIRAGANA_ROWS.find(r => r.chars.some(c => c?.char === 'ん'));
    expect(nRow).toBeDefined();
    const nEntry = nRow.chars.find(c => c?.char === 'ん');
    expect(nEntry?.romaji).toBe('n');
  });
  */

  it('all char values are in the Hiragana Unicode block', () => {
    HIRAGANA_ROWS.forEach(row => {
      row.chars.forEach(entry => {
        if (entry) {
          // chars may be multi-code-point (combinations) — check at least one char is hiragana
          expect(HIRAGANA_RE.test(entry.char)).toBe(true);
        }
      });
    });
  });

  it('no row label is duplicated', () => {
    const labels = HIRAGANA_ROWS.map(r => r.label);
    const unique  = new Set(labels);
    expect(unique.size).toBe(labels.length);
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   KATAKANA_ROWS
════════════════════════════════════════════════════════════════════════════ */
describe('KATAKANA_ROWS', () => {

  it('has the same number of rows as HIRAGANA_ROWS', () => {
    expect(KATAKANA_ROWS).toHaveLength(HIRAGANA_ROWS.length);
  });

  it('every row has a non-empty label and a chars array', () => {
    KATAKANA_ROWS.forEach(row => {
      expect(typeof row.label).toBe('string');
      expect(row.label.trim().length).toBeGreaterThan(0);
      expect(Array.isArray(row.chars)).toBe(true);
    });
  });

  it('first row contains ガ ギ グ ゲ ゴ', () => {
    const chars = KATAKANA_ROWS[0].chars.map(e => e.char);
    expect(chars).toContain('ガ');
    expect(chars).toContain('ギ');
    expect(chars).toContain('グ');
    expect(chars).toContain('ゲ');
    expect(chars).toContain('ゴ');
  });

  /*
  it('contains a row with ン (n)', () => {
    const nRow = KATAKANA_ROWS.find(r => r.chars.some(c => c?.char === 'ン'));
    expect(nRow).toBeDefined();
    const nEntry = nRow.chars.find(c => c?.char === 'ン');
    expect(nEntry?.romaji).toBe('n');
  });

  it('Y-row mirrors hiragana — has null placeholders at positions 1 and 3', () => {
    const yRow = KATAKANA_ROWS.find(r => r.label.includes('Y-row'));
    expect(yRow).toBeDefined();
    expect(yRow.chars[1]).toBeNull();
    expect(yRow.chars[3]).toBeNull();
  });

  it('W-row has only 2 non-null entries (ワ and ヲ)', () => {
    const wRow = KATAKANA_ROWS.find(r => r.label.includes('W-row'));
    expect(wRow).toBeDefined();
    const nonNull = wRow.chars.filter(Boolean);
    expect(nonNull).toHaveLength(2);
    expect(nonNull.map(e => e.char)).toContain('ワ');
    expect(nonNull.map(e => e.char)).toContain('ヲ');
  });
  */

  it('no hiragana characters appear in katakana rows', () => {
    KATAKANA_ROWS.forEach(row => {
      row.chars.forEach(entry => {
        if (entry) {
          expect(HIRAGANA_RE.test(entry.char)).toBe(false);
        }
      });
    });
  });

  it('all char values are in the Katakana Unicode block', () => {
    KATAKANA_ROWS.forEach(row => {
      row.chars.forEach(entry => {
        if (entry) {
          expect(KATAKANA_RE.test(entry.char)).toBe(true);
        }
      });
    });
  });

  it('each row has the same number of chars slots as the corresponding hiragana row', () => {
    HIRAGANA_ROWS.forEach((hRow, i) => {
      expect(KATAKANA_ROWS[i].chars).toHaveLength(hRow.chars.length);
    });
  });

  it('null positions in katakana match null positions in hiragana', () => {
    HIRAGANA_ROWS.forEach((hRow, ri) => {
      hRow.chars.forEach((entry, ci) => {
        if (entry === null) {
          expect(KATAKANA_ROWS[ri].chars[ci]).toBeNull();
        }
      });
    });
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   HIRAGANA_FLAT
════════════════════════════════════════════════════════════════════════════ */
describe('HIRAGANA_FLAT', () => {

  it('is an array', () => {
    expect(Array.isArray(HIRAGANA_FLAT)).toBe(true);
  });

  it('contains no null entries', () => {
    HIRAGANA_FLAT.forEach(entry => {
      expect(entry).not.toBeNull();
      expect(entry).not.toBeUndefined();
    });
  });

  it('every entry has char and romaji as non-empty strings', () => {
    HIRAGANA_FLAT.forEach(({ char, romaji }) => {
      expect(typeof char).toBe('string');
      expect(typeof romaji).toBe('string');
      expect(char.length).toBeGreaterThan(0);
      expect(romaji.length).toBeGreaterThan(0);
    });
  });

  it('equals the manual flatten of HIRAGANA_ROWS', () => {
    expect(HIRAGANA_FLAT).toEqual(flatten(HIRAGANA_ROWS));
  });

  it('has more than 46 entries (basic + voiced + combination)', () => {
    expect(HIRAGANA_FLAT.length).toBeGreaterThan(46);
  });

  it('char values have no duplicates', () => {
    const chars  = HIRAGANA_FLAT.map(e => e.char);
    const unique = new Set(chars);
    expect(unique.size).toBe(chars.length);
  });

  it.each([
    // [char, expected romaji]
    ['が', 'ga'],
    ['じ', 'ji'],
    ['ぱ', 'pa'],
    ['きゃ', 'kya'],
    ['しゅ', 'shu'],
    ['ちょ', 'cho'],
    ['じゃ', 'ja'],
    ['ぴょ', 'pyo'],
  ])('%s → %s', (char, romaji) => {
    const entry = HIRAGANA_FLAT.find(e => e.char === char);
    expect(entry).toBeDefined();
    expect(entry.romaji).toBe(romaji);
  });
});

/* ════════════════════════════════════════════════════════════════════════════
   KATAKANA_FLAT
════════════════════════════════════════════════════════════════════════════ */
describe('KATAKANA_FLAT', () => {

  it('is an array', () => {
    expect(Array.isArray(KATAKANA_FLAT)).toBe(true);
  });

  it('has the same length as HIRAGANA_FLAT', () => {
    expect(KATAKANA_FLAT.length).toBe(HIRAGANA_FLAT.length);
  });

  it('contains no null or undefined entries', () => {
    KATAKANA_FLAT.forEach(entry => {
      expect(entry).not.toBeNull();
      expect(entry).not.toBeUndefined();
    });
  });

  it('equals the manual flatten of KATAKANA_ROWS', () => {
    expect(KATAKANA_FLAT).toEqual(flatten(KATAKANA_ROWS));
  });

  it('char values have no duplicates', () => {
    const chars  = KATAKANA_FLAT.map(e => e.char);
    const unique = new Set(chars);
    expect(unique.size).toBe(chars.length);
  });

  it('contains NO hiragana characters', () => {
    KATAKANA_FLAT.forEach(({ char }) => {
      expect(HIRAGANA_RE.test(char)).toBe(false);
    });
  });

  it.each([
    ['ガ', 'ga'],
    ['ジ', 'ji'],
    ['パ', 'pa'],
    ['キャ', 'kya'],
    ['ショ', 'sho'],
    ['チャ', 'cha'],
    ['ジャ', 'ja'],
    ['ピョ', 'pyo'],
  ])('%s → %s', (char, romaji) => {
    const entry = KATAKANA_FLAT.find(e => e.char === char);
    expect(entry).toBeDefined();
    expect(entry.romaji).toBe(romaji);
  });

  it('every romaji in HIRAGANA_FLAT also appears in KATAKANA_FLAT', () => {
    // Katakana should cover every sound that hiragana covers
    const kataRomajis = new Set(KATAKANA_FLAT.map(e => e.romaji));
    HIRAGANA_FLAT.forEach(({ romaji }) => {
      expect(kataRomajis.has(romaji)).toBe(true);
    });
  });

  it('romaji at each index matches the corresponding hiragana entry romaji', () => {
    // Since both are flattened in the same order from parallel row arrays,
    // index-to-index romaji should match
    HIRAGANA_FLAT.forEach((hEntry, i) => {
      expect(KATAKANA_FLAT[i].romaji).toBe(hEntry.romaji);
    });
  });
});
