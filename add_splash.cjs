const fs = require('fs');

// 1. Update HTML
let html = fs.readFileSync('index.html', 'utf8');
const splashHTML = `
  <!-- SPLASH SCREEN -->
  <div id="splash-screen">
    <div class="splash-logo">
      <img src="icon.svg" alt="Study JLPT Logo">
    </div>
  </div>
`;

if (!html.includes('id="splash-screen"')) {
    html = html.replace('<body>', '<body>\n' + splashHTML);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Added splash screen to HTML.');
}

// 2. Update CSS
let css = fs.readFileSync('style.css', 'utf8');
const splashCSS = `
/* ── SPLASH SCREEN ── */
#splash-screen {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: var(--bg-body);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  transition: opacity 0.6s ease-out, visibility 0.6s ease-out;
}
#splash-screen.hidden {
  opacity: 0;
  visibility: hidden;
}
.splash-logo {
  width: 120px;
  height: 120px;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
  animation: pulseLogo 1s infinite alternate ease-in-out;
}
.splash-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@keyframes pulseLogo {
  0% { transform: scale(0.95); box-shadow: 0 10px 25px rgba(124, 58, 237, 0.2); }
  100% { transform: scale(1.08); box-shadow: 0 15px 35px rgba(124, 58, 237, 0.5); }
}
`;

if (!css.includes('#splash-screen')) {
    fs.writeFileSync('style.css', css + '\n' + splashCSS, 'utf8');
    console.log('Added splash screen to CSS.');
}

// 3. Update JS
let js = fs.readFileSync('main.js', 'utf8');
const splashJS = `
// Hide splash screen after a short delay
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if (splash) splash.classList.add('hidden');
  }, 1200); // 1.2s delay for animation to be seen
});
`;

if (!js.includes('splash.classList.add(\'hidden\')')) {
    fs.writeFileSync('main.js', js + '\n' + splashJS, 'utf8');
    console.log('Added splash screen logic to JS.');
}

