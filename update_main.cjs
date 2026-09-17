const fs = require('fs');
let js = fs.readFileSync('main.js', 'utf8');

// 1. setConjugationForm
if (!js.includes("document.getElementById('cl-form-potential')")) {
    js = js.replace(
        "document.getElementById('cl-form-dict').classList.toggle('active', formId === 'dict');",
        "document.getElementById('cl-form-dict').classList.toggle('active', formId === 'dict');\n  const potBtn = document.getElementById('cl-form-potential');\n  if(potBtn) potBtn.classList.toggle('active', formId === 'potential');"
    );
}

// 2. renderClTable
if (!js.includes("const potential = generateSteps(v, 'potential').finalAnswer;")) {
    js = js.replace(
        "const dict = generateSteps(v, 'dict').finalAnswer;",
        "const dict = generateSteps(v, 'dict').finalAnswer;\n    const potential = generateSteps(v, 'potential').finalAnswer;"
    );
    
    js = js.replace(
        "html += '<td style=\"padding: 12px; color: var(--primary); font-weight: 500;\">' + dict + '</td>';",
        "html += '<td style=\"padding: 12px; color: var(--primary); font-weight: 500;\">' + dict + '</td>';\n    html += '<td style=\"padding: 12px; color: var(--primary); font-weight: 500;\">' + potential + '</td>';"
    );

    js = js.replace(
        "html = '<tr><td colspan=\"8\"",
        "html = '<tr><td colspan=\"9\""
    );
}

fs.writeFileSync('main.js', js, 'utf8');
console.log('Updated main.js');
