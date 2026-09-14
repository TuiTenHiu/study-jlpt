const fs = require('fs');
let content = fs.readFileSync('main.js', 'utf8');

const jsCode = `
// ── CONJUGATION TABLE ────────────────────────────────────────────────────────
window.clCurrentGroupFilter = 'all';
window.clCurrentLevelFilter = 'all';
window.clCurrentSearch = '';

window.switchClTab = function(tab) {
  document.getElementById('cl-tab-lookup').classList.toggle('active', tab === 'lookup');
  document.getElementById('cl-tab-table').classList.toggle('active', tab === 'table');
  document.getElementById('cl-lookup-view').hidden = (tab !== 'lookup');
  document.getElementById('cl-table-view').hidden = (tab !== 'table');

  if (tab === 'table') {
    renderClTable();
  }
};

window.filterClTable = function(group) {
  window.clCurrentGroupFilter = group;
  document.getElementById('cl-filter-all').classList.toggle('active', group === 'all');
  document.getElementById('cl-filter-g1').classList.toggle('active', group === 1);
  document.getElementById('cl-filter-g2').classList.toggle('active', group === 2);
  document.getElementById('cl-filter-g3').classList.toggle('active', group === 3);
  renderClTable();
};

window.filterClTableByLevel = function() {
  window.clCurrentLevelFilter = document.getElementById('cl-level-filter').value;
  renderClTable();
};

window.searchClTable = function() {
  window.clCurrentSearch = document.getElementById('cl-table-search').value.toLowerCase().trim();
  renderClTable();
};

window.renderClTable = function() {
  const tbody = document.getElementById('cl-table-body');
  if (!tbody) return;

  // Filter verbs
  let verbs = allVerbs;

  if (window.clCurrentGroupFilter !== 'all') {
    verbs = verbs.filter(v => v.group === window.clCurrentGroupFilter);
  }

  if (window.clCurrentLevelFilter === 'n5') {
    verbs = verbs.filter(v => (v.lesson || 0) <= 25);
  } else if (window.clCurrentLevelFilter === 'n4') {
    verbs = verbs.filter(v => (v.lesson || 0) > 25);
  }

  if (window.clCurrentSearch) {
    verbs = verbs.filter(v => 
      v.masu.toLowerCase().includes(window.clCurrentSearch) || 
      v.vi.toLowerCase().includes(window.clCurrentSearch)
    );
  }

  // Render rows
  let html = '';
  verbs.forEach(v => {
    // Generate conjugations
    const te = generateSteps(v, 'te').finalAnswer;
    const ta = generateSteps(v, 'ta').finalAnswer;
    const nai = generateSteps(v, 'nai').finalAnswer;
    const dict = generateSteps(v, 'dict').finalAnswer;

    html += '<tr style="border-bottom: 1px solid var(--border);">';
    html += '<td style="padding: 12px;">' + (v.lesson ? 'Bài ' + v.lesson : '-') + '</td>';
    html += '<td style="padding: 12px; font-weight: 500;">' + v.masu + '</td>';
    html += '<td style="padding: 12px; color: var(--text-2);">' + v.vi + '</td>';
    html += '<td style="padding: 12px;"><span class="cl-group-badge cl-group-' + v.group + '">Nhóm ' + v.group + '</span></td>';
    html += '<td style="padding: 12px; color: var(--primary); font-weight: 500;">' + te + '</td>';
    html += '<td style="padding: 12px; color: var(--primary); font-weight: 500;">' + ta + '</td>';
    html += '<td style="padding: 12px; color: var(--primary); font-weight: 500;">' + nai + '</td>';
    html += '<td style="padding: 12px; color: var(--primary); font-weight: 500;">' + dict + '</td>';
    html += '</tr>';
  });

  if (verbs.length === 0) {
    html = '<tr><td colspan="8" style="padding: 20px; text-align: center; color: var(--text-2);">Không tìm thấy kết quả phù hợp.</td></tr>';
  }

  tbody.innerHTML = html;
};
`;

content += '\n' + jsCode;
fs.writeFileSync('main.js', content, 'utf8');
console.log('Added table logic to main.js');
