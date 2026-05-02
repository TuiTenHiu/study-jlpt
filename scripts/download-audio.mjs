/**
 * scripts/download-audio.mjs
 * Downloads MP3 audio for every vocab word using Google TTS API.
 * Skips files that already exist in /audio directory.
 *
 * Usage: node scripts/download-audio.mjs
 */

import { getAudioBase64 } from 'google-tts-api';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');
const AUDIO_DIR = path.join(ROOT, 'audio');

// Ensure audio directory exists
if (!existsSync(AUDIO_DIR)) mkdirSync(AUDIO_DIR, { recursive: true });

// Load all vocab data
const { vocabData } = await import('../data/vocab.js');

// Collect all words that need an audio file
const words = [];
for (const lesson of Object.values(vocabData)) {
  for (const word of lesson) {
    // Strip leading ~ for TTS (e.g. ～さん → さん)
    const cleanJp = word.jp.replace(/^[～~]/, '').replace(/[～~]$/, '').trim();
    words.push({ jp: cleanJp, audio: word.audio });
  }
}

// Deduplicate by audio filename
const seen = new Set();
const unique = words.filter(w => {
  if (!w.audio || seen.has(w.audio)) return false;
  seen.add(w.audio);
  return true;
});

console.log(`\n📚 Total unique audio files needed: ${unique.length}`);

let downloaded = 0;
let skipped    = 0;
let failed     = 0;

/** Pause execution for ms milliseconds */
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

for (const { jp, audio } of unique) {
  const dest = path.join(AUDIO_DIR, audio);

  if (existsSync(dest)) {
    skipped++;
    process.stdout.write(`  ⏭  Skipped (exists): ${audio}\n`);
    continue;
  }

  if (!jp) {
    process.stdout.write(`  ⚠  Skipped (no text): ${audio}\n`);
    skipped++;
    continue;
  }

  try {
    const base64 = await getAudioBase64(jp, { lang: 'ja', slow: false });
    const buffer = Buffer.from(base64, 'base64');
    await writeFile(dest, buffer);
    downloaded++;
    process.stdout.write(`  ✅ Downloaded: ${audio}  (${jp})\n`);
  } catch (err) {
    failed++;
    process.stdout.write(`  ❌ Failed: ${audio}  (${jp}) — ${err.message}\n`);
  }

  // Be polite to Google TTS — wait 300ms between requests
  await sleep(300);
}

console.log(`\n🎉 Done!`);
console.log(`   ✅ Downloaded : ${downloaded}`);
console.log(`   ⏭  Skipped    : ${skipped}`);
console.log(`   ❌ Failed     : ${failed}`);
