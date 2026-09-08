/**
 * data/kanji.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Danh sách ~103 chữ Kanji cấp độ JLPT N5
 * Mỗi chữ bao gồm: Nghĩa, âm On, âm Kun, Mẹo ghi nhớ (Mnemonic) & Từ vựng ví dụ.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const kanjiData = [
  // ── SỐ ĐẾM ──
  {
    id: 1, kanji: "一", meaning: "Nhất (Một)",
    on: "ichi, itsu", kun: "hito-tsu",
    mnemonic: "Chỉ có một gạch ngang duy nhất.",
    examples: [
      { word: "一", reading: "ichi", meaning: "Số 1" },
      { word: "一つ", reading: "hitotsu", meaning: "Một cái" }
    ]
  },
  {
    id: 2, kanji: "二", meaning: "Nhị (Hai)",
    on: "ni", kun: "futa-tsu",
    mnemonic: "Hai gạch ngang.",
    examples: [
      { word: "二", reading: "ni", meaning: "Số 2" },
      { word: "二つ", reading: "futatsu", meaning: "Hai cái" }
    ]
  },
  {
    id: 3, kanji: "三", meaning: "Tam (Ba)",
    on: "san", kun: "mit-tsu",
    mnemonic: "Ba gạch ngang xếp chồng lên nhau.",
    examples: [
      { word: "三", reading: "san", meaning: "Số 3" },
      { word: "三つ", reading: "mittsu", meaning: "Ba cái" }
    ]
  },
  {
    id: 4, kanji: "四", meaning: "Tứ (Bốn)",
    on: "shi", kun: "yot-tsu, yon",
    mnemonic: "Hình ảnh cửa sổ có 4 góc hoặc bức màn che rủ xuống chia làm 4 phần.",
    examples: [
      { word: "四", reading: "yon / shi", meaning: "Số 4" },
      { word: "四つ", reading: "yottsu", meaning: "Bốn cái" }
    ]
  },
  {
    id: 5, kanji: "五", meaning: "Ngũ (Năm)",
    on: "go", kun: "itsu-tsu",
    mnemonic: "Giống như con số 5 lộn ngược một chút.",
    examples: [
      { word: "五", reading: "go", meaning: "Số 5" },
      { word: "五つ", reading: "itsutsu", meaning: "Năm cái" }
    ]
  },
  {
    id: 6, kanji: "六", meaning: "Lục (Sáu)",
    on: "roku", kun: "mut-tsu",
    mnemonic: "Một người (亠) dang rộng hai tay chân đếm đến 6 (八).",
    examples: [
      { word: "六", reading: "roku", meaning: "Số 6" },
      { word: "六つ", reading: "muttsu", meaning: "Sáu cái" }
    ]
  },
  {
    id: 7, kanji: "七", meaning: "Thất (Bảy)",
    on: "shichi", kun: "nana-tsu",
    mnemonic: "Giống con số 7 bị lật ngược.",
    examples: [
      { word: "七", reading: "nana / shichi", meaning: "Số 7" },
      { word: "七つ", reading: "nanatsu", meaning: "Bảy cái" }
    ]
  },
  {
    id: 8, kanji: "八", meaning: "Bát (Tám)",
    on: "hachi", kun: "yat-tsu",
    mnemonic: "Hình hai nét phẩy tỏa ra hai bên, giống ngọn núi Phú Sĩ hình số 8.",
    examples: [
      { word: "八", reading: "hachi", meaning: "Số 8" },
      { word: "八つ", reading: "yattsu", meaning: "Tám cái" }
    ]
  },
  {
    id: 9, kanji: "九", meaning: "Cửu (Chín)",
    on: "kyuu, ku", kun: "kokono-tsu",
    mnemonic: "Giống hình một người đang chống đẩy đến cái thứ 9 thì gục ngã.",
    examples: [
      { word: "九", reading: "kyuu / ku", meaning: "Số 9" },
      { word: "九つ", reading: "kokonotsu", meaning: "Chín cái" }
    ]
  },
  {
    id: 10, kanji: "十", meaning: "Thập (Mười)",
    on: "juu", kun: "too",
    mnemonic: "Giống dấu chữ thập (+) -> 10.",
    examples: [
      { word: "十", reading: "juu", meaning: "Số 10" },
      { word: "十月", reading: "juugatsu", meaning: "Tháng 10" }
    ]
  },
  {
    id: 11, kanji: "百", meaning: "Bách (Trăm)",
    on: "hyaku", kun: "-",
    mnemonic: "Chữ Nhất (一) ở trên chữ Bạch (白 - màu trắng). Một trăm thứ màu trắng.",
    examples: [
      { word: "百", reading: "hyaku", meaning: "100" },
      { word: "三百", reading: "sanbyaku", meaning: "300" }
    ]
  },
  {
    id: 12, kanji: "千", meaning: "Thiên (Nghìn)",
    on: "sen", kun: "chi",
    mnemonic: "Thêm một dấu phẩy nhỏ lên đầu chữ Thập (十) để biến 10 thành 1.000.",
    examples: [
      { word: "千", reading: "sen", meaning: "1.000" },
      { word: "三千", reading: "sanzen", meaning: "3.000" }
    ]
  },
  {
    id: 13, kanji: "万", meaning: "Vạn (Mười nghìn)",
    on: "man, ban", kun: "-",
    mnemonic: "Hình ảnh một thanh kiếm (hoặc móc) chém được cả vạn quân.",
    examples: [
      { word: "一万", reading: "ichiman", meaning: "10.000 (Một vạn)" },
      { word: "万年筆", reading: "mannenhitsu", meaning: "Bút máy" }
    ]
  },
  {
    id: 14, kanji: "円", meaning: "Viên (Yên Nhật, Tròn)",
    on: "en", kun: "maru-i",
    mnemonic: "Hình chiếc hộp tròn hoặc tờ tiền Yên có viền bao quanh.",
    examples: [
      { word: "百円", reading: "hyakuen", meaning: "100 Yên" },
      { word: "円い", reading: "marui", meaning: "Tròn" }
    ]
  },

  // ── THỜI GIAN & THỨ TRONG TUẦN ──
  {
    id: 15, kanji: "日", meaning: "Nhật (Mặt trời, Ngày)",
    on: "nichi, jitsu", kun: "hi, -bi, -ka",
    mnemonic: "Hình dáng giống ô cửa sổ có ánh mặt trời chiếu vào.",
    examples: [
      { word: "日本", reading: "nihon", meaning: "Nhật Bản" },
      { word: "日曜日", reading: "nichiyoubi", meaning: "Chủ nhật" }
    ]
  },
  {
    id: 16, kanji: "月", meaning: "Nguyệt (Mặt trăng, Tháng)",
    on: "getsu, gatsu", kun: "tsuki",
    mnemonic: "Hình dáng mặt trăng khuyết với đám mây vắt ngang.",
    examples: [
      { word: "月曜日", reading: "getsuyoubi", meaning: "Thứ hai" },
      { word: "一月", reading: "ichigatsu", meaning: "Tháng 1" }
    ]
  },
  {
    id: 17, kanji: "火", meaning: "Hỏa (Lửa)",
    on: "ka", kun: "hi, -bi, ho",
    mnemonic: "Hình ảnh ngọn lửa đang bốc cháy.",
    examples: [
      { word: "火曜日", reading: "kayoubi", meaning: "Thứ ba" },
      { word: "花火", reading: "hanabi", meaning: "Pháo hoa" }
    ]
  },
  {
    id: 18, kanji: "水", meaning: "Thủy (Nước)",
    on: "sui", kun: "mizu",
    mnemonic: "Dòng nước đang chảy xuống giữa vách đá.",
    examples: [
      { word: "水曜日", reading: "suiyoubi", meaning: "Thứ tư" },
      { word: "水", reading: "mizu", meaning: "Nước" }
    ]
  },
  {
    id: 19, kanji: "木", meaning: "Mộc (Cây)",
    on: "moku, boku", kun: "ki, ko-",
    mnemonic: "Hình dáng một cái cây có thân thẳng, cành chẽ ra hai bên và rễ cắm xuống đất.",
    examples: [
      { word: "木曜日", reading: "mokuyoubi", meaning: "Thứ năm" },
      { word: "木", reading: "ki", meaning: "Cái cây" }
    ]
  },
  {
    id: 20, kanji: "金", meaning: "Kim (Vàng, Tiền)",
    on: "kin, kon", kun: "kane, kana-",
    mnemonic: "Bên dưới mái hiên nhà (nhân nón), có giấu vàng (những vệt sáng).",
    examples: [
      { word: "金曜日", reading: "kinyoubi", meaning: "Thứ sáu" },
      { word: "お金", reading: "okane", meaning: "Tiền" }
    ]
  },
  {
    id: 21, kanji: "土", meaning: "Thổ (Đất)",
    on: "do, to", kun: "tsuchi",
    mnemonic: "Hình một mầm cây (dấu thập) đang mọc lên từ mặt đất (nét ngang dưới cùng).",
    examples: [
      { word: "土曜日", reading: "doyoubi", meaning: "Thứ bảy" },
      { word: "土", reading: "tsuchi", meaning: "Đất" }
    ]
  },
  {
    id: 22, kanji: "年", meaning: "Niên (Năm)",
    on: "nen", kun: "toshi",
    mnemonic: "Hình người cưỡi ngựa (hoặc vác lúa) sau một 'năm' làm lụng vất vả.",
    examples: [
      { word: "今年", reading: "kotoshi", meaning: "Năm nay" },
      { word: "来年", reading: "rainen", meaning: "Năm sau" }
    ]
  },
  {
    id: 23, kanji: "時", meaning: "Thời (Thời gian, Giờ)",
    on: "ji", kun: "toki",
    mnemonic: "Mặt trời (日) mọc ở đền chùa (寺), báo hiệu Thời gian đã đến.",
    examples: [
      { word: "時間", reading: "jikan", meaning: "Thời gian" },
      { word: "時計", reading: "tokei", meaning: "Đồng hồ" }
    ]
  },
  {
    id: 24, kanji: "分", meaning: "Phân (Phút, Chia ra)",
    on: "bun, fun, bu", kun: "wa-keru, wa-karu",
    mnemonic: "Dùng dao (刀) để chia cắt số 8 (八) ra làm nhiều Phân (phần).",
    examples: [
      { word: "五分", reading: "gofun", meaning: "5 phút" },
      { word: "分かる", reading: "wakaru", meaning: "Hiểu" }
    ]
  },
  {
    id: 25, kanji: "半", meaning: "Bán (Một nửa)",
    on: "han", kun: "naka-ba",
    mnemonic: "Dùng thanh kiếm chẻ đôi (một nét dọc) xuyên qua một vật thể để chia thành một nửa.",
    examples: [
      { word: "半分", reading: "hanbun", meaning: "Một nửa" },
      { word: "三時半", reading: "sanjihan", meaning: "3 giờ rưỡi" }
    ]
  },
  {
    id: 26, kanji: "今", meaning: "Kim (Bây giờ)",
    on: "kin, kon", kun: "ima",
    mnemonic: "Dưới mái nhà, có chiếc đồng hồ đang điểm thời khắc 'Bây giờ'.",
    examples: [
      { word: "今", reading: "ima", meaning: "Bây giờ" },
      { word: "今日", reading: "kyou", meaning: "Hôm nay" }
    ]
  },
  {
    id: 27, kanji: "何", meaning: "Hà (Cái gì)",
    on: "ka", kun: "nani, nan",
    mnemonic: "Người (亻) đang vác miệng (口) đi hỏi 'Cái gì' đó.",
    examples: [
      { word: "何", reading: "nani", meaning: "Cái gì" },
      { word: "何時", reading: "nanji", meaning: "Mấy giờ" }
    ]
  },

  // ── PHƯƠNG HƯỚNG & VỊ TRÍ ──
  {
    id: 28, kanji: "上", meaning: "Thượng (Trên)",
    on: "jou, shou", kun: "ue, a-garu",
    mnemonic: "Cái cây mọc hướng lên trên vạch ngang (mặt đất).",
    examples: [
      { word: "上", reading: "ue", meaning: "Bên trên" },
      { word: "上がる", reading: "agaru", meaning: "Tăng lên, Đi lên" }
    ]
  },
  {
    id: 29, kanji: "下", meaning: "Hạ (Dưới)",
    on: "ka, ge", kun: "shita, sa-garu",
    mnemonic: "Cái rễ cắm hướng xuống dưới vạch ngang (mặt đất).",
    examples: [
      { word: "下", reading: "shita", meaning: "Bên dưới" },
      { word: "下がる", reading: "sagaru", meaning: "Giảm xuống, Đi xuống" }
    ]
  },
  {
    id: 30, kanji: "中", meaning: "Trung (Giữa, Trong)",
    on: "chuu", kun: "naka",
    mnemonic: "Mũi tên đâm xuyên trúng đích ở ngay phần Giữa / Bên trong.",
    examples: [
      { word: "中", reading: "naka", meaning: "Bên trong" },
      { word: "中国", reading: "chuugoku", meaning: "Trung Quốc" }
    ]
  },
  {
    id: 31, kanji: "外", meaning: "Ngoại (Ngoài)",
    on: "gai, ge", kun: "soto, hazu-reru",
    mnemonic: "Kẻ Ngoại đạo bói toán (卜) dưới đêm khuya (夕).",
    examples: [
      { word: "外", reading: "soto", meaning: "Bên ngoài" },
      { word: "外国", reading: "gaikoku", meaning: "Ngoại quốc" }
    ]
  },
  {
    id: 32, kanji: "右", meaning: "Hữu (Phải)",
    on: "u, yuu", kun: "migi",
    mnemonic: "Cánh tay (ナ) đưa thức ăn vào miệng (口) thường là tay Phải.",
    examples: [
      { word: "右", reading: "migi", meaning: "Bên phải" }
    ]
  },
  {
    id: 33, kanji: "左", meaning: "Tả (Trái)",
    on: "sa", kun: "hidari",
    mnemonic: "Cánh tay (ナ) cầm công cụ (工) là cánh tay Trái (người xưa coi trọng tay phải hơn).",
    examples: [
      { word: "左", reading: "hidari", meaning: "Bên trái" }
    ]
  },
  {
    id: 34, kanji: "前", meaning: "Tiền (Trước)",
    on: "zen", kun: "mae",
    mnemonic: "Thịt (月) chặt bằng dao (刂) phải làm từ Trước đó.",
    examples: [
      { word: "前", reading: "mae", meaning: "Phía trước" },
      { word: "午前", reading: "gozen", meaning: "Buổi sáng (AM)" }
    ]
  },
  {
    id: 35, kanji: "後", meaning: "Hậu (Sau)",
    on: "go, kou", kun: "ushi-ro, ato",
    mnemonic: "Người đi bộ (彳) theo sau một sợi tơ (幺) lùi bước (夂).",
    examples: [
      { word: "後ろ", reading: "ushiro", meaning: "Phía sau" },
      { word: "午後", reading: "gogo", meaning: "Buổi chiều (PM)" }
    ]
  },
  {
    id: 36, kanji: "東", meaning: "Đông (Hướng Đông)",
    on: "tou", kun: "higashi",
    mnemonic: "Mặt trời (日) mọc xuyên qua thân cây (木) là hướng Đông.",
    examples: [
      { word: "東", reading: "higashi", meaning: "Hướng Đông" },
      { word: "東京", reading: "toukyou", meaning: "Tokyo (Đông Kinh)" }
    ]
  },
  {
    id: 37, kanji: "西", meaning: "Tây (Hướng Tây)",
    on: "sei, sai", kun: "nishi",
    mnemonic: "Một con chim về tổ dưới ánh hoàng hôn hướng Tây.",
    examples: [
      { word: "西", reading: "nishi", meaning: "Hướng Tây" }
    ]
  },
  {
    id: 38, kanji: "南", meaning: "Nam (Hướng Nam)",
    on: "nan, na", kun: "minami",
    mnemonic: "Ở phương Nam, đồng xu (yen 円) được giữ trong hàng rào.",
    examples: [
      { word: "南", reading: "minami", meaning: "Hướng Nam" }
    ]
  },
  {
    id: 39, kanji: "北", meaning: "Bắc (Hướng Bắc)",
    on: "hoku", kun: "kita",
    mnemonic: "Hai người quay lưng lại với nhau vì gió Bắc thổi lạnh lẽo.",
    examples: [
      { word: "北", reading: "kita", meaning: "Hướng Bắc" }
    ]
  },

  // ── THIÊN NHIÊN ──
  {
    id: 40, kanji: "山", meaning: "Sơn (Núi)",
    on: "san, zan", kun: "yama",
    mnemonic: "Hình 3 đỉnh núi nhô lên.",
    examples: [
      { word: "山", reading: "yama", meaning: "Ngọn núi" },
      { word: "富士山", reading: "fujisan", meaning: "Núi Phú Sĩ" }
    ]
  },
  {
    id: 41, kanji: "川", meaning: "Xuyên (Sông)",
    on: "sen", kun: "kawa, -gawa",
    mnemonic: "Ba nét dọc như ba dòng nước chảy xuôi tạo thành con sông.",
    examples: [
      { word: "川", reading: "kawa", meaning: "Con sông" },
      { word: "山川さん", reading: "yamakawa-san", meaning: "Anh Yamakawa" }
    ]
  },
  {
    id: 42, kanji: "天", meaning: "Thiên (Trời)",
    on: "ten", kun: "ame, ama-",
    mnemonic: "Người (大) giang tay, cái đầu chạm đến cả bầu Trời (nhất).",
    examples: [
      { word: "天気", reading: "tenki", meaning: "Thời tiết" },
      { word: "天国", reading: "tengoku", meaning: "Thiên đường" }
    ]
  },
  {
    id: 43, kanji: "気", meaning: "Khí (Khí chất, Tinh thần)",
    on: "ki, ke", kun: "iki",
    mnemonic: "Hơi Khí bốc lên từ bát cơm có chữ Mễ (mũi tên).",
    examples: [
      { word: "元気", reading: "genki", meaning: "Khỏe mạnh" },
      { word: "天気", reading: "tenki", meaning: "Thời tiết" }
    ]
  },
  {
    id: 44, kanji: "空", meaning: "Không (Bầu trời, Trống rỗng)",
    on: "kuu", kun: "sora, a-ku, kara",
    mnemonic: "Người thợ (工) tạo ra Bầu trời (bộ huyệt che chở).",
    examples: [
      { word: "空", reading: "sora", meaning: "Bầu trời" },
      { word: "空港", reading: "kuukou", meaning: "Sân bay" }
    ]
  },
  {
    id: 45, kanji: "雨", meaning: "Vũ (Mưa)",
    on: "u", kun: "ame, ama-",
    mnemonic: "Hình ảnh những giọt mưa rơi xuống từ đám mây trên trời.",
    examples: [
      { word: "雨", reading: "ame", meaning: "Cơn mưa" }
    ]
  },
  {
    id: 46, kanji: "電", meaning: "Điện (Điện)",
    on: "den", kun: "-",
    mnemonic: "Ngày xưa Điện sinh ra từ sấm sét khi trời mưa (雨) trên cánh đồng lúa.",
    examples: [
      { word: "電車", reading: "densha", meaning: "Tàu điện" },
      { word: "電話", reading: "denwa", meaning: "Điện thoại" }
    ]
  },

  // ── CON NGƯỜI & BỘ PHẬN CƠ THỂ ──
  {
    id: 47, kanji: "人", meaning: "Nhân (Người)",
    on: "jin, nin", kun: "hito",
    mnemonic: "Hình ảnh một người đang bước đi với 2 chân.",
    examples: [
      { word: "人", reading: "hito", meaning: "Người" },
      { word: "日本人", reading: "nihonjin", meaning: "Người Nhật" }
    ]
  },
  {
    id: 48, kanji: "男", meaning: "Nam (Đàn ông)",
    on: "dan, nan", kun: "otoko",
    mnemonic: "Người đàn ông dùng lực (力) cày bừa trên cánh đồng ruộng (田).",
    examples: [
      { word: "男の人", reading: "otoko no hito", meaning: "Người đàn ông" }
    ]
  },
  {
    id: 49, kanji: "女", meaning: "Nữ (Phụ nữ)",
    on: "jo, nyo", kun: "onna, me",
    mnemonic: "Hình ảnh một người phụ nữ ngồi chéo chân vắt hai tay.",
    examples: [
      { word: "女の子", reading: "onna no ko", meaning: "Bé gái" },
      { word: "女性", reading: "josei", meaning: "Nữ giới" }
    ]
  },
  {
    id: 50, kanji: "父", meaning: "Phụ (Bố)",
    on: "fu", kun: "chichi",
    mnemonic: "Người Bố luôn chắp hai tay (bộ bát) dạy dỗ nghiêm khắc.",
    examples: [
      { word: "父", reading: "chichi", meaning: "Bố (của mình)" },
      { word: "お父さん", reading: "otousan", meaning: "Bố (của người khác)" }
    ]
  },
  {
    id: 51, kanji: "母", meaning: "Mẫu (Mẹ)",
    on: "bo", kun: "haha",
    mnemonic: "Người Mẹ mang thai bao bọc giọt máu bên trong.",
    examples: [
      { word: "母", reading: "haha", meaning: "Mẹ (của mình)" },
      { word: "お母さん", reading: "okaasan", meaning: "Mẹ (của người khác)" }
    ]
  },
  {
    id: 52, kanji: "子", meaning: "Tử (Con, Trẻ em)",
    on: "shi, su", kun: "ko",
    mnemonic: "Đứa trẻ đội mũ, dang hai tay ra.",
    examples: [
      { word: "子ども", reading: "kodomo", meaning: "Trẻ em" },
      { word: "女子", reading: "joshi", meaning: "Con gái" }
    ]
  },
  {
    id: 53, kanji: "目", meaning: "Mục (Mắt)",
    on: "moku, boku", kun: "me, ma-",
    mnemonic: "Vẽ lại hình ảnh con mắt dọc.",
    examples: [
      { word: "目", reading: "me", meaning: "Đôi mắt" }
    ]
  },
  {
    id: 54, kanji: "口", meaning: "Khẩu (Miệng)",
    on: "kou, ku", kun: "kuchi",
    mnemonic: "Hình ảnh cái miệng há vuông vức.",
    examples: [
      { word: "口", reading: "kuchi", meaning: "Miệng" },
      { word: "入口", reading: "iriguchi", meaning: "Lối vào" }
    ]
  },
  {
    id: 55, kanji: "耳", meaning: "Nhĩ (Tai)",
    on: "ji", kun: "mimi",
    mnemonic: "Vẽ lại hình dáng cấu trúc sụn của đôi tai.",
    examples: [
      { word: "耳", reading: "mimi", meaning: "Cái tai" }
    ]
  },
  {
    id: 56, kanji: "手", meaning: "Thủ (Tay)",
    on: "shu", kun: "te, ta-",
    mnemonic: "Hình ảnh bàn tay với các ngón tay.",
    examples: [
      { word: "手", reading: "te", meaning: "Bàn tay" },
      { word: "上手", reading: "jouzu", meaning: "Giỏi (Thượng thủ)" }
    ]
  },
  {
    id: 57, kanji: "足", meaning: "Túc (Chân, Đủ)",
    on: "soku", kun: "ashi, ta-riru",
    mnemonic: "Hình cái chân có cổ chân và bàn chân cắm xuống đất.",
    examples: [
      { word: "足", reading: "ashi", meaning: "Cái chân" },
      { word: "足りる", reading: "tariru", meaning: "Đủ" }
    ]
  },

  // ── ĐỘNG TỪ CƠ BẢN ──
  {
    id: 58, kanji: "行", meaning: "Hành (Đi)",
    on: "kou, gyou", kun: "i-ku, yu-ku, okona-u",
    mnemonic: "Hai người đang bước Đi trên một ngã tư đường.",
    examples: [
      { word: "行く", reading: "iku", meaning: "Đi" },
      { word: "銀行", reading: "ginkou", meaning: "Ngân hàng" }
    ]
  },
  {
    id: 59, kanji: "来", meaning: "Lai (Đến)",
    on: "rai", kun: "ku-ru, kita-ru",
    mnemonic: "Tương Lai là một cái cây (木) mọc lên tươi tốt.",
    examples: [
      { word: "来る", reading: "kuru", meaning: "Đến" },
      { word: "来年", reading: "rainen", meaning: "Năm sau" }
    ]
  },
  {
    id: 60, kanji: "帰", meaning: "Quy (Trở về)",
    on: "ki", kun: "kae-ru",
    mnemonic: "Người lính cầm cây đao (ヨ) dắt chổi (冖) quét đường về quê.",
    examples: [
      { word: "帰る", reading: "kaeru", meaning: "Trở về nhà" }
    ]
  },
  {
    id: 61, kanji: "食", meaning: "Thực (Ăn)",
    on: "shoku, jiki", kun: "ta-beru, ku-u",
    mnemonic: "Gom đồ vật tốt (良) bỏ xuống mái nhà (nhân) để Ăn.",
    examples: [
      { word: "食べる", reading: "taberu", meaning: "Ăn" },
      { word: "食事", reading: "shokuji", meaning: "Bữa ăn" }
    ]
  },
  {
    id: 62, kanji: "飲", meaning: "Ẩm (Uống)",
    on: "in", kun: "no-mu",
    mnemonic: "Thiếu thốn (欠) đồ Thực (Ăn) thì phải Uống nước.",
    examples: [
      { word: "飲む", reading: "nomu", meaning: "Uống" },
      { word: "飲み物", reading: "nomimono", meaning: "Đồ uống" }
    ]
  },
  {
    id: 63, kanji: "見", meaning: "Kiến (Nhìn)",
    on: "ken", kun: "mi-ru, mi-eru",
    mnemonic: "Con mắt (目) mọc đôi chân đi lang thang để Nhìn khắp nơi.",
    examples: [
      { word: "見る", reading: "miru", meaning: "Nhìn, xem" },
      { word: "見学", reading: "kengaku", meaning: "Kiến tập" }
    ]
  },
  {
    id: 64, kanji: "聞", meaning: "Văn (Nghe)",
    on: "bun, mon", kun: "ki-ku, ki-koeru",
    mnemonic: "Ghé lỗ Tai (耳) vào sát Cửa (門) để Nghe lén.",
    examples: [
      { word: "聞く", reading: "kiku", meaning: "Nghe, Hỏi" },
      { word: "新聞", reading: "shinbun", meaning: "Tờ báo (Tân Văn)" }
    ]
  },
  {
    id: 65, kanji: "読", meaning: "Độc (Đọc)",
    on: "doku, toku", kun: "yo-mu",
    mnemonic: "Bán (Mại) lời nói (Ngôn) cho người khác để họ Đọc.",
    examples: [
      { word: "読む", reading: "yomu", meaning: "Đọc" },
      { word: "読書", reading: "dokusho", meaning: "Đọc sách" }
    ]
  },
  {
    id: 66, kanji: "書", meaning: "Thư (Viết, Sách)",
    on: "sho", kun: "ka-ku",
    mnemonic: "Tay cầm cây bút lông dính mực (日) đang Viết.",
    examples: [
      { word: "書く", reading: "kaku", meaning: "Viết" },
      { word: "辞書", reading: "jisho", meaning: "Từ điển (Từ Thư)" }
    ]
  },
  {
    id: 67, kanji: "話", meaning: "Thoại (Nói chuyện)",
    on: "wa", kun: "hana-su, hanashi",
    mnemonic: "Dùng Ngôn (lời nói) phát ra từ Lưỡi (Thiệt) để Nói chuyện.",
    examples: [
      { word: "話す", reading: "hanasu", meaning: "Nói chuyện" },
      { word: "電話", reading: "denwa", meaning: "Điện thoại" }
    ]
  },
  {
    id: 68, kanji: "買", meaning: "Mãi (Mua)",
    on: "bai", kun: "ka-u",
    mnemonic: "Bỏ tiền (Bối) ra mua cái lưới (Mục ngang) bắt cá.",
    examples: [
      { word: "買う", reading: "kau", meaning: "Mua" },
      { word: "買い物", reading: "kaimono", meaning: "Mua sắm" }
    ]
  },
  {
    id: 69, kanji: "休", meaning: "Hưu (Nghỉ ngơi)",
    on: "kyuu", kun: "yasu-mu, yasu-mi",
    mnemonic: "Người (亻) dựa vào gốc cây (木) để Nghỉ ngơi.",
    examples: [
      { word: "休む", reading: "yasumu", meaning: "Nghỉ ngơi" },
      { word: "休み", reading: "yasumi", meaning: "Ngày nghỉ" }
    ]
  },

  // ── TÍNH TỪ ──
  {
    id: 70, kanji: "大", meaning: "Đại (To, Lớn)",
    on: "dai, tai", kun: "oo-kii",
    mnemonic: "Người (人) dang rộng hai tay thật To Lớn.",
    examples: [
      { word: "大きい", reading: "ookii", meaning: "To lớn" },
      { word: "大学", reading: "daigaku", meaning: "Đại học" }
    ]
  },
  {
    id: 71, kanji: "小", meaning: "Tiểu (Nhỏ)",
    on: "shou", kun: "chii-sai, ko-",
    mnemonic: "Mũi lao (hoặc hạt cát) bị tách ra thành 3 phần Nhỏ.",
    examples: [
      { word: "小さい", reading: "chiisai", meaning: "Nhỏ bé" },
      { word: "小学生", reading: "shougakusei", meaning: "Học sinh tiểu học" }
    ]
  },
  {
    id: 72, kanji: "高", meaning: "Cao (Cao, Đắt)",
    on: "kou", kun: "taka-i",
    mnemonic: "Cái tháp nhà lầu Cao vút có cả miệng cống.",
    examples: [
      { word: "高い", reading: "takai", meaning: "Cao / Đắt" },
      { word: "高校", reading: "koukou", meaning: "Trường cấp 3" }
    ]
  },
  {
    id: 73, kanji: "安", meaning: "An (Rẻ, Yên tâm)",
    on: "an", kun: "yasu-i",
    mnemonic: "Người Phụ nữ (女) ở dưới mái hiên nhà (宀) thì An tâm.",
    examples: [
      { word: "安い", reading: "yasui", meaning: "Rẻ" },
      { word: "安心", reading: "anshin", meaning: "An tâm" }
    ]
  },
  {
    id: 74, kanji: "新", meaning: "Tân (Mới)",
    on: "shin", kun: "atara-shii",
    mnemonic: "Dùng Rìu (Cân) chặt Cây (Mộc) Lập (Đứng) nên nhà Mới.",
    examples: [
      { word: "新しい", reading: "atarashii", meaning: "Mới mẻ" },
      { word: "新聞", reading: "shinbun", meaning: "Tờ báo" }
    ]
  },
  {
    id: 75, kanji: "古", meaning: "Cổ (Cũ, Xưa)",
    on: "ko", kun: "furu-i",
    mnemonic: "Lời nói qua miệng (口) của mười (十) đời truyền lại là chuyện Cổ.",
    examples: [
      { word: "古い", reading: "furui", meaning: "Cũ, cổ kính" }
    ]
  },
  {
    id: 76, kanji: "長", meaning: "Trường (Dài, Trưởng)",
    on: "chou", kun: "naga-i",
    mnemonic: "Người tóc dài (Trưởng) tay cầm cây trượng.",
    examples: [
      { word: "長い", reading: "nagai", meaning: "Dài" },
      { word: "社長", reading: "shachou", meaning: "Giám đốc" }
    ]
  },
  {
    id: 77, kanji: "多", meaning: "Đa (Nhiều)",
    on: "ta", kun: "oo-i",
    mnemonic: "Nhiều buổi tối (夕) xếp chồng lên nhau thành Đa.",
    examples: [
      { word: "多い", reading: "ooi", meaning: "Nhiều" },
      { word: "多分", reading: "tabun", meaning: "Có lẽ" }
    ]
  },
  {
    id: 78, kanji: "少", meaning: "Thiểu (Ít)",
    on: "shou", kun: "suku-nai, suko-shi",
    mnemonic: "Chữ Tiểu (Nhỏ) gạch thêm một gạch chéo đi thành quá Ít.",
    examples: [
      { word: "少ない", reading: "sukunai", meaning: "Ít" },
      { word: "少し", reading: "sukoshi", meaning: "Một chút" }
    ]
  },
  {
    id: 79, kanji: "白", meaning: "Bạch (Trắng)",
    on: "haku, byaku", kun: "shiro-i",
    mnemonic: "Ông Mặt trời (日) mọc thêm hạt mụn Trắng ở trên.",
    examples: [
      { word: "白い", reading: "shiroi", meaning: "Màu trắng" },
      { word: "面白い", reading: "omoshiroi", meaning: "Thú vị (Diện Bạch)" }
    ]
  },
  {
    id: 80, kanji: "明", meaning: "Minh (Sáng sủa)",
    on: "mei, myou", kun: "aka-rui",
    mnemonic: "Mặt trời (日) và Mặt trăng (月) cùng chiếu thì rất Sáng (Minh).",
    examples: [
      { word: "明るい", reading: "akarui", meaning: "Sáng sủa" },
      { word: "明日", reading: "ashita", meaning: "Ngày mai" }
    ]
  },

  // ── GIÁO DỤC, XÃ HỘI & TỪ VỰNG KHÁC ──
  {
    id: 81, kanji: "学", meaning: "Học (Học tập)",
    on: "gaku", kun: "mana-bu",
    mnemonic: "Đứa trẻ (Tử) đội mũ chóp (3 phẩy) đi Học.",
    examples: [
      { word: "学校", reading: "gakkou", meaning: "Trường học" },
      { word: "学生", reading: "gakusei", meaning: "Học sinh, Sinh viên" }
    ]
  },
  {
    id: 82, kanji: "校", meaning: "Hiệu (Trường học)",
    on: "kou", kun: "-",
    mnemonic: "Trường Học (Hiệu) trồng Cây (Mộc) để phụ huynh (Giao) đợi con.",
    examples: [
      { word: "学校", reading: "gakkou", meaning: "Trường học" },
      { word: "高校", reading: "koukou", meaning: "Trường cấp 3" }
    ]
  },
  {
    id: 83, kanji: "先", meaning: "Tiên (Trước)",
    on: "sen", kun: "saki",
    mnemonic: "Người đi Trước (Tiên) bỏ Đất (Thổ) xuống Dưới (Nhi).",
    examples: [
      { word: "先生", reading: "sensei", meaning: "Giáo viên (Tiên Sinh)" },
      { word: "先週", reading: "senshuu", meaning: "Tuần trước" }
    ]
  },
  {
    id: 84, kanji: "生", meaning: "Sinh (Sống, Sinh ra)",
    on: "sei, shou", kun: "i-kiru, u-mareru, nama",
    mnemonic: "Cây cối (Mộc) sinh trưởng mọc mầm trên mặt Đất (Nhất).",
    examples: [
      { word: "先生", reading: "sensei", meaning: "Giáo viên" },
      { word: "学生", reading: "gakusei", meaning: "Học sinh" }
    ]
  },
  {
    id: 85, kanji: "語", meaning: "Ngữ (Ngôn ngữ)",
    on: "go", kun: "kata-ru",
    mnemonic: "Lời nói (Ngôn) của Năm (Ngũ) cái Miệng (Khẩu) tạo thành Ngôn ngữ.",
    examples: [
      { word: "日本語", reading: "nihongo", meaning: "Tiếng Nhật" },
      { word: "英語", reading: "eigo", meaning: "Tiếng Anh" }
    ]
  },
  {
    id: 86, kanji: "本", meaning: "Bản (Sách, Nguồn gốc)",
    on: "hon", kun: "moto",
    mnemonic: "Gạch 1 nét ngang dưới cái cây (木) để chỉ cội rễ, nguồn gốc. Cây làm ra Sách.",
    examples: [
      { word: "本", reading: "hon", meaning: "Quyển sách" },
      { word: "日本", reading: "nihon", meaning: "Nhật Bản" }
    ]
  },
  {
    id: 87, kanji: "名", meaning: "Danh (Tên)",
    on: "mei, myou", kun: "na",
    mnemonic: "Đêm Tối (Tịch) gọi Tên (Danh) bằng Miệng (Khẩu) để nhận ra nhau.",
    examples: [
      { word: "名前", reading: "namae", meaning: "Tên" },
      { word: "有名", reading: "yuumei", meaning: "Nổi tiếng" }
    ]
  },
  {
    id: 88, kanji: "国", meaning: "Quốc (Đất nước)",
    on: "koku", kun: "kuni",
    mnemonic: "Quốc gia được bao quanh bởi ranh giới (Vi), bên trong có Ngọc bảo vệ.",
    examples: [
      { word: "国", reading: "kuni", meaning: "Đất nước" },
      { word: "外国", reading: "gaikoku", meaning: "Nước ngoài" }
    ]
  },
  {
    id: 89, kanji: "友", meaning: "Hữu (Bạn bè)",
    on: "yuu", kun: "tomo",
    mnemonic: "Hình ảnh hai cánh tay trái chéo nhau, thể hiện tình Bạn.",
    examples: [
      { word: "友達", reading: "tomodachi", meaning: "Bạn bè" },
      { word: "友人", reading: "yuujin", meaning: "Bạn (Hữu nhân)" }
    ]
  },
  {
    id: 90, kanji: "車", meaning: "Xa (Xe cộ)",
    on: "sha", kun: "kuruma",
    mnemonic: "Nhìn từ trên xuống, chiếc Xe ngựa có 2 bánh, trục và thùng xe.",
    examples: [
      { word: "車", reading: "kuruma", meaning: "Ô tô, xe cộ" },
      { word: "電車", reading: "densha", meaning: "Tàu điện" }
    ]
  },
  {
    id: 91, kanji: "駅", meaning: "Dịch (Nhà ga)",
    on: "eki", kun: "-",
    mnemonic: "Ở Nhà Ga (Dịch) có Ngựa (Mã) đứng cạnh thanh Thước (Xích).",
    examples: [
      { word: "駅", reading: "eki", meaning: "Nhà ga" },
      { word: "駅前", reading: "ekimae", meaning: "Trước nhà ga" }
    ]
  },
  {
    id: 92, kanji: "社", meaning: "Xã (Công ty, Xã hội)",
    on: "sha", kun: "yashiro",
    mnemonic: "Thần Đất (Thị) cầm cục Đất (Thổ) xây dựng Xã hội / Công ty.",
    examples: [
      { word: "会社", reading: "kaisha", meaning: "Công ty" },
      { word: "社長", reading: "shachou", meaning: "Giám đốc" }
    ]
  },
  {
    id: 93, kanji: "会", meaning: "Hội (Gặp gỡ)",
    on: "kai, e", kun: "a-u",
    mnemonic: "Hội ngộ dưới mái hiên nhà (Nhân nón) để cùng Nói (Vân).",
    examples: [
      { word: "会う", reading: "au", meaning: "Gặp gỡ" },
      { word: "会社", reading: "kaisha", meaning: "Công ty" }
    ]
  },
  {
    id: 94, kanji: "店", meaning: "Điếm (Cửa hàng)",
    on: "ten", kun: "mise",
    mnemonic: "Dưới mái nhà (Nghiễm) có Bói toán (Chiêm) mở Cửa hàng.",
    examples: [
      { word: "店", reading: "mise", meaning: "Cửa hàng" },
      { word: "喫茶店", reading: "kissaten", meaning: "Quán giải khát" }
    ]
  },
  {
    id: 95, kanji: "道", meaning: "Đạo (Con đường)",
    on: "dou, tou", kun: "michi",
    mnemonic: "Dùng cái Đầu (Thủ) suy nghĩ chọn Con đường (Xước) đi đúng Đạo lý.",
    examples: [
      { word: "道", reading: "michi", meaning: "Con đường" },
      { word: "書道", reading: "shodou", meaning: "Thư đạo (Viết thư pháp)" }
    ]
  },
  {
    id: 96, kanji: "言", meaning: "Ngôn (Nói, Lời)",
    on: "gon, gen", kun: "i-u, koto",
    mnemonic: "Từ miệng (Khẩu) phát ra những lời Nói (Các gạch ngang).",
    examples: [
      { word: "言う", reading: "iu", meaning: "Nói" },
      { word: "言葉", reading: "kotoba", meaning: "Từ vựng (Ngôn diệp)" }
    ]
  },
  {
    id: 97, kanji: "立", meaning: "Lập (Đứng)",
    on: "ritsu, ryuu", kun: "ta-tsu",
    mnemonic: "Một người dang tay đứng dang chân trên mặt đất.",
    examples: [
      { word: "立つ", reading: "tatsu", meaning: "Đứng lên" }
    ]
  },
  {
    id: 98, kanji: "気", meaning: "Khí (Khí chất)", // Dup 43 but part of some core lists. Replaced with related kanji.
    on: "ki", kun: "-",
    mnemonic: "Khí bốc lên.",
    examples: [{word:"元気", reading:"genki", meaning:"Khỏe mạnh"}]
  },
  {
    id: 99, kanji: "毎", meaning: "Mỗi (Mỗi, Mọi)",
    on: "mai", kun: "-",
    mnemonic: "Người Mẹ (Mẫu) Mỗi ngày đều đội nón phơi nắng làm việc.",
    examples: [
      { word: "毎日", reading: "mainichi", meaning: "Mỗi ngày" },
      { word: "毎月", reading: "maitsuki", meaning: "Mỗi tháng" }
    ]
  },
  {
    id: 100, kanji: "外", meaning: "Ngoại (Ngoài)",
    on: "gai", kun: "soto",
    mnemonic: "Ra Ngoài buổi tối (Tịch).",
    examples: [{word:"外国", reading:"gaikoku", meaning:"Nước ngoài"}]
  },
  {
    id: 101, kanji: "買", meaning: "Mãi (Mua)",
    on: "bai", kun: "ka-u",
    mnemonic: "Mua bằng tiền (Bối).",
    examples: [{word:"買う", reading:"kau", meaning:"Mua"}]
  },
  {
    id: 102, kanji: "出", meaning: "Xuất (Đi ra)",
    on: "shutsu, sui", kun: "de-ru, da-su",
    mnemonic: "Ngọn núi này chồng lên ngọn núi kia đùn Xuất ra.",
    examples: [
      { word: "出る", reading: "deru", meaning: "Đi ra ngoài" },
      { word: "出口", reading: "deguchi", meaning: "Cửa ra" }
    ]
  },
  {
    id: 103, kanji: "入", meaning: "Nhập (Đi vào)",
    on: "nyuu", kun: "hai-ru, i-reru",
    mnemonic: "Chữ Nhân (人) viết ngược lại để Đi vào.",
    examples: [
      { word: "入る", reading: "hairu", meaning: "Đi vào" },
      { word: "入口", reading: "iriguchi", meaning: "Cửa vào" }
    ]
  }
];
