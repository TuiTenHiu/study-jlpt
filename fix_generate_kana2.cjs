const fs = require('fs');
let js = fs.readFileSync('data/conjugation.js', 'utf8');

const regex = /function generateKanaOptions\(tailKana, formId\) \{[\s\S]*?return shuffleArray\(options\);\s*\}/;
const newFunc = `function generateKanaOptions(tailKana, formId) {
  let targetKana;
  let pool;
  if (formId === 'nai') {
    targetKana = iToAKana[tailKana];
    pool = Object.values(iToAKana);
  } else if (formId === 'dict') {
    targetKana = iToUKana[tailKana];
    pool = Object.values(iToUKana);
  } else if (formId === 'potential') {
    targetKana = iToEKana[tailKana];
    pool = Object.values(iToEKana);
  } else {
    targetKana = iToUKana[tailKana]; // fallback
    pool = Object.values(iToUKana);
  }

  const correctLabel = \`\${tailKana} → \${targetKana}\`;
  const options = [correctLabel];
  
  // Pick 3 random wrong target kanas from the same category
  const wrongPool = pool.filter(k => k !== targetKana);
  const shuffledWrong = shuffleArray(wrongPool);
  
  for (let i = 0; i < 3; i++) {
      options.push(\`\${tailKana} → \${shuffledWrong[i]}\`);
  }
  
  return shuffleArray(options);
}`;

if (regex.test(js)) {
    js = js.replace(regex, newFunc);
    fs.writeFileSync('data/conjugation.js', js, 'utf8');
    console.log('Fixed generateKanaOptions!');
} else {
    console.log('Regex did NOT match');
}
