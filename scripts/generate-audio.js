import fs from 'fs/promises';
import path from 'path';
import * as tts from 'google-tts-api';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const VOCAB_DIR = path.join(ROOT_DIR, 'data', 'vocab');
const AUDIO_DIR = path.join(ROOT_DIR, 'audio');

async function generate() {
  console.log('🚀 Starting high-quality audio generation...');
  
  // Ensure audio directory exists
  await fs.mkdir(AUDIO_DIR, { recursive: true });

  const files = await fs.readdir(VOCAB_DIR);
  const lessonFiles = files.filter(f => f.startsWith('lesson') && f.endsWith('.js')).sort();

  for (const file of lessonFiles) {
    const filePath = path.join(VOCAB_DIR, file);
    const fileUrl = new URL(`file://${path.resolve(filePath)}`).href;
    
    console.log(`\n📂 Processing ${file}...`);

    // Dynamic import to read current data
    const { vocab } = await import(fileUrl);
    const updatedVocab = [];

    for (const item of vocab) {
      // Create a clean filename from romaji
      const safeRomaji = item.romaji.toLowerCase().replace(/[^a-z0-9]/g, '_');
      const fileName = `${safeRomaji}.mp3`;
      const audioPath = path.join(AUDIO_DIR, fileName);

      // Add audio field to item
      item.audio = fileName;

      try {
        // Check if file already exists
        await fs.access(audioPath);
        console.log(`  - ⏭️  Skipping "${item.jp}" (file exists: ${fileName})`);
      } catch (e) {
        // Generate audio if missing
        console.log(`  - 🎙️  Generating audio for "${item.jp}"...`);
        try {
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
      updatedVocab.push(item);
    }

    // Write back the updated data to the .js file
    const content = `export const vocab = ${JSON.stringify(updatedVocab, null, 2)};\n`;
    await fs.writeFile(filePath, content, 'utf8');
    console.log(`✨ Updated data file: ${file}`);
  }

  console.log('\n✅ Audio generation and data update complete!');
}

generate().catch(err => {
  console.error('💥 Fatal error:', err);
  process.exit(1);
});
