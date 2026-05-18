const fs = require('fs');
const path = require('path');

// Mocking export const vocabData to read it as a regular JS object
const vocabFileContent = fs.readFileSync('data/vocab.js', 'utf8');
const vocabDataMatch = vocabFileContent.match(/export const vocabData = ({[\s\S]*});/);

if (!vocabDataMatch) {
    console.error('Could not find vocabData in data/vocab.js');
    process.exit(1);
}

// Evaluate the object (careful with this, but since it's our own code it's okay)
// We need to strip 'export' to make it valid JS for eval or just parse it if it's pure JSON-like
let vocabData;
try {
    const dataStr = vocabDataMatch[1];
    // Convert to valid JSON if possible, or use eval-like approach
    // The file looks like a JS object, not strict JSON (e.g. keys might not be quoted, but they are here)
    vocabData = eval('(' + dataStr + ')');
} catch (e) {
    console.error('Error parsing vocabData:', e);
    process.exit(1);
}

const audioDir = 'audio';
const audioFiles = new Set(fs.readdirSync(audioDir));

const missingAudio = [];
const emptyAudio = [];

for (const lesson in vocabData) {
    vocabData[lesson].forEach((item, index) => {
        if (!item.audio || item.audio.trim() === '') {
            emptyAudio.push({ lesson, index, item });
        } else if (!audioFiles.has(item.audio)) {
            missingAudio.push({ lesson, index, item });
        }
    });
}

console.log('--- Empty Audio ---');
console.log(JSON.stringify(emptyAudio, null, 2));
console.log('\n--- Missing Audio Files ---');
console.log(JSON.stringify(missingAudio, null, 2));
