const fs = require('fs');
let text = fs.readFileSync('data/conjugation.js', 'utf8');

const irregulars = {
    'いらっしゃいます': {nai: 'いらっしゃらない', dict: 'いらっしゃる'},
    'おっしゃいます': {nai: 'おっしゃらない', dict: 'おっしゃる'},
    'なさいます': {nai: 'なさらない', dict: 'なさる'},
    'くださいます': {nai: 'くださらない', dict: 'くださる'}
};

for (const [masu, forms] of Object.entries(irregulars)) {
    const regex = new RegExp(`masu: '${masu}'.*?}`);
    let match = text.match(regex);
    if (match) {
        let replacement = match[0].slice(0, -1) + `, irregular_nai: '${forms.nai}', irregular_dict: '${forms.dict}' }`;
        text = text.replace(match[0], replacement);
    }
}

fs.writeFileSync('data/conjugation.js', text, 'utf8');
console.log('Fixed data/conjugation.js');
