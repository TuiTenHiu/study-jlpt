const fs = require('fs');
let content = fs.readFileSync('main.js', 'utf8');
content = content.replace("import { allVerbs } from './data/conjugation.js';", "import { allVerbs, generateSteps } from './data/conjugation.js';");
fs.writeFileSync('main.js', content, 'utf8');
console.log('Fixed imports in main.js');
