const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const additionalCss = `
.cl-table td {
  white-space: nowrap;
}
`;

fs.writeFileSync('style.css', css + additionalCss, 'utf8');
console.log('Added white-space: nowrap to table cells');
