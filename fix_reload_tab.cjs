const fs = require('fs');
let js = fs.readFileSync('main.js', 'utf8');

if (!js.includes("localStorage.setItem('studyJlptClTab', tab)")) {
    js = js.replace('window.switchClTab = function(tab) {', "window.switchClTab = function(tab) {\n  localStorage.setItem('studyJlptClTab', tab);");
    
    js = js.replace('const savedMode = localStorage.getItem(\'studyJlptMode\');\n  if (savedMode) {\n    switchMode(savedMode);\n  }', `const savedMode = localStorage.getItem('studyJlptMode');
  if (savedMode) {
    switchMode(savedMode);
  }
  const savedClTab = localStorage.getItem('studyJlptClTab');
  if (savedClTab) {
    window.switchClTab(savedClTab);
  }`);

    fs.writeFileSync('main.js', js, 'utf8');
    console.log('Added logic to remember conjugation tab.');
}
