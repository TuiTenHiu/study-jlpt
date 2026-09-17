const fs = require('fs');
let js = fs.readFileSync('data/conjugation.js', 'utf8');

const regex = /function generateKanaOptions\(tailKana, formId\) \{[\s\S]*?return shuffleArray\(options\);\n\}/;

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
  
  options.push(\`\${tailKana} → \${shuffledWrong[0]}\`);
  options.push(\`\${tailKana} → \${shuffledWrong[1]}\`);
  options.push(\`\${tailKana} → \${shuffledWrong[2]}\`);
  
  return shuffleArray(options);
}`;

js = js.replace(regex, newFunc);
fs.writeFileSync('data/conjugation.js', js, 'utf8');
console.log('Fixed generateKanaOptions');
