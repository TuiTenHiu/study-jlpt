const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace(/#cl-table-view\s*\{\s*max-width:\s*1200px;\s*margin:\s*0\s+auto;\s*\}/, '#cl-table-view {\n  max-width: 100%;\n  margin: 0 auto;\n}');

fs.writeFileSync('style.css', css, 'utf8');
console.log('Set cl-table-view to 100%');
