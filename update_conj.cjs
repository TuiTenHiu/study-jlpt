const fs = require('fs');

let js = fs.readFileSync('data/conjugation.js', 'utf8');

// 1. Add iToEKana
if (!js.includes('const iToEKana')) {
    const iToUKanaRegex = /const iToUKana = {[\s\S]*?};\n/;
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
    js = js.replace(iToUKanaRegex, match => match + iToEKanaCode);
}

// 2. Add potential to targetForms
if (!js.includes("{ id: 'potential'")) {
    js = js.replace(
        "{ id: 'dict', label: 'Thể từ điển' }",
        "{ id: 'dict', label: 'Thể từ điển' },\n  { id: 'potential', label: 'Thể khả năng' }"
    );
}

// 3. Group 3 kuru
if (js.includes("else if (formId === 'dict') finalAnswer = 'くる';")) {
    js = js.replace(
        "else if (formId === 'dict') finalAnswer = 'くる';",
        "else if (formId === 'dict') finalAnswer = 'くる';\n      else if (formId === 'potential') finalAnswer = 'こられる';"
    );
}

// 4. Group 3 suru
if (js.includes("else if (formId === 'dict') suffix = 'する';")) {
    js = js.replace(
        "else if (formId === 'dict') suffix = 'する';",
        "else if (formId === 'dict') suffix = 'する';\n      else if (formId === 'potential') suffix = 'できる';"
    );
}

// 5. Group 2 suffix
if (js.includes("const suffix = formId === 'te' ? 'て' : (formId === 'ta' ? 'た' : (formId === 'nai' ? 'ない' : 'る'));")) {
    js = js.replace(
        "const suffix = formId === 'te' ? 'て' : (formId === 'ta' ? 'た' : (formId === 'nai' ? 'ない' : 'る'));",
        "const suffix = formId === 'te' ? 'て' : (formId === 'ta' ? 'た' : (formId === 'nai' ? 'ない' : (formId === 'dict' ? 'る' : 'られる')));"
    );
} else if (js.includes("const suffix = formId === 'te' ? 'て' : (formId === 'ta' ? 'た' : (formId === 'nai' ? 'ない' : (formId === 'dict' ? 'る' : 'られる')));")) {
    // Already updated
} else if (js.match(/const suffix = formId === 'te'.*?'る'\)\);/)) {
    // It might be slightly different. Let's use regex
    js = js.replace(/const suffix = formId === 'te'.*?'る'\)\)?;/g, "const suffix = formId === 'te' ? 'て' : (formId === 'ta' ? 'た' : (formId === 'nai' ? 'ない' : (formId === 'dict' ? 'る' : 'られる')));");
}

// 6. Group 1 potential form logic
if (!js.includes("if (formId === 'potential') {")) {
    const group1Target = "// --- Nai and Dict forms ---";
    const group1PotentialCode = `
  // --- Potential form ---
  if (formId === 'potential') {
    const targetKana = iToEKana[tailKana];
    const suffix = 'る';
    const finalAnswer = stemWithoutTail + targetKana + suffix;
    const ruleLabel = \`\${tailKana} → \${targetKana}\`;
    
    steps.push({
      id: 'remove_masu', instruction: 'Bỏ đuôi 「ます」', before: verb.masu, removed: 'ます', after: stem, type: 'info'
    });
    steps.push({
      id: 'choose_rule',
      instruction: \`Biến đổi âm 「\${tailKana}」 (cột i)\`,
      question: \`Nhóm 1: Chuyển âm cuối từ cột i sang cột e rồi thêm "る":\`,
      before: stem,
      correctAnswer: ruleLabel,
      correctTransform: targetKana + suffix,
      after: finalAnswer,
      type: 'choose_rule',
      options: generateKanaOptions(tailKana, formId),
      explain: \`Nhóm 1: Đổi âm cột i thành cột e rồi thêm "る".\`
    });
    return { steps, finalAnswer, verb, formId, group: 1 };
  }
`;
    js = js.replace(group1Target, group1PotentialCode + '\n  ' + group1Target);
}

// 7. Update generateKanaOptions
if (!js.includes("else if (formId === 'potential')")) {
    js = js.replace(
        "const targetKana = formId === 'nai' ? iToAKana[tailKana] : iToUKana[tailKana];",
        "const targetKana = formId === 'nai' ? iToAKana[tailKana] : (formId === 'dict' ? iToUKana[tailKana] : iToEKana[tailKana]);"
    );
    js = js.replace(
        "const pool = formId === 'nai' ? Object.values(iToAKana) : Object.values(iToUKana);",
        "const pool = formId === 'nai' ? Object.values(iToAKana) : (formId === 'dict' ? Object.values(iToUKana) : Object.values(iToEKana));"
    );
}

fs.writeFileSync('data/conjugation.js', js, 'utf8');
console.log('Successfully updated data/conjugation.js');
