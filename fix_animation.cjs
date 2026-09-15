const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace('.panel {\n  opacity: 0;\n  animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;\n}', 'main > div:not(.mode-bar) {\n  opacity: 0;\n  animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;\n}');

fs.writeFileSync('style.css', css, 'utf8');
console.log('Fixed animation targeting');
