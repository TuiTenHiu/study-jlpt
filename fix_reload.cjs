const fs = require('fs');
let js = fs.readFileSync('main.js', 'utf8');

if (!js.includes("localStorage.setItem('studyJlptMode', mode)")) {
    js = js.replace('function switchMode(mode) {\n  activeMode = mode;', "function switchMode(mode) {\n  activeMode = mode;\n  localStorage.setItem('studyJlptMode', mode);");
    
    const initScript = `
// Restore mode on load
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('studyJlptMode');
  if (savedMode) {
    switchMode(savedMode);
  }
});
`;
    js += '\n' + initScript;
    fs.writeFileSync('main.js', js, 'utf8');
    console.log('Added logic to remember the mode.');
}
