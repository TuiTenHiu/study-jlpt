/**
 * data/conjugation.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Verb conjugation data for the Conjugation Lab mini-game.
 *
 * Flat array of all verbs from Minna no Nihongo (lessons 4-25).
 * Each verb has:
 *   - masu:   ます form (e.g. たべます)
 *   - group:  1 (五段), 2 (一段), or 3 (irregular)
 *   - vi:     Vietnamese meaning
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * Complete verb pool — automatically randomized each session.
 * No lesson selection needed.
 */
export const allVerbs = [
  // ── Bài 4 ──
  { lesson: 4, masu: 'おきます',       group: 2, vi: 'thức dậy' },
  { lesson: 4, masu: 'ねます',         group: 2, vi: 'ngủ' },
  { lesson: 4, masu: 'はたらきます',   group: 1, vi: 'làm việc' },
  { lesson: 4, masu: 'やすみます',     group: 1, vi: 'nghỉ ngơi' },
  { lesson: 4, masu: 'おわります',     group: 1, vi: 'kết thúc' },
  { lesson: 4, masu: 'べんきょうします', group: 3, vi: 'học' },
  { lesson: 4, masu: 'いれます',       group: 2, vi: 'bật (đèn)' },
  { lesson: 4, masu: 'けします',       group: 1, vi: 'tắt (đèn)' },

  // ── Bài 5 ──
  { lesson: 5, masu: 'いきます',       group: 1, vi: 'đi', irregular_te: 'いって', irregular_ta: 'いった' },
  { lesson: 5, masu: 'きます',         group: 3, vi: 'đến' },
  { lesson: 5, masu: 'かえります',     group: 1, vi: 'về' },

  // ── Bài 6 ──
  { lesson: 6, masu: 'たべます',       group: 2, vi: 'ăn' },
  { lesson: 6, masu: 'のみます',       group: 1, vi: 'uống' },
  { lesson: 6, masu: 'すいます',       group: 1, vi: 'hút (thuốc)' },
  { lesson: 6, masu: 'みます',         group: 2, vi: 'xem' },
  { lesson: 6, masu: 'ききます',       group: 1, vi: 'nghe' },
  { lesson: 6, masu: 'よみます',       group: 1, vi: 'đọc' },
  { lesson: 6, masu: 'かきます',       group: 1, vi: 'viết' },
  { lesson: 6, masu: 'かいます',       group: 1, vi: 'mua' },
  { lesson: 6, masu: 'とります',       group: 1, vi: 'chụp (ảnh)' },
  { lesson: 6, masu: 'します',         group: 3, vi: 'làm' },
  { lesson: 6, masu: 'あいます',       group: 1, vi: 'gặp' },

  // ── Bài 7 ──
  { lesson: 7, masu: 'きります',       group: 1, vi: 'cắt' },
  { lesson: 7, masu: 'おくります',     group: 1, vi: 'gửi' },
  { lesson: 7, masu: 'あげます',       group: 2, vi: 'tặng' },
  { lesson: 7, masu: 'もらいます',     group: 1, vi: 'nhận' },
  { lesson: 7, masu: 'かします',       group: 1, vi: 'cho mượn' },
  { lesson: 7, masu: 'かります',       group: 2, vi: 'mượn' },
  { lesson: 7, masu: 'おしえます',     group: 2, vi: 'dạy' },
  { lesson: 7, masu: 'ならいます',     group: 1, vi: 'học tập' },
  { lesson: 7, masu: 'かけます',       group: 2, vi: 'gọi (điện)' },

  // ── Bài 13 ──
  { lesson: 13, masu: 'あそびます',     group: 1, vi: 'chơi' },
  { lesson: 13, masu: 'およぎます',     group: 1, vi: 'bơi' },
  { lesson: 13, masu: 'むかえます',     group: 2, vi: 'đón' },
  { lesson: 13, masu: 'つかれます',     group: 2, vi: 'mệt' },
  { lesson: 13, masu: 'だします',       group: 1, vi: 'gửi (thư)' },
  { lesson: 13, masu: 'はいります',     group: 1, vi: 'vào' },
  { lesson: 13, masu: 'でます',         group: 2, vi: 'ra khỏi' },
  { lesson: 13, masu: 'けっこんします', group: 3, vi: 'kết hôn' },
  { lesson: 13, masu: 'かいものします', group: 3, vi: 'mua sắm' },
  { lesson: 13, masu: 'さんぽします',   group: 3, vi: 'đi dạo' },

  // ── Bài 14 ──
  { lesson: 14, masu: 'つけます',       group: 2, vi: 'bật' },
  { lesson: 14, masu: 'あけます',       group: 2, vi: 'mở' },
  { lesson: 14, masu: 'しめます',       group: 2, vi: 'đóng' },
  { lesson: 14, masu: 'いそぎます',     group: 1, vi: 'vội' },
  { lesson: 14, masu: 'まちます',       group: 1, vi: 'đợi' },
  { lesson: 14, masu: 'とめます',       group: 2, vi: 'dừng' },
  { lesson: 14, masu: 'まがります',     group: 1, vi: 'rẽ' },
  { lesson: 14, masu: 'もちます',       group: 1, vi: 'cầm' },
  { lesson: 14, masu: 'よびます',       group: 1, vi: 'gọi' },
  { lesson: 14, masu: 'はなします',     group: 1, vi: 'nói chuyện' },
  { lesson: 14, masu: 'みせます',       group: 2, vi: 'cho xem' },
  { lesson: 14, masu: 'はじめます',     group: 2, vi: 'bắt đầu' },
  { lesson: 14, masu: 'ふります',       group: 1, vi: 'rơi (mưa)' },
  { lesson: 14, masu: 'てつだいます',   group: 1, vi: 'giúp đỡ' },
  { lesson: 14, masu: 'コピーします',   group: 3, vi: 'copy' },

  // ── Bài 15 ──
  { lesson: 15, masu: 'おきます',       group: 1, vi: 'đặt, để' },
  { lesson: 15, masu: 'つくります',     group: 1, vi: 'làm, chế tạo' },
  { lesson: 15, masu: 'うります',       group: 1, vi: 'bán' },
  { lesson: 15, masu: 'しります',       group: 1, vi: 'biết' },
  { lesson: 15, masu: 'すみます',       group: 1, vi: 'sống, ở' },
  { lesson: 15, masu: 'けんきゅうします', group: 3, vi: 'nghiên cứu' },

  // ── Bài 16 ──
  { lesson: 16, masu: 'のります',       group: 1, vi: 'lên xe' },
  { lesson: 16, masu: 'おります',       group: 2, vi: 'xuống xe' },
  { lesson: 16, masu: 'のりかえます',   group: 2, vi: 'chuyển xe' },
  { lesson: 16, masu: 'あびます',       group: 2, vi: 'tắm' },
  { lesson: 16, masu: 'おろします',     group: 1, vi: 'rút (tiền)' },
  { lesson: 16, masu: 'おします',       group: 1, vi: 'bấm, ấn' },
  { lesson: 16, masu: 'でんわします',   group: 3, vi: 'gọi điện' },

  // ── Bài 17 ──
  { lesson: 17, masu: 'おぼえます',     group: 2, vi: 'nhớ' },
  { lesson: 17, masu: 'わすれます',     group: 2, vi: 'quên' },
  { lesson: 17, masu: 'なくします',     group: 1, vi: 'đánh mất' },
  { lesson: 17, masu: 'はらいます',     group: 1, vi: 'trả tiền' },
  { lesson: 17, masu: 'かえします',     group: 1, vi: 'trả lại' },
  { lesson: 17, masu: 'でかけます',     group: 2, vi: 'ra ngoài' },
  { lesson: 17, masu: 'ぬぎます',       group: 1, vi: 'cởi' },
  { lesson: 17, masu: 'しんぱいします', group: 3, vi: 'lo lắng' },

  // ── Bài 18 ──
  { lesson: 18, masu: 'できます',       group: 2, vi: 'có thể' },
  { lesson: 18, masu: 'あらいます',     group: 1, vi: 'rửa' },
  { lesson: 18, masu: 'ひきます',       group: 1, vi: 'chơi (nhạc cụ)' },
  { lesson: 18, masu: 'うたいます',     group: 1, vi: 'hát' },
  { lesson: 18, masu: 'あつめます',     group: 2, vi: 'thu thập' },
  { lesson: 18, masu: 'すてます',       group: 2, vi: 'vứt, bỏ' },
  { lesson: 18, masu: 'かえます',       group: 2, vi: 'đổi' },
  { lesson: 18, masu: 'うんてんします', group: 3, vi: 'lái xe' },
  { lesson: 18, masu: 'よやくします',   group: 3, vi: 'đặt trước' },

  // ── Bài 19 ──
  { lesson: 19, masu: 'のぼります',     group: 1, vi: 'leo (núi)' },
  { lesson: 19, masu: 'とまります',     group: 1, vi: 'ở (khách sạn)' },
  { lesson: 19, masu: 'そうじします',   group: 3, vi: 'dọn dẹp' },
  { lesson: 19, masu: 'せんたくします', group: 3, vi: 'giặt đồ' },

  // ── Bài 20 ──
  { lesson: 20, masu: 'いります',       group: 1, vi: 'cần' },
  { lesson: 20, masu: 'しらべます',     group: 2, vi: 'tra cứu' },
  { lesson: 20, masu: 'なおします',     group: 1, vi: 'sửa chữa' },

  // ── Bài 21 ──
  { lesson: 21, masu: 'おもいます',     group: 1, vi: 'nghĩ' },
  { lesson: 21, masu: 'いいます',       group: 1, vi: 'nói' },

  // ── Bài 22 ──
  { lesson: 22, masu: 'きます',         group: 2, vi: 'mặc (áo)' },
  { lesson: 22, masu: 'はきます',       group: 1, vi: 'mang (giày)' },
  { lesson: 22, masu: 'かぶります',     group: 1, vi: 'đội (mũ)' },

  // ── Bài 23 ──
  { lesson: 23, masu: 'ききます',       group: 1, vi: 'hỏi' },
  { lesson: 23, masu: 'まわします',     group: 1, vi: 'xoay' },
  { lesson: 23, masu: 'ひきます',       group: 1, vi: 'kéo' },
  { lesson: 23, masu: 'かわります',     group: 1, vi: 'thay đổi' },

  // ── Bài 24 ──
  { lesson: 24, masu: 'くれます',       group: 2, vi: 'cho (tôi)' },
  { lesson: 24, masu: 'つれていきます', group: 1, vi: 'đưa đi' },
  { lesson: 24, masu: 'おくっていきます', group: 1, vi: 'tiễn đi' },
  { lesson: 24, masu: 'しょうかいします', group: 3, vi: 'giới thiệu' },

  // ── Bài 25 ──
  { lesson: 25, masu: 'かんがえます',   group: 2, vi: 'suy nghĩ' },
  { lesson: 25, masu: 'つきます',       group: 1, vi: 'đến nơi' },
  { lesson: 25, masu: 'たちます',       group: 1, vi: 'đứng' },
  { lesson: 25, masu: 'すわります',     group: 1, vi: 'ngồi' },
  { lesson: 25, masu: 'なくなります',   group: 1, vi: 'mất (đồ)' },
  { lesson: 25, masu: 'こまります',     group: 1, vi: 'gặp khó khăn' },

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
  { lesson: 41, masu: 'くださいます', group: 1, vi: 'cho (tôn kính)' , irregular_nai: 'くださらない', irregular_dict: 'くださる' },
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
  { lesson: 49, masu: 'いらっしゃいます', group: 1, vi: 'đi, đến, ở (tôn kính)' , irregular_nai: 'いらっしゃらない', irregular_dict: 'いらっしゃる' },
  { lesson: 49, masu: 'おっしゃいます', group: 1, vi: 'nói (tôn kính)', irregular_te: 'おっしゃって', irregular_ta: 'おっしゃった' , irregular_nai: 'おっしゃらない', irregular_dict: 'おっしゃる' },
  { lesson: 49, masu: 'なさいます', group: 1, vi: 'làm (tôn kính)', irregular_te: 'なさって', irregular_ta: 'なさった' , irregular_nai: 'なさらない', irregular_dict: 'なさる' },
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

];

/**
 * Group 1 (五段) conjugation rules for て/た form.
 * Maps the last kana of the stem to the transformation.
 *
 * Format: { from, te, ta, explain_vi }
 *   - from:  the ending kana of the stem (before ます)
 *   - te:    て-form transformation
 *   - ta:    た-form transformation
 *   - explain_vi: explanation in Vietnamese
 */
export const group1Rules = [
  {
    endings: ['き'],
    te: 'いて', ta: 'いた',
    explain_vi: 'き → いて / いた',
    ruleLabel: 'き → いて',
    ruleLabel_ta: 'き → いた',
  },
  {
    endings: ['ぎ'],
    te: 'いで', ta: 'いだ',
    explain_vi: 'ぎ → いで / いだ',
    ruleLabel: 'ぎ → いで',
    ruleLabel_ta: 'ぎ → いだ',
  },
  {
    endings: ['み', 'に', 'び'],
    te: 'んで', ta: 'んだ',
    explain_vi: 'み/に/び → んで / んだ',
    ruleLabel: 'み/び/に → んで',
    ruleLabel_ta: 'み/び/に → んだ',
  },
  {
    endings: ['り', 'い', 'ち'],
    te: 'って', ta: 'った',
    explain_vi: 'り/い/ち → って / った',
    ruleLabel: 'り/い/ち → って',
    ruleLabel_ta: 'り/い/ち → った',
  },
  {
    endings: ['し'],
    te: 'して', ta: 'した',
    explain_vi: 'し → して / した',
    ruleLabel: 'し → して',
    ruleLabel_ta: 'し → した',
  },
];

/**
 * Target forms we teach in the Conjugation Lab.
 */
export const targetForms = [
  { id: 'te', label: 'Thể て', labelJp: 'て形' },
  { id: 'ta', label: 'Thể た', labelJp: 'た形' },
  { id: 'nai', label: 'Thể ない', labelJp: 'ない形' },
  { id: 'dict', label: 'Thể từ điển', labelJp: '辞書形' },
];

/**
 * Kana transformations for Group 1 (i-row -> a-row for Nai form, i-row -> u-row for Dict form).
 */
const iToAKana = {
  'い': 'わ', // exception: い -> わ
  'き': 'か', 'ぎ': 'が',
  'し': 'さ',
  'ち': 'た',
  'に': 'な',
  'ひ': 'は', 'び': 'ば', 'ぴ': 'ぱ', // Note: no hi/pi in minna no nihongo min verbs, but good for completeness
  'み': 'ま',
  'り': 'ら'
};

const iToUKana = {
  'い': 'う',
  'き': 'く', 'ぎ': 'ぐ',
  'し': 'す',
  'ち': 'つ',
  'に': 'ぬ',
  'ひ': 'ふ', 'び': 'ぶ', 'ぴ': 'ぷ',
  'み': 'む',
  'り': 'る'
};

/**
 * Generate all the conjugation steps for a given verb + target form.
 *
 * @param {Object} verb       – verb object from allVerbs
 * @param {'te'|'ta'} formId  – which form to conjugate to
 * @returns {Object} steps    – { steps[], finalAnswer, verb, formId }
 */
export function generateSteps(verb, formId) {
  const form = targetForms.find(f => f.id === formId);
  const stem = verb.masu.replace(/ます$/, '');
  const steps = [];

  // Handle irregular verbs (Group 3)
  if (verb.group === 3) {
    // Group 3 verbs: します-type and きます
    const isSuru = verb.masu.endsWith('します');
    const isKuru = verb.masu === 'きます';

    steps.push({
      id: 'remove_masu',
      instruction: 'Bỏ đuôi「ます」',
      before: verb.masu,
      removed: 'ます',
      after: stem,
      type: 'info',
    });

    let finalAnswer;
    if (isKuru) {
      if (formId === 'te') finalAnswer = 'きて';
      else if (formId === 'ta') finalAnswer = 'きた';
      else if (formId === 'nai') finalAnswer = 'こない';
      else if (formId === 'dict') finalAnswer = 'くる';

      steps.push({
        id: 'irregular_transform',
        instruction: `Động từ bất quy tắc: きます → ${finalAnswer}`,
        before: stem,
        after: finalAnswer,
        type: 'info',
        explain: `きます là động từ bất quy tắc (Nhóm 3). Thể ${form.label} là「${finalAnswer}」`,
      });
    } else if (isSuru) {
      // For compound する verbs: べんきょうします → べんきょうして
      const suruStem = stem.replace(/し$/, '');
      let suffix = '';
      if (formId === 'te') suffix = 'して';
      else if (formId === 'ta') suffix = 'した';
      else if (formId === 'nai') suffix = 'しない';
      else if (formId === 'dict') suffix = 'する';

      finalAnswer = suruStem + suffix;
      steps.push({
        id: 'irregular_transform',
        instruction: `Động từ Nhóm 3 (～します): ${verb.masu} → ${finalAnswer}`,
        before: stem,
        after: finalAnswer,
        type: 'info',
        explain: `「${verb.masu}」là động từ Nhóm 3 (～します). Thay し bằng「${suffix}」`,
      });
    }

    return { steps, finalAnswer, verb, formId, group: 3 };
  }

  // Handle Group 2 (一段)
  if (verb.group === 2) {
    steps.push({
      id: 'remove_masu',
      instruction: 'Bỏ đuôi「ます」',
      before: verb.masu,
      removed: 'ます',
      after: stem,
      type: 'info',
    });

    const suffix = formId === 'te' ? 'て' : (formId === 'ta' ? 'た' : (formId === 'nai' ? 'ない' : 'る'));
    const finalAnswer = stem + suffix;

    steps.push({
      id: 'add_suffix',
      instruction: `Thêm đuôi「${suffix}」`,
      question: `Sau khi bỏ ます, cần thêm gì?`,
      before: stem,
      correctAnswer: suffix,
      after: finalAnswer,
      type: 'choose_suffix',
      options: generateSuffixOptions(suffix),
      explain: `Động từ Nhóm 2: Chỉ cần bỏ ます rồi thêm「${suffix}」`,
    });

    return { steps, finalAnswer, verb, formId, group: 2 };
  }

  // Handle Group 1 (五段)
  const tailKana = stem[stem.length - 1]; // Last kana of stem, e.g. 'き'
  const stemWithoutTail = stem.slice(0, -1); // e.g. 'はたら'

  // Check for irregular いきます
  if (verb.irregular_te && (formId === 'te' || formId === 'ta')) {
    const finalAnswer = formId === 'te' ? verb.irregular_te : verb.irregular_ta;

    steps.push({
      id: 'remove_masu',
      instruction: 'Bỏ đuôi「ます」',
      before: verb.masu,
      removed: 'ます',
      after: stem,
      type: 'info',
    });

    steps.push({
      id: 'choose_rule',
      instruction: `Chọn quy tắc biến đổi cho「${tailKana}」`,
      question: `「${verb.masu}」là ngoại lệ! Quy tắc nào đúng?`,
      before: stem,
      correctAnswer: finalAnswer,
      after: finalAnswer,
      type: 'choose_rule',
      options: generateRuleOptions(formId, tailKana, true),
      correctRule: `いき → ${formId === 'te' ? 'いって' : 'いった'} (ngoại lệ)`,
      explain: `「いきます」là ngoại lệ đặc biệt. Thay vì き→いて, nó biến thành いって/いった.`,
    });

    return { steps, finalAnswer, verb, formId, group: 1, irregular: true };
  }

  // --- Te and Ta forms ---
  if (formId === 'te' || formId === 'ta') {
    const rule = group1Rules.find(r => r.endings.includes(tailKana));
    if (!rule) return null;

    const teEnding = formId === 'te' ? rule.te : rule.ta;
    const finalAnswer = stemWithoutTail + teEnding;

    steps.push({
      id: 'remove_masu',
      instruction: 'Bỏ đuôi「ます」',
      before: verb.masu,
      removed: 'ます',
      after: stem,
      type: 'info',
    });

    steps.push({
      id: 'choose_rule',
      instruction: `Chọn quy tắc biến đổi cho「${tailKana}」`,
      question: `Đuôi「${tailKana}」biến đổi thế nào?`,
      before: stem,
      correctAnswer: formId === 'te' ? rule.ruleLabel : rule.ruleLabel_ta,
      correctTransform: teEnding,
      after: finalAnswer,
      type: 'choose_rule',
      options: generateRuleOptions(formId, tailKana, false),
      explain: `Nhóm 1: ${rule.explain_vi}. Bỏ「${tailKana}」rồi thêm「${teEnding}」`,
    });

    return { steps, finalAnswer, verb, formId, group: 1 };
  }

  
  // Check for irregular nai/dict (Keigo)
  if (formId === 'nai' && verb.irregular_nai) {
    const finalAnswer = verb.irregular_nai;
    steps.push({
      id: 'remove_masu', instruction: 'Bỏ đuôi 「ます」', before: verb.masu, removed: 'ます', after: stem, type: 'info'
    });
    steps.push({
      id: 'irregular_transform', instruction: `Ngoại lệ (kính ngữ): ${verb.masu} → ${finalAnswer}`, before: stem, after: finalAnswer, type: 'info', explain: `「${verb.masu}」 là ngoại lệ. Thể nai là 「${finalAnswer}」.`
    });
    return { steps, finalAnswer, verb, formId, group: 1 };
  }
  if (formId === 'dict' && verb.irregular_dict) {
    const finalAnswer = verb.irregular_dict;
    steps.push({
      id: 'remove_masu', instruction: 'Bỏ đuôi 「ます」', before: verb.masu, removed: 'ます', after: stem, type: 'info'
    });
    steps.push({
      id: 'irregular_transform', instruction: `Ngoại lệ (kính ngữ): ${verb.masu} → ${finalAnswer}`, before: stem, after: finalAnswer, type: 'info', explain: `「${verb.masu}」 là ngoại lệ. Thể từ điển là 「${finalAnswer}」.`
    });
    return { steps, finalAnswer, verb, formId, group: 1 };
  }

  // --- Nai and Dict forms ---
  if (formId === 'nai' || formId === 'dict') {
    const targetKana = formId === 'nai' ? iToAKana[tailKana] : iToUKana[tailKana];
    const suffix = formId === 'nai' ? 'ない' : '';
    const finalAnswer = stemWithoutTail + targetKana + suffix;
    const ruleLabel = `${tailKana} → ${targetKana}`;

    steps.push({
      id: 'remove_masu',
      instruction: 'Bỏ đuôi「ます」',
      before: verb.masu,
      removed: 'ます',
      after: stem,
      type: 'info',
    });

    steps.push({
      id: 'choose_rule',
      instruction: `Biến đổi âm「${tailKana}」(cột i)`,
      question: `Nhóm 1: Chuyển âm cuối từ cột i sang cột ${formId === 'nai' ? 'a' : 'u'}:`,
      before: stem,
      correctAnswer: ruleLabel,
      correctTransform: targetKana + suffix,
      after: finalAnswer,
      type: 'choose_rule',
      options: generateKanaOptions(tailKana, formId),
      explain: formId === 'nai' 
        ? `Nhóm 1: Đổi âm cột i thành cột a rồi thêm "ない". Ngoại lệ: い đổi thành わ.`
        : `Nhóm 1: Đổi âm cột i thành cột u.`,
    });

    return { steps, finalAnswer, verb, formId, group: 1 };
  }
}

/**
 * Generate multiple-choice options for suffix selection (Group 2).
 */
function generateSuffixOptions(correct) {
  const allOptions = ['て', 'た', 'ない', 'る', 'れる', 'ろ'];
  const options = [correct];
  for (const opt of allOptions) {
    if (options.length >= 4) break;
    if (!options.includes(opt)) options.push(opt);
  }
  return shuffleArray(options);
}

/**
 * Generate multiple-choice options for rule selection (Group 1).
 */
function generateRuleOptions(formId, tailKana, isIrregular) {
  const allRuleLabels = group1Rules.map(r =>
    formId === 'te' ? r.ruleLabel : r.ruleLabel_ta
  );

  // For irregular いきます, add the irregular option
  if (isIrregular) {
    const irregLabel = formId === 'te' ? 'き → って (ngoại lệ)' : 'き → った (ngoại lệ)';
    const options = [irregLabel];
    for (const label of allRuleLabels) {
      if (options.length >= 4) break;
      if (!options.includes(label)) options.push(label);
    }
    return shuffleArray(options);
  }

  // Find the correct rule
  const correctRule = group1Rules.find(r => r.endings.includes(tailKana));
  const correctLabel = formId === 'te' ? correctRule.ruleLabel : correctRule.ruleLabel_ta;

  const options = [correctLabel];
  for (const label of allRuleLabels) {
    if (options.length >= 4) break;
    if (!options.includes(label)) options.push(label);
  }
  return shuffleArray(options);
}

/**
 * Generate options for i->a and i->u transformations (Nai/Dict forms).
 */
function generateKanaOptions(tailKana, formId) {
  const targetKana = formId === 'nai' ? iToAKana[tailKana] : iToUKana[tailKana];
  const correctLabel = `${tailKana} → ${targetKana}`;
  
  const options = [correctLabel];
  
  // Pick 3 random wrong target kanas from the same category
  const pool = formId === 'nai' ? Object.values(iToAKana) : Object.values(iToUKana);
  const wrongPool = pool.filter(k => k !== targetKana);
  const shuffledWrong = shuffleArray(wrongPool);
  
  for (let i = 0; i < 3; i++) {
    options.push(`${tailKana} → ${shuffledWrong[i]}`);
  }
  
  return shuffleArray(options);
}

/** Fisher-Yates shuffle. */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
