const { allVerbs, generateSteps } = require('./data/conjugation.js');
const v1 = allVerbs.find(v => v.masu === 'かきます');
const v2 = allVerbs.find(v => v.masu === 'たべます');
const v3 = allVerbs.find(v => v.masu === 'きます');
const v4 = allVerbs.find(v => v.masu === 'べんきょうします');

console.log('かきます ->', generateSteps(v1, 'potential').finalAnswer);
console.log('たべます ->', generateSteps(v2, 'potential').finalAnswer);
console.log('きます ->', generateSteps(v3, 'potential').finalAnswer);
console.log('べんきょうします ->', generateSteps(v4, 'potential').finalAnswer);
