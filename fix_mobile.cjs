const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The block to replace
const oldToolbar = `<div style="display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; justify-content: space-between; align-items: center;">
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button class="pq-toggle-btn active" id="cl-filter-all" onclick="filterClTable('all')">Tất cả</button>
            <button class="pq-toggle-btn" id="cl-filter-g1" onclick="filterClTable(1)">Nhóm 1</button>
            <button class="pq-toggle-btn" id="cl-filter-g2" onclick="filterClTable(2)">Nhóm 2</button>
            <button class="pq-toggle-btn" id="cl-filter-g3" onclick="filterClTable(3)">Nhóm 3</button>
          </div>
          <div>
            <select id="cl-level-filter" onchange="filterClTableByLevel()" style="padding: 8px; border-radius: 6px; border: 1px solid var(--border); font-family: inherit;">
              <option value="all">Tất cả trình độ (N5+N4)</option>
              <option value="n5">Chỉ N5 (Bài 4-25)</option>
              <option value="n4">Chỉ N4 (Bài 26-50)</option>
            </select>
          </div>
          <div style="flex-grow: 1; max-width: 300px;">
            <input type="text" id="cl-table-search" placeholder="🔍 Tìm kiếm động từ..." oninput="searchClTable()" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid var(--border);">
          </div>
        </div>`;

const newToolbar = `<div class="cl-table-toolbar">
          <div class="cl-table-filters">
            <button class="pq-toggle-btn active" id="cl-filter-all" onclick="filterClTable('all')">Tất cả</button>
            <button class="pq-toggle-btn" id="cl-filter-g1" onclick="filterClTable(1)">Nhóm 1</button>
            <button class="pq-toggle-btn" id="cl-filter-g2" onclick="filterClTable(2)">Nhóm 2</button>
            <button class="pq-toggle-btn" id="cl-filter-g3" onclick="filterClTable(3)">Nhóm 3</button>
          </div>
          <div class="cl-table-controls">
            <select id="cl-level-filter" class="cl-level-select" onchange="filterClTableByLevel()">
              <option value="all">Tất cả trình độ (N5+N4)</option>
              <option value="n5">Chỉ N5 (Bài 4-25)</option>
              <option value="n4">Chỉ N4 (Bài 26-50)</option>
            </select>
            <input type="text" id="cl-table-search" class="cl-search-input" placeholder="🔍 Tìm kiếm động từ..." oninput="searchClTable()">
          </div>
        </div>`;

if (html.includes(oldToolbar)) {
    html = html.replace(oldToolbar, newToolbar);
    
    // Also remove inline styles for the tabs container
    const oldTabs = `<div class="cl-tabs" style="display: flex; gap: 10px; padding: 15px 20px; border-bottom: 1px solid var(--border); justify-content: center;">`;
    const newTabs = `<div class="cl-tabs">`;
    html = html.replace(oldTabs, newTabs);

    fs.writeFileSync('index.html', html, 'utf8');
    console.log('index.html updated successfully');
} else {
    console.log('oldToolbar not found in index.html');
}

let css = fs.readFileSync('style.css', 'utf8');
const newCss = `
/* Conjugation Table Mobile Fixes */
.cl-tabs {
  display: flex;
  gap: 10px;
  padding: 15px 20px;
  border-bottom: 1px solid var(--border);
  justify-content: center;
}
@media (max-width: 480px) {
  .cl-tabs {
    flex-wrap: wrap;
    padding: 12px 10px;
  }
  .cl-tabs .pq-toggle-btn {
    flex: 1;
    text-align: center;
    padding: 10px;
    font-size: 0.9rem;
  }
}

.cl-table-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
}
.cl-table-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.cl-table-controls {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
}
.cl-level-select {
  padding: 8px 12px;
  border-radius: 8px;
  border: 2px solid var(--border);
  font-family: inherit;
  font-size: 0.95rem;
  background: var(--bg-card);
  color: var(--text-1);
}
.cl-search-input {
  padding: 8px 12px;
  border-radius: 8px;
  border: 2px solid var(--border);
  font-family: inherit;
  font-size: 0.95rem;
  width: 100%;
  max-width: 300px;
}

@media (max-width: 768px) {
  .cl-table-toolbar {
    flex-direction: column;
    align-items: stretch;
  }
  .cl-table-controls {
    flex-direction: column;
    align-items: stretch;
  }
  .cl-search-input {
    max-width: 100%;
  }
  .cl-table-filters {
    justify-content: center;
  }
}
`;

if (!css.includes('.cl-table-toolbar')) {
    fs.writeFileSync('style.css', css + newCss, 'utf8');
    console.log('style.css updated successfully');
}
