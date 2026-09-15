const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const decoAnim = `
@keyframes decoPulse {
  0% { transform: scale(1); opacity: 0.05; }
  50% { transform: scale(1.05); opacity: 0.15; }
  100% { transform: scale(1); opacity: 0.07; }
}

.jp-deco {
  animation: decoPulse 3s infinite ease-in-out;
}
`;

if (!css.includes('decoPulse')) {
    css += '\n' + decoAnim;
    fs.writeFileSync('style.css', css, 'utf8');
    console.log('Added animation to jp-deco');
}
