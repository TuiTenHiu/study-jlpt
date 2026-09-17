const fs = require('fs');
let js = fs.readFileSync('data/conjugation.js', 'utf8');

const iToEKanaCode = `
const iToEKana = {
  'い': 'え',
  'き': 'け', 'ぎ': 'げ',
  'し': 'せ',
  'ち': 'て',
  'に': 'ね',
  'ひ': 'へ', 'び': 'べ', 'ぴ': 'ぺ',
  'み': 'め',
  'り': 'れ'
};
`;

if (!js.includes('const iToEKana = {')) {
    js = js.replace('const iToUKana = {', iToEKanaCode + '\nconst iToUKana = {');
    fs.writeFileSync('data/conjugation.js', js, 'utf8');
    console.log('Added iToEKana');
} else {
    console.log('iToEKana already exists');
}
