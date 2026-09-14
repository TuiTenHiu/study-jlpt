const fs = require('fs');
let content = fs.readFileSync('main.js', 'utf8');

// Replace the garbled strings
content = content.replace(/\? 'BAi '/g, "? 'Bài '");
content = content.replace(/>NhA3m '/g, ">Nhóm '");
content = content.replace(/KhA'ng tAm thy kt qu phA1 hp./g, "Không tìm thấy kết quả phù hợp.");

fs.writeFileSync('main.js', content, 'utf8');
