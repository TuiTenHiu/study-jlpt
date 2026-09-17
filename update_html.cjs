const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Add button to cl-form-bar
if (!html.includes('cl-form-potential')) {
    html = html.replace(
        '<button id="cl-form-dict" class="cl-form-btn" onclick="setConjugationForm(\'dict\')">辞書形 Thể từ điển</button>',
        '<button id="cl-form-dict" class="cl-form-btn" onclick="setConjugationForm(\'dict\')">辞書形 Thể từ điển</button>\n          <button id="cl-form-potential" class="cl-form-btn" onclick="setConjugationForm(\'potential\')">可能形 Khả năng</button>'
    );
}

// Add th to table
if (!html.includes('>Khả năng</th>')) {
    html = html.replace(
        '<th style="padding: 12px; font-weight: 600; white-space: nowrap; color: var(--primary);">辞書</th>',
        '<th style="padding: 12px; font-weight: 600; white-space: nowrap; color: var(--primary);">辞書</th>\n                <th style="padding: 12px; font-weight: 600; white-space: nowrap; color: var(--primary);">Khả năng</th>'
    );
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Updated index.html');
