const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const additionalCss = `
@media (max-width: 480px) {
  .cl-table-filters .pq-toggle-btn {
    flex: 1 1 calc(50% - 10px);
    text-align: center;
    padding: 10px 5px;
    font-size: 0.85rem;
  }
}
`;

if (!css.includes('.cl-table-filters .pq-toggle-btn')) {
    fs.writeFileSync('style.css', css + additionalCss, 'utf8');
    console.log('Added additional mobile tweaks');
}
