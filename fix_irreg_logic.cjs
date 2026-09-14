const fs = require('fs');
let text = fs.readFileSync('data/conjugation.js', 'utf8');

const injection = `
  // Check for irregular nai/dict (Keigo)
  if (formId === 'nai' && verb.irregular_nai) {
    const finalAnswer = verb.irregular_nai;
    steps.push({
      id: 'remove_masu', instruction: 'Bỏ đuôi 「ます」', before: verb.masu, removed: 'ます', after: stem, type: 'info'
    });
    steps.push({
      id: 'irregular_transform', instruction: \`Ngoại lệ (kính ngữ): \${verb.masu} → \${finalAnswer}\`, before: stem, after: finalAnswer, type: 'info', explain: \`「\${verb.masu}」 là ngoại lệ. Thể nai là 「\${finalAnswer}」.\`
    });
    return { steps, finalAnswer, verb, formId, group: 1 };
  }
  if (formId === 'dict' && verb.irregular_dict) {
    const finalAnswer = verb.irregular_dict;
    steps.push({
      id: 'remove_masu', instruction: 'Bỏ đuôi 「ます」', before: verb.masu, removed: 'ます', after: stem, type: 'info'
    });
    steps.push({
      id: 'irregular_transform', instruction: \`Ngoại lệ (kính ngữ): \${verb.masu} → \${finalAnswer}\`, before: stem, after: finalAnswer, type: 'info', explain: \`「\${verb.masu}」 là ngoại lệ. Thể từ điển là 「\${finalAnswer}」.\`
    });
    return { steps, finalAnswer, verb, formId, group: 1 };
  }
`;

text = text.replace('// --- Nai and Dict forms ---', injection + '\n  // --- Nai and Dict forms ---');
fs.writeFileSync('data/conjugation.js', text, 'utf8');
console.log('Injected irregular_nai/dict logic.');
