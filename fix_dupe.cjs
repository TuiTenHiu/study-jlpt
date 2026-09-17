const fs = require('fs');

let js = fs.readFileSync('data/conjugation.js', 'utf8');
js = js.replace("  { id: 'potential', label: 'Thể khả năng', labelJp: '可能形' },\n  { id: 'potential', label: 'Thể khả năng', labelJp: '可能形' }", "  { id: 'potential', label: 'Thể khả năng', labelJp: '可能形' }");
fs.writeFileSync('data/conjugation.js', js, 'utf8');

let testCode = fs.readFileSync('tests/conjugationLab.test.js', 'utf8');
testCode = testCode.replace("expect(ids).toHaveLength(4);", "expect(ids).toHaveLength(5);");
testCode = testCode.replace("cấu hình 4 thể > Phải có đúng 4 thể", "cấu hình > Phải có 5 thể");
fs.writeFileSync('tests/conjugationLab.test.js', testCode, 'utf8');

console.log('Fixed duplicate and updated tests');
