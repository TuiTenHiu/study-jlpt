import fs from 'fs/promises';
import path from 'path';
import * as tts from 'google-tts-api';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const VOCAB_FILE = path.join(ROOT_DIR, 'data', 'vocab.js');
const AUDIO_DIR = path.join(ROOT_DIR, 'audio');

async function generate() {
  console.log('🚀 Starting high-quality audio generation...');
  
  // Ensure audio directory exists
  await fs.mkdir(AUDIO_DIR, { recursive: true });

  const fileUrl = new URL(`file://${path.resolve(VOCAB_FILE)}`).href;
  const { vocabData } = await import(fileUrl);
  
  // The user requested audio for lessons 1 to 6
  const lessonsToProcess = ['1', '2', '3', '4', '5', '6'];

  for (const lesson of lessonsToProcess) {
    if (!vocabData[lesson]) continue;
    
    console.log(`\n📂 Processing Lesson ${lesson}...`);
    const vocabList = vocabData[lesson];

    for (const item of vocabList) {
      // Create a clean filename from romaji
      const safeRomaji = item.romaji.toLowerCase().replace(/[^a-z0-9]/g, '_');
      const fileName = `${safeRomaji}.mp3`;
      const audioPath = path.join(AUDIO_DIR, fileName);

      try {
        // Check if file already exists
        await fs.access(audioPath);
        console.log(`  - ⏭️  Skipping "${item.jp}" (file exists: ${fileName})`);
      } catch (e) {
        // Generate audio if missing
        console.log(`  - 🎙️  Generating audio for "${item.jp}"...`);
        try {
          // Wait briefly to avoid rate limiting
          await new Promise(r => setTimeout(r, 300));
          const base64 = await tts.getAudioBase64(item.jp, {
            lang: 'ja',
            slow: false,
            host: 'https://translate.google.com',
          });
          await fs.writeFile(audioPath, base64, 'base64');
        } catch (err) {
          console.error(`  - ❌ Failed to generate audio for "${item.jp}":`, err.message);
        }
      }
    }
  }

  console.log('\n✅ Audio generation complete!');
}

generate().catch(err => {
  console.error('💥 Fatal error:', err);
  process.exit(1);
});
