const fs = require('fs');
let js = fs.readFileSync('data/conjugation.js', 'utf8');

if (!js.includes("id: 'potential'")) {
    js = js.replace(
        "{ id: 'dict', label: 'Thể từ điển', labelJp: '辞書形' },",
        "{ id: 'dict', label: 'Thể từ điển', labelJp: '辞書形' },\n  { id: 'potential', label: 'Thể khả năng', labelJp: '可能形' },"
    );
    // Try without comma if last item
    js = js.replace(
        "{ id: 'dict', label: 'Thể từ điển', labelJp: '辞書形' }",
        "{ id: 'dict', label: 'Thể từ điển', labelJp: '辞書形' },\n  { id: 'potential', label: 'Thể khả năng', labelJp: '可能形' }"
    );
    fs.writeFileSync('data/conjugation.js', js, 'utf8');
}
console.log('Fixed targetForms');
