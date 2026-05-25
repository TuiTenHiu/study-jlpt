/**
 * data/kana.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all Hiragana and Katakana data.
 *
 * Exports:
 *   HIRAGANA_ROWS  – grouped rows (used to build the learn grid)
 *   KATAKANA_ROWS  – grouped rows (used to build the learn grid)
 *   HIRAGANA_FLAT  – flat array of { char, romaji }  (used by the quiz)
 *   KATAKANA_FLAT  – flat array of { char, romaji }  (used by the quiz)
 *
 * Row format:
 *   { label: string, chars: Array<{ char: string, romaji: string } | null> }
 *   null marks an empty cell in the traditional kana grid layout.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ── Hiragana rows ───────────────────────────────────────────────────────── */
export const HIRAGANA_ROWS = [
  { label: 'Vowels (あ行)', chars: [{ char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' }, { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' }] },
  { label: 'K-row (か行)', chars: [{ char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' }] },
  { label: 'S-row (さ行)', chars: [{ char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' }, { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' }] },
  { label: 'T-row (た行)', chars: [{ char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' }, { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' }] },
  { label: 'N-row (な行)', chars: [{ char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' }, { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' }] },
  { label: 'H-row (は行)', chars: [{ char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' }, { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' }] },
  { label: 'M-row (ま行)', chars: [{ char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' }, { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' }] },
  { label: 'Y-row (や行)', chars: [{ char: 'や', romaji: 'ya' }, null, { char: 'ゆ', romaji: 'yu' }, null, { char: 'よ', romaji: 'yo' }] },
  { label: 'R-row (ら行)', chars: [{ char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' }] },
  { label: 'W-row (わ行)', chars: [{ char: 'わ', romaji: 'wa' }, null, null, null, { char: 'を', romaji: 'wo' }] },
  { label: 'N (ん)', chars: [{ char: 'ん', romaji: 'n' }] },

  /* ── Dakuten & Handakuten (Hiragana) ───────────────────────────────── */
  { label: 'G-row (が行)', chars: [{ char: 'が', romaji: 'ga' }, { char: 'ぎ', romaji: 'gi' }, { char: 'ぐ', romaji: 'gu' }, { char: 'げ', romaji: 'ge' }, { char: 'ご', romaji: 'go' }] },
  { label: 'Z-row (ざ行)', chars: [{ char: 'ざ', romaji: 'za' }, { char: 'じ', romaji: 'ji' }, { char: 'ず', romaji: 'zu' }, { char: 'ぜ', romaji: 'ze' }, { char: 'ぞ', romaji: 'zo' }] },
  { label: 'D-row (だ行)', chars: [{ char: 'だ', romaji: 'da' }, { char: 'ぢ', romaji: 'ji' }, { char: 'づ', romaji: 'zu' }, { char: 'で', romaji: 'de' }, { char: 'ど', romaji: 'do' }] },
  { label: 'B-row (ば行)', chars: [{ char: 'ば', romaji: 'ba' }, { char: 'び', romaji: 'bi' }, { char: 'ぶ', romaji: 'bu' }, { char: 'べ', romaji: 'be' }, { char: 'ぼ', romaji: 'bo' }] },
  { label: 'P-row (ぱ行)', chars: [{ char: 'ぱ', romaji: 'pa' }, { char: 'ぴ', romaji: 'pi' }, { char: 'ぷ', romaji: 'pu' }, { char: 'ぺ', romaji: 'pe' }, { char: 'ぽ', romaji: 'po' }] },

  /* ── Yōon (Hiragana) ───────────────────────────────────────────────── */
  { label: 'K/G-yōon', chars: [{ char: 'きゃ', romaji: 'kya' }, { char: 'きゅ', romaji: 'kyu' }, { char: 'きょ', romaji: 'kyo' }, { char: 'ぎゃ', romaji: 'gya' }, { char: 'ぎゅ', romaji: 'gyu' }, { char: 'ぎょ', romaji: 'gyo' }] },
  { label: 'S/Z-yōon', chars: [{ char: 'しゃ', romaji: 'sha' }, { char: 'しゅ', romaji: 'shu' }, { char: 'しょ', romaji: 'sho' }, { char: 'じゃ', romaji: 'ja' }, { char: 'じゅ', romaji: 'ju' }, { char: 'じょ', romaji: 'jo' }] },
  { label: 'T/N-yōon', chars: [{ char: 'ちゃ', romaji: 'cha' }, { char: 'ちゅ', romaji: 'chu' }, { char: 'ちょ', romaji: 'cho' }, { char: 'にゃ', romaji: 'nya' }, { char: 'にゅ', romaji: 'nyu' }, { char: 'にょ', romaji: 'nyo' }] },
  { label: 'H/B/P-yōon', chars: [{ char: 'ひゃ', romaji: 'hya' }, { char: 'ひゅ', romaji: 'hyu' }, { char: 'ひょ', romaji: 'hyo' }, { char: 'びゃ', romaji: 'bya' }, { char: 'びゅ', romaji: 'byu' }, { char: 'びょ', romaji: 'byo' }, { char: 'ぴゃ', romaji: 'pya' }, { char: 'ぴゅ', romaji: 'pyu' }, { char: 'ぴょ', romaji: 'pyo' }] },
  { label: 'M-yōon', chars: [{ char: 'みゃ', romaji: 'mya' }, { char: 'みゅ', romaji: 'myu' }, { char: 'みょ', romaji: 'myo' }] },
  { label: 'R-yōon', chars: [{ char: 'りゃ', romaji: 'rya' }, { char: 'りゅ', romaji: 'ryu' }, { char: 'りょ', romaji: 'ryo' }] },
];

/* ── Katakana rows ───────────────────────────────────────────────────────── */
export const KATAKANA_ROWS = [
  { label: 'Vowels (ア行)', chars: [{ char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' }, { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' }] },
  { label: 'K-row (カ行)', chars: [{ char: 'カ', romaji: 'ka' }, { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' }, { char: 'ケ', romaji: 'ke' }, { char: 'コ', romaji: 'ko' }] },
  { label: 'S-row (サ行)', chars: [{ char: 'サ', romaji: 'sa' }, { char: 'シ', romaji: 'shi' }, { char: 'ス', romaji: 'su' }, { char: 'セ', romaji: 'se' }, { char: 'ソ', romaji: 'so' }] },
  { label: 'T-row (タ行)', chars: [{ char: 'タ', romaji: 'ta' }, { char: 'チ', romaji: 'chi' }, { char: 'ツ', romaji: 'tsu' }, { char: 'テ', romaji: 'te' }, { char: 'ト', romaji: 'to' }] },
  { label: 'N-row (ナ行)', chars: [{ char: 'ナ', romaji: 'na' }, { char: 'ニ', romaji: 'ni' }, { char: 'ヌ', romaji: 'nu' }, { char: 'ネ', romaji: 'ne' }, { char: 'ノ', romaji: 'no' }] },
  { label: 'H-row (ハ行)', chars: [{ char: 'ハ', romaji: 'ha' }, { char: 'ヒ', romaji: 'hi' }, { char: 'フ', romaji: 'fu' }, { char: 'ヘ', romaji: 'he' }, { char: 'ホ', romaji: 'ho' }] },
  { label: 'M-row (マ行)', chars: [{ char: 'マ', romaji: 'ma' }, { char: 'ミ', romaji: 'mi' }, { char: 'ム', romaji: 'mu' }, { char: 'メ', romaji: 'me' }, { char: 'モ', romaji: 'mo' }] },
  { label: 'Y-row (ヤ行)', chars: [{ char: 'ヤ', romaji: 'ya' }, null, { char: 'ユ', romaji: 'yu' }, null, { char: 'ヨ', romaji: 'yo' }] },
  { label: 'R-row (ラ行)', chars: [{ char: 'ラ', romaji: 'ra' }, { char: 'リ', romaji: 'ri' }, { char: 'ル', romaji: 'ru' }, { char: 'レ', romaji: 're' }, { char: 'ロ', romaji: 'ro' }] },
  { label: 'W-row (ワ行)', chars: [{ char: 'ワ', romaji: 'wa' }, null, null, null, { char: 'ヲ', romaji: 'wo' }] },
  { label: 'N (ン)', chars: [{ char: 'ン', romaji: 'n' }] },

  /* ── Dakuten & Handakuten (Katakana) ───────────────────────────────── */
  { label: 'G-row (ガ行)', chars: [{ char: 'ガ', romaji: 'ga' }, { char: 'ギ', romaji: 'gi' }, { char: 'グ', romaji: 'gu' }, { char: 'ゲ', romaji: 'ge' }, { char: 'ゴ', romaji: 'go' }] },
  { label: 'Z-row (ざ行)', chars: [{ char: 'ザ', romaji: 'za' }, { char: 'ジ', romaji: 'ji' }, { char: 'ズ', romaji: 'zu' }, { char: 'ゼ', romaji: 'ze' }, { char: 'ゾ', romaji: 'zo' }] },
  { label: 'D-row (ダ行)', chars: [{ char: 'ダ', romaji: 'da' }, { char: 'ヂ', romaji: 'ji' }, { char: 'ヅ', romaji: 'zu' }, { char: 'デ', romaji: 'de' }, { char: 'ド', romaji: 'do' }] },
  { label: 'B-row (バ行)', chars: [{ char: 'バ', romaji: 'ba' }, { char: 'ビ', romaji: 'bi' }, { char: 'ブ', romaji: 'bu' }, { char: 'ベ', romaji: 'be' }, { char: 'ボ', romaji: 'bo' }] },
  { label: 'P-row (パ行)', chars: [{ char: 'パ', romaji: 'pa' }, { char: 'ピ', romaji: 'pi' }, { char: 'プ', romaji: 'pu' }, { char: 'ペ', romaji: 'pe' }, { char: 'ポ', romaji: 'po' }] },

  /* ── Yōon (Katakana) ───────────────────────────────────────────────── */
  { label: 'K/G-yōon', chars: [{ char: 'キャ', romaji: 'kya' }, { char: 'キュ', romaji: 'kyu' }, { char: 'キョ', romaji: 'kyo' }, { char: 'ギャ', romaji: 'gya' }, { char: 'ギュ', romaji: 'gyu' }, { char: 'ギョ', romaji: 'gyo' }] },
  { label: 'S/Z-yōon', chars: [{ char: 'シャ', romaji: 'sha' }, { char: 'シュ', romaji: 'shu' }, { char: 'ショ', romaji: 'sho' }, { char: 'ジャ', romaji: 'ja' }, { char: 'ジュ', romaji: 'ju' }, { char: 'ジョ', romaji: 'jo' }] },
  { label: 'T/N-yōon', chars: [{ char: 'チャ', romaji: 'cha' }, { char: 'チュ', romaji: 'chu' }, { char: 'チョ', romaji: 'cho' }, { char: 'ニャ', romaji: 'nya' }, { char: 'ニュ', romaji: 'nyu' }, { char: 'ニョ', romaji: 'nyo' }] },
  { label: 'H/B/P-yōon', chars: [{ char: 'ヒャ', romaji: 'hya' }, { char: 'ヒュ', romaji: 'hyu' }, { char: 'ヒョ', romaji: 'hyo' }, { char: 'ビャ', romaji: 'bya' }, { char: 'ビュ', romaji: 'byu' }, { char: 'ビョ', romaji: 'byo' }, { char: 'ピャ', romaji: 'pya' }, { char: 'ピュ', romaji: 'pyu' }, { char: 'ピョ', romaji: 'pyo' }] },
  { label: 'M-yōon', chars: [{ char: 'ミャ', romaji: 'mya' }, { char: 'ミュ', romaji: 'myu' }, { char: 'ミョ', romaji: 'myo' }] },
  { label: 'R-yōon', chars: [{ char: 'リャ', romaji: 'rya' }, { char: 'リュ', romaji: 'ryu' }, { char: 'リョ', romaji: 'ryo' }] },
];

/* ── Flat arrays (quiz-ready) ────────────────────────────────────────────── */

/**
 * Flatten a rows array into a simple { char, romaji }[] list,
 * removing null placeholder cells.
 * @param {Array} rows
 * @returns {{ char: string, romaji: string }[]}
 */
function flattenRows(rows) {
  return rows.flatMap(row => row.chars.filter(Boolean));
}

export const HIRAGANA_FLAT = flattenRows(HIRAGANA_ROWS);
export const KATAKANA_FLAT = flattenRows(KATAKANA_ROWS);
