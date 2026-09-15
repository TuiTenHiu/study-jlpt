const fs = require('fs');

// 1. HTML
let html = fs.readFileSync('index.html', 'utf8');
const splashHTML = `
  <!-- SPLASH SCREEN -->
  <div id="splash-screen">
    <div class="splash-logo">
      <img src="icon.svg" alt="Study JLPT Logo">
    </div>
  </div>
`;
html = html.replace(splashHTML, '');
fs.writeFileSync('index.html', html, 'utf8');

// 2. JS
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
js = js.replace(splashJS, '');
fs.writeFileSync('main.js', js, 'utf8');

// 3. CSS
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
css = css.replace(splashCSS, '');

// Add new entrance animations
const entranceCSS = `
/* ── APP ENTRANCE ANIMATIONS ── */
@keyframes slideDownFade {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideUpFade {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes scaleInFade {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

header {
  animation: slideDownFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.mode-bar {
  opacity: 0;
  animation: scaleInFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}
.panel {
  opacity: 0;
  animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}
`;
if (!css.includes('APP ENTRANCE ANIMATIONS')) {
  css += '\n' + entranceCSS;
}
fs.writeFileSync('style.css', css, 'utf8');

console.log('Removed splash screen, added entrance animations.');
