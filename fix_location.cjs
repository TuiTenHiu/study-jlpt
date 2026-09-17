const fs = require('fs');
let js = fs.readFileSync('data/conjugation.js', 'utf8');

const badBlock = `const iToEKana = {
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

js = js.replace(badBlock, '');
js = js.replace(badBlock, ''); // Just in case it's there twice

js = js.replace('const iToUKana = {', badBlock + '\nconst iToUKana = {');

fs.writeFileSync('data/conjugation.js', js, 'utf8');
console.log('Fixed iToEKana location');
