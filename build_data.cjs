const fs = require('fs');
let content = fs.readFileSync('data/conjugation.js', 'utf8');

// 1. Add lessons to existing N5
let current_lesson = 0;
let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    let m = lines[i].match(/\/\/ ── Bài (\d+) ──/);
    if (m) current_lesson = parseInt(m[1]);
    
    if (lines[i].includes('{ masu:')) {
        lines[i] = lines[i].replace('{ masu:', '{ lesson: ' + current_lesson + ', masu:');
    }
}
content = lines.join('\n');

// 2. Add N4 verbs
const n4_verbs = `
  // ── Bài 26 ──
  { lesson: 26, masu: 'みます', group: 2, vi: 'xem, khám bệnh' },
  { lesson: 26, masu: 'さがします', group: 1, vi: 'tìm kiếm' },
  { lesson: 26, masu: 'おくれます', group: 2, vi: 'chậm trễ' },
  { lesson: 26, masu: 'まにあいます', group: 1, vi: 'kịp' },
  { lesson: 26, masu: 'やります', group: 1, vi: 'làm' },
  { lesson: 26, masu: 'ひろいます', group: 1, vi: 'nhặt' },
  { lesson: 26, masu: 'れんらくします', group: 3, vi: 'liên lạc' },

  // ── Bài 27 ──
  { lesson: 27, masu: 'かいます', group: 1, vi: 'nuôi' },
  { lesson: 27, masu: 'たてます', group: 2, vi: 'xây dựng' },
  { lesson: 27, masu: 'はしります', group: 1, vi: 'chạy' },
  { lesson: 27, masu: 'とります', group: 1, vi: 'xin (nghỉ)' },
  { lesson: 27, masu: 'みえます', group: 2, vi: 'nhìn thấy' },
  { lesson: 27, masu: 'きこえます', group: 2, vi: 'nghe thấy' },
  { lesson: 27, masu: 'できます', group: 2, vi: 'được xây dựng lên, hoàn thành' },
  { lesson: 27, masu: 'ひらきます', group: 1, vi: 'mở (lớp)' },

  // ── Bài 28 ──
  { lesson: 28, masu: 'うれます', group: 2, vi: 'bán chạy' },
  { lesson: 28, masu: 'おどります', group: 1, vi: 'múa' },
  { lesson: 28, masu: 'かみます', group: 1, vi: 'nhai' },
  { lesson: 28, masu: 'えらびます', group: 1, vi: 'chọn' },
  { lesson: 28, masu: 'かよいます', group: 1, vi: 'đi lại' },

  // ── Bài 29 ──
  { lesson: 29, masu: 'あきます', group: 1, vi: 'mở' },
  { lesson: 29, masu: 'しまります', group: 1, vi: 'đóng' },
  { lesson: 29, masu: 'つきます', group: 1, vi: 'sáng' },
  { lesson: 29, masu: 'きえます', group: 2, vi: 'tắt' },
  { lesson: 29, masu: 'こみます', group: 1, vi: 'đông' },
  { lesson: 29, masu: 'すきます', group: 1, vi: 'vắng' },
  { lesson: 29, masu: 'こわれます', group: 2, vi: 'hỏng' },
  { lesson: 29, masu: 'われます', group: 2, vi: 'vỡ' },
  { lesson: 29, masu: 'おれます', group: 2, vi: 'gãy' },
  { lesson: 29, masu: 'やぶれます', group: 2, vi: 'rách' },
  { lesson: 29, masu: 'よごれます', group: 2, vi: 'bẩn' },
  { lesson: 29, masu: 'はずれます', group: 2, vi: 'tuột' },
  { lesson: 29, masu: 'とまります', group: 1, vi: 'dừng' },
  { lesson: 29, masu: 'まちがえます', group: 2, vi: 'nhầm' },
  { lesson: 29, masu: 'おとします', group: 1, vi: 'làm rơi' },
  { lesson: 29, masu: 'かかります', group: 1, vi: 'khóa' },

  // ── Bài 30 ──
  { lesson: 30, masu: 'はります', group: 1, vi: 'dán' },
  { lesson: 30, masu: 'かけます', group: 2, vi: 'treo' },
  { lesson: 30, masu: 'かざります', group: 1, vi: 'trang trí' },
  { lesson: 30, masu: 'ならべます', group: 2, vi: 'xếp hàng' },
  { lesson: 30, masu: 'うえます', group: 2, vi: 'trồng' },
  { lesson: 30, masu: 'もどします', group: 1, vi: 'đưa về' },
  { lesson: 30, masu: 'まとめます', group: 2, vi: 'tóm tắt' },
  { lesson: 30, masu: 'しまいます', group: 1, vi: 'cất' },
  { lesson: 30, masu: 'きめます', group: 2, vi: 'quyết định' },
  { lesson: 30, masu: 'よしゅうします', group: 3, vi: 'chuẩn bị bài' },
  { lesson: 30, masu: 'ふくしゅうします', group: 3, vi: 'ôn bài' },
  { lesson: 30, masu: 'そのままにします', group: 3, vi: 'để nguyên' },

  // ── Bài 31 ──
  { lesson: 31, masu: 'はじまります', group: 1, vi: 'bắt đầu' },
  { lesson: 31, masu: 'つづけます', group: 2, vi: 'tiếp tục' },
  { lesson: 31, masu: 'みつけます', group: 2, vi: 'tìm thấy' },
  { lesson: 31, masu: 'うけます', group: 2, vi: 'thi' },
  { lesson: 31, masu: 'にゅうがくします', group: 3, vi: 'nhập học' },
  { lesson: 31, masu: 'そつぎょうします', group: 3, vi: 'tốt nghiệp' },
  { lesson: 31, masu: 'しゅっせきします', group: 3, vi: 'tham dự' },
  { lesson: 31, masu: 'きゅうけいします', group: 3, vi: 'nghỉ giải lao' },

  // ── Bài 32 ──
  { lesson: 32, masu: 'うんどうします', group: 3, vi: 'vận động' },
  { lesson: 32, masu: 'せいこうします', group: 3, vi: 'thành công' },
  { lesson: 32, masu: 'しっぱいします', group: 3, vi: 'thất bại' },
  { lesson: 32, masu: 'ごうかくします', group: 3, vi: 'đỗ' },
  { lesson: 32, masu: 'やみます', group: 1, vi: 'tạnh' },
  { lesson: 32, masu: 'はれます', group: 2, vi: 'nắng' },
  { lesson: 32, masu: 'くもります', group: 1, vi: 'có mây' },
  { lesson: 32, masu: 'つづきます', group: 1, vi: 'kéo dài' },
  { lesson: 32, masu: 'ひきます', group: 1, vi: 'bị cảm' },

  // ── Bài 33 ──
  { lesson: 33, masu: 'にげます', group: 2, vi: 'chạy trốn' },
  { lesson: 33, masu: 'さわぎます', group: 1, vi: 'làm ồn' },
  { lesson: 33, masu: 'あきらめます', group: 2, vi: 'từ bỏ' },
  { lesson: 33, masu: 'なげます', group: 2, vi: 'ném' },
  { lesson: 33, masu: 'まもります', group: 1, vi: 'bảo vệ' },
  { lesson: 33, masu: 'あげます', group: 2, vi: 'nâng lên' },
  { lesson: 33, masu: 'さげます', group: 2, vi: 'hạ xuống' },
  { lesson: 33, masu: 'つたえます', group: 2, vi: 'truyền đạt' },
  { lesson: 33, masu: 'ちゅういします', group: 3, vi: 'chú ý' },

  // ── Bài 34 ──
  { lesson: 34, masu: 'みがきます', group: 1, vi: 'đánh răng' },
  { lesson: 34, masu: 'くみたてます', group: 2, vi: 'lắp ráp' },
  { lesson: 34, masu: 'おります', group: 1, vi: 'gập' },
  { lesson: 34, masu: 'きがつきます', group: 1, vi: 'nhận ra' },
  { lesson: 34, masu: 'つけます', group: 2, vi: 'chấm' },
  { lesson: 34, masu: 'みつかります', group: 1, vi: 'được tìm thấy' },

  // ── Bài 35 ──
  { lesson: 35, masu: 'さきます', group: 1, vi: 'nở' },
  { lesson: 35, masu: 'かわります', group: 1, vi: 'đổi màu' },
  { lesson: 35, masu: 'こまります', group: 1, vi: 'rắc rối' },
  { lesson: 35, masu: 'なきます', group: 1, vi: 'khóc' },
  { lesson: 35, masu: 'なおります', group: 1, vi: 'khỏi bệnh' },

  // ── Bài 36 ──
  { lesson: 36, masu: 'あいます', group: 1, vi: 'vừa' },
  { lesson: 36, masu: 'あやまります', group: 1, vi: 'xin lỗi' },
  { lesson: 36, masu: 'おくります', group: 1, vi: 'đến muộn' },

  // ── Bài 37 ──
  { lesson: 37, masu: 'ほめます', group: 2, vi: 'khen' },
  { lesson: 37, masu: 'しかります', group: 1, vi: 'mắng' },
  { lesson: 37, masu: 'さそいます', group: 1, vi: 'rủ' },
  { lesson: 37, masu: 'おこします', group: 1, vi: 'đánh thức' },
  { lesson: 37, masu: 'しょうたいします', group: 3, vi: 'mời' },
  { lesson: 37, masu: 'たのみます', group: 1, vi: 'nhờ' },
  { lesson: 37, masu: 'ふみます', group: 1, vi: 'dẫm' },
  { lesson: 37, masu: 'こわします', group: 1, vi: 'phá hỏng' },
  { lesson: 37, masu: 'よごします', group: 1, vi: 'làm bẩn' },
  { lesson: 37, masu: 'おこないます', group: 1, vi: 'thực hiện' },
  { lesson: 37, masu: 'ゆしゅつします', group: 3, vi: 'xuất khẩu' },
  { lesson: 37, masu: 'ゆにゅうします', group: 3, vi: 'nhập khẩu' },
  { lesson: 37, masu: 'ほんやくします', group: 3, vi: 'dịch' },

  // ── Bài 38 ──
  { lesson: 38, masu: 'そだてます', group: 2, vi: 'nuôi dạy' },
  { lesson: 38, masu: 'はこびます', group: 1, vi: 'vận chuyển' },
  { lesson: 38, masu: 'なくなります', group: 1, vi: 'mất, qua đời' },
  { lesson: 38, masu: 'にゅういんします', group: 3, vi: 'nhập viện' },
  { lesson: 38, masu: 'たいいんします', group: 3, vi: 'xuất viện' },
  { lesson: 38, masu: 'いれます', group: 2, vi: 'bật công tắc' },
  { lesson: 38, masu: 'きります', group: 1, vi: 'tắt công tắc' },

  // ── Bài 39 ──
  { lesson: 39, masu: 'こたえます', group: 2, vi: 'trả lời' },
  { lesson: 39, masu: 'たおれます', group: 2, vi: 'đổ' },
  { lesson: 39, masu: 'やけます', group: 2, vi: 'cháy' },
  { lesson: 39, masu: 'とおります', group: 1, vi: 'đi qua' },
  { lesson: 39, masu: 'しにます', group: 1, vi: 'chết' },
  { lesson: 39, masu: 'びっくりします', group: 3, vi: 'giật mình' },
  { lesson: 39, masu: 'がっかりします', group: 3, vi: 'thất vọng' },
  { lesson: 39, masu: 'あんしんします', group: 3, vi: 'an tâm' },
  { lesson: 39, masu: 'ちこくします', group: 3, vi: 'đến muộn' },
  { lesson: 39, masu: 'そうたいします', group: 3, vi: 'về sớm' },
  { lesson: 39, masu: 'けんかします', group: 3, vi: 'cãi nhau' },
  { lesson: 39, masu: 'りこんします', group: 3, vi: 'ly hôn' },

  // ── Bài 40 ──
  { lesson: 40, masu: 'かぞえます', group: 2, vi: 'đếm' },
  { lesson: 40, masu: 'はかります', group: 1, vi: 'đo' },
  { lesson: 40, masu: 'たしかめます', group: 2, vi: 'xác nhận' },
  { lesson: 40, masu: 'しゅっぱつします', group: 3, vi: 'xuất phát' },
  { lesson: 40, masu: 'とうちゃくします', group: 3, vi: 'đến nơi' },
  { lesson: 40, masu: 'よいます', group: 1, vi: 'say' },

  // ── Bài 41 ──
  { lesson: 41, masu: 'いただきます', group: 1, vi: 'nhận (khiêm nhường)' },
  { lesson: 41, masu: 'くださいます', group: 1, vi: 'cho (tôn kính)' },
  { lesson: 41, masu: 'よびます', group: 1, vi: 'mời' },
  { lesson: 41, masu: 'とりかえます', group: 2, vi: 'đổi' },

  // ── Bài 42 ──
  { lesson: 42, masu: 'つつみます', group: 1, vi: 'bọc' },
  { lesson: 42, masu: 'わかします', group: 1, vi: 'đun sôi' },
  { lesson: 42, masu: 'まぜます', group: 2, vi: 'trộn' },
  { lesson: 42, masu: 'けいさんします', group: 3, vi: 'tính toán' },

  // ── Bài 43 ──
  { lesson: 43, masu: 'ふえます', group: 2, vi: 'tăng' },
  { lesson: 43, masu: 'へります', group: 1, vi: 'giảm' },
  { lesson: 43, masu: 'あがります', group: 1, vi: 'tăng lên' },
  { lesson: 43, masu: 'さがります', group: 1, vi: 'giảm xuống' },
  { lesson: 43, masu: 'きれます', group: 2, vi: 'đứt' },
  { lesson: 43, masu: 'とれます', group: 2, vi: 'tuột' },
  { lesson: 43, masu: 'おちます', group: 2, vi: 'rơi' },

  // ── Bài 44 ──
  { lesson: 44, masu: 'わらいます', group: 1, vi: 'cười' },
  { lesson: 44, masu: 'かわきます', group: 1, vi: 'khô' },
  { lesson: 44, masu: 'ぬれます', group: 2, vi: 'ướt' },
  { lesson: 44, masu: 'すべります', group: 1, vi: 'trượt' },
  { lesson: 44, masu: 'おきます', group: 2, vi: 'xảy ra' },
  { lesson: 44, masu: 'ちょうせつします', group: 3, vi: 'điều chỉnh' },

  // ── Bài 45 ──
  { lesson: 45, masu: 'しんじます', group: 2, vi: 'tin tưởng' },
  { lesson: 45, masu: 'キャンセルします', group: 3, vi: 'hủy' },
  { lesson: 45, masu: 'しらせます', group: 2, vi: 'thông báo' },

  // ── Bài 46 ──
  { lesson: 46, masu: 'わたします', group: 1, vi: 'trao cho' },
  { lesson: 46, masu: 'かえってきます', group: 3, vi: 'về tới' },

  // ── Bài 47 ──
  { lesson: 47, masu: 'あつまります', group: 1, vi: 'tập trung' },
  { lesson: 47, masu: 'わかれます', group: 2, vi: 'chia tay' },

  // ── Bài 48 ──
  { lesson: 48, masu: 'おろします', group: 1, vi: 'cho xuống' },
  { lesson: 48, masu: 'とどけます', group: 2, vi: 'gửi đến' },
  { lesson: 48, masu: 'せわをします', group: 3, vi: 'chăm sóc' },
  { lesson: 48, masu: 'ろくおんします', group: 3, vi: 'ghi âm' },

  // ── Bài 49 ──
  { lesson: 49, masu: 'いらっしゃいます', group: 1, vi: 'đi, đến, ở (tôn kính)' },
  { lesson: 49, masu: 'おっしゃいます', group: 1, vi: 'nói (tôn kính)', irregular_te: 'おっしゃって', irregular_ta: 'おっしゃった' },
  { lesson: 49, masu: 'なさいます', group: 1, vi: 'làm (tôn kính)', irregular_te: 'なさって', irregular_ta: 'なさった' },
  { lesson: 49, masu: 'ごらんになります', group: 1, vi: 'xem (tôn kính)' },

  // ── Bài 50 ──
  { lesson: 50, masu: 'まいります', group: 1, vi: 'đi, đến (khiêm nhường)' },
  { lesson: 50, masu: 'おります', group: 1, vi: 'ở (khiêm nhường)' },
  { lesson: 50, masu: 'もうします', group: 1, vi: 'nói (khiêm nhường)' },
  { lesson: 50, masu: 'いたします', group: 1, vi: 'làm (khiêm nhường)' },
  { lesson: 50, masu: 'はいけんします', group: 3, vi: 'xem (khiêm nhường)' },
  { lesson: 50, masu: 'ぞんじます', group: 2, vi: 'biết (khiêm nhường)' },
  { lesson: 50, masu: 'うかがいます', group: 1, vi: 'hỏi, nghe, đến (khiêm nhường)' },
  { lesson: 50, masu: 'おめにかかります', group: 1, vi: 'gặp (khiêm nhường)' }
`;

const marker = "];";
const arrayEndIndex = content.indexOf(marker);
if (arrayEndIndex !== -1) {
    content = content.slice(0, arrayEndIndex) + n4_verbs + "\n" + content.slice(arrayEndIndex);
}

fs.writeFileSync('data/conjugation.js', content, 'utf8');
console.log('Done.');
