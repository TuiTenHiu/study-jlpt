/**
 * data/particles.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Dữ liệu câu hỏi cho Particle Quiz (Trò chơi trắc nghiệm Trợ Từ).
 * Bám sát ngữ pháp 25 bài Minna no Nihongo.
 *
 * Cấu trúc mỗi câu hỏi:
 *   sentence    – câu tiếng Nhật, ô trống dùng ký tự "___"
 *   answer      – trợ từ đúng
 *   distractors – 3 trợ từ sai được chọn có chủ đích (dễ nhầm nhất)
 *   translation – nghĩa tiếng Việt của cả câu
 *   explanation – lý do dùng trợ từ đó
 *   lesson      – bài học tham chiếu
 *   difficulty  – 1=Dễ, 2=Trung bình, 3=Khó
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const particleQuestions = [

  // ═══════════════════════════════════════════════════════════════
  // BÀI 1 — は、も
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "わたし ___ マイク・ミラーです。",
    answer: "は",
    distractors: ["が", "も", "を"],
    translation: "Tôi là Mike Miller.",
    explanation: "は là trợ từ chủ đề (topic marker). Dùng để giới thiệu bản thân.",
    lesson: 1, difficulty: 1
  },
  {
    sentence: "サントスさん ___ ブラジルじんです。",
    answer: "は",
    distractors: ["が", "に", "で"],
    translation: "Anh Santos là người Brazil.",
    explanation: "は đứng sau chủ đề của câu, dùng để xác định danh tính.",
    lesson: 1, difficulty: 1
  },
  {
    sentence: "ミラーさん ___ かいしゃいんです。グプタさん ___ かいしゃいんです。",
    answer: "も",
    distractors: ["は", "が", "と"],
    translation: "Anh Miller là nhân viên. Anh Gupta cũng là nhân viên.",
    explanation: "も dùng khi chủ ngữ thứ hai có cùng trạng thái với chủ ngữ đã đề cập trước.",
    lesson: 1, difficulty: 1
  },
  {
    sentence: "サントスさん ___ がくせいじゃありません。",
    answer: "は",
    distractors: ["が", "も", "を"],
    translation: "Anh Santos không phải là sinh viên.",
    explanation: "は dùng trong cả câu phủ định để xác định chủ đề.",
    lesson: 1, difficulty: 2
  },
  {
    sentence: "ミラーさん ___ アメリカじんですか。",
    answer: "は",
    distractors: ["が", "も", "の"],
    translation: "Anh Miller có phải là người Mỹ không?",
    explanation: "は dùng trong câu hỏi xác nhận, đặt sau chủ đề cần hỏi.",
    lesson: 1, difficulty: 2
  },
  {
    sentence: "わたし ___ にほんごのがくせいです。あなた ___ にほんごのがくせいですか。",
    answer: "も",
    distractors: ["は", "が", "で"],
    translation: "Tôi là học sinh tiếng Nhật. Bạn cũng là học sinh tiếng Nhật à?",
    explanation: "も dùng khi muốn hỏi xem đối tượng kia có cùng thuộc tính không.",
    lesson: 1, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 2 — の (sở hữu / thuộc về)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "これ ___ わたし ___ ほんです。",
    answer: "の",
    distractors: ["は", "が", "を"],
    translation: "Đây là quyển sách của tôi.",
    explanation: "の nối hai danh từ, biểu thị quan hệ sở hữu.",
    lesson: 2, difficulty: 1
  },
  {
    sentence: "それ ___ だれ ___ じしょですか。",
    answer: "の",
    distractors: ["は", "が", "に"],
    translation: "Đó là từ điển của ai?",
    explanation: "の dùng để hỏi về sở hữu chủ: だれの + danh từ.",
    lesson: 2, difficulty: 1
  },
  {
    sentence: "あの かた ___ おなまえは なんですか。",
    answer: "の",
    distractors: ["は", "に", "で"],
    translation: "Tên của vị đó là gì?",
    explanation: "の nối danh từ với danh từ: 〔người〕の〔sở hữu vật〕.",
    lesson: 2, difficulty: 2
  },
  {
    sentence: "この かばん ___ いくらですか。",
    answer: "は",
    distractors: ["の", "が", "を"],
    translation: "Cái túi này giá bao nhiêu?",
    explanation: "は đứng sau chủ đề (この かばん) để đặt câu hỏi về nó.",
    lesson: 2, difficulty: 2
  },
  {
    sentence: "これ ___ にほん ___ じどうしゃです。",
    answer: "の",
    distractors: ["は", "に", "で"],
    translation: "Đây là xe ô tô của Nhật.",
    explanation: "の nối danh từ xuất xứ/loại với danh từ chính: にほんの〔vật〕.",
    lesson: 2, difficulty: 2
  },
  {
    sentence: "あれ ___ だれ ___ カメラですか。わたし ___ カメラです。",
    answer: "の",
    distractors: ["は", "が", "を"],
    translation: "Cái máy ảnh kia là của ai? Là của tôi.",
    explanation: "の biểu thị sở hữu. わたしの có thể đứng một mình thay cho 'わたしのカメラ'.",
    lesson: 2, difficulty: 3
  },
  {
    sentence: "これ ___ でんきのかいしゃ ___ パンフレットです。",
    answer: "の",
    distractors: ["は", "に", "で"],
    translation: "Đây là tờ quảng cáo của công ty điện.",
    explanation: "の dùng hai lần để nối chuỗi danh từ: A の B の C.",
    lesson: 2, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 3 — ここ/そこ/あそこ は、N に います/あります、の (vị trí)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "うけつけ ___ どこですか。",
    answer: "は",
    distractors: ["が", "に", "で"],
    translation: "Quầy lễ tân ở đâu?",
    explanation: "は đứng sau chủ đề うけつけ khi hỏi về vị trí.",
    lesson: 3, difficulty: 1
  },
  {
    sentence: "おてあらい ___ あそこです。",
    answer: "は",
    distractors: ["が", "に", "で"],
    translation: "Nhà vệ sinh ở đằng kia.",
    explanation: "は xác định chủ đề và trả lời câu hỏi về vị trí.",
    lesson: 3, difficulty: 1
  },
  {
    sentence: "ここ ___ なんかいですか。",
    answer: "は",
    distractors: ["が", "に", "で"],
    translation: "Đây là tầng mấy?",
    explanation: "は dùng sau から chỉ vị trí ここ/そこ/あそこ.",
    lesson: 3, difficulty: 2
  },
  {
    sentence: "エレベーター ___ あそこ ___ あります。",
    answer: "に",
    distractors: ["で", "は", "が"],
    translation: "Thang máy ở đằng kia.",
    explanation: "に biểu thị địa điểm tồn tại khi dùng với あります.",
    lesson: 3, difficulty: 2
  },
  {
    sentence: "でぱーと ___ なんかい ___ しょくどうが ありますか。",
    answer: "の",
    distractors: ["に", "で", "は"],
    translation: "Nhà ăn ở tầng mấy của trung tâm thương mại?",
    explanation: "の nối デパート với なんかい để chỉ tầng thuộc tòa nhà đó.",
    lesson: 3, difficulty: 3
  },
  {
    sentence: "ミラーさん ___ じむしょ ___ います。",
    answer: "に",
    distractors: ["で", "は", "を"],
    translation: "Anh Miller ở văn phòng.",
    explanation: "に chỉ địa điểm tồn tại với います (dùng cho người, động vật).",
    lesson: 3, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 4 — に (thời gian), を (tân ngữ), で (phương tiện)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "まいあさ 7じ ___ おきます。",
    answer: "に",
    distractors: ["で", "は", "を"],
    translation: "Tôi thức dậy lúc 7 giờ mỗi buổi sáng.",
    explanation: "に dùng sau mốc thời gian cụ thể (có con số) như giờ, thứ, ngày.",
    lesson: 4, difficulty: 1
  },
  {
    sentence: "かようび ___ えいごを べんきょうします。",
    answer: "に",
    distractors: ["で", "は", "が"],
    translation: "Thứ Ba tôi học tiếng Anh.",
    explanation: "に dùng sau thứ trong tuần — mốc thời gian cụ thể.",
    lesson: 4, difficulty: 1
  },
  {
    sentence: "なんじ ___ ねますか。",
    answer: "に",
    distractors: ["で", "は", "の"],
    translation: "Bạn ngủ lúc mấy giờ?",
    explanation: "に dùng khi hỏi về mốc thời gian cụ thể.",
    lesson: 4, difficulty: 2
  },
  {
    sentence: "まいにち テレビ ___ みます。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Hàng ngày tôi xem tivi.",
    explanation: "を chỉ tân ngữ trực tiếp của hành động みます.",
    lesson: 4, difficulty: 2
  },
  {
    sentence: "でんしゃ ___ かいしゃへ いきます。",
    answer: "で",
    distractors: ["に", "を", "へ"],
    translation: "Tôi đi làm bằng tàu điện.",
    explanation: "で chỉ phương tiện đi lại — khác với に chỉ điểm đến.",
    lesson: 4, difficulty: 2
  },
  {
    sentence: "どようび ___ しごとを しますか。いいえ、どようび ___ やすみます。",
    answer: "に",
    distractors: ["で", "は", "を"],
    translation: "Thứ Bảy bạn có đi làm không? Không, thứ Bảy tôi nghỉ.",
    explanation: "に sau どようび (mốc thời gian). Chú ý: まいにち、あした không dùng に.",
    lesson: 4, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 5 — へ (hướng), で (phương tiện/công cụ), と (cùng ai)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "わたしは きょうと ___ いきます。",
    answer: "へ",
    distractors: ["に", "で", "を"],
    translation: "Tôi đi đến Kyoto.",
    explanation: "へ (đọc là 'e') biểu thị hướng/điểm đến của sự di chuyển.",
    lesson: 5, difficulty: 1
  },
  {
    sentence: "ひとりで くにへ かえります。",
    answer: "で",
    distractors: ["と", "に", "へ"],
    translation: "Tôi một mình về nước.",
    explanation: "ひとりで = 'một mình'. で đây chỉ cách thức/tình trạng.",
    lesson: 5, difficulty: 1
  },
  {
    sentence: "かぞく ___ にほんへ きました。",
    answer: "と",
    distractors: ["で", "に", "が"],
    translation: "Tôi đến Nhật cùng gia đình.",
    explanation: "と chỉ người cùng thực hiện hành động, đứng sau danh từ chỉ người.",
    lesson: 5, difficulty: 2
  },
  {
    sentence: "しんかんせん ___ とうきょうへ いきます。",
    answer: "で",
    distractors: ["に", "へ", "を"],
    translation: "Tôi đi Tokyo bằng tàu Shinkansen.",
    explanation: "で chỉ phương tiện đi lại. Dễ nhầm với に nhưng に chỉ điểm đến.",
    lesson: 5, difficulty: 2
  },
  {
    sentence: "ともだち ___ えき ___ あいます。",
    answer: "と",
    distractors: ["に", "で", "が"],
    translation: "Tôi gặp bạn ở nhà ga.",
    explanation: "と chỉ người cùng/đối tượng trong hành động あいます.",
    lesson: 5, difficulty: 3
  },
  {
    sentence: "なに ___ こうべへ いきましたか。ひこうき ___ いきました。",
    answer: "で",
    distractors: ["に", "を", "へ"],
    translation: "Bạn đi Kobe bằng gì? Tôi đi bằng máy bay.",
    explanation: "なにで = 'bằng gì'. で hỏi và trả lời về phương tiện.",
    lesson: 5, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 6 — を (tân ngữ động từ), で (địa điểm hành động)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "えき ___ しんぶん ___ かいます。",
    answer: "で",
    distractors: ["に", "へ", "は"],
    translation: "Tôi mua báo ở nhà ga.",
    explanation: "で chỉ địa điểm xảy ra hành động. Khác với に (địa điểm tồn tại).",
    lesson: 6, difficulty: 1
  },
  {
    sentence: "コーヒー ___ のみます。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Tôi uống cà phê.",
    explanation: "を chỉ tân ngữ trực tiếp — vật/người chịu tác động của hành động.",
    lesson: 6, difficulty: 1
  },
  {
    sentence: "レストラン ___ ひるごはん ___ たべます。",
    answer: "で",
    distractors: ["に", "へ", "の"],
    translation: "Tôi ăn cơm trưa ở nhà hàng.",
    explanation: "で chỉ địa điểm diễn ra hành động たべます.",
    lesson: 6, difficulty: 2
  },
  {
    sentence: "にちようび ___ なに ___ しますか。",
    answer: "を",
    distractors: ["が", "に", "は"],
    translation: "Chủ nhật bạn làm gì?",
    explanation: "なにを します? — を đứng trước động từ します.",
    lesson: 6, difficulty: 2
  },
  {
    sentence: "いっしょに テニス ___ しませんか。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Cùng chơi tennis không?",
    explanation: "テニスをします = 'chơi tennis'. を dùng với thể thao + します.",
    lesson: 6, difficulty: 2
  },
  {
    sentence: "としょかん ___ ほん ___ よみます。うち ___ べんきょう ___ しません。",
    answer: "で",
    distractors: ["に", "を", "は"],
    translation: "Tôi đọc sách ở thư viện. Tôi không học ở nhà.",
    explanation: "で chỉ địa điểm hành động — không nhầm với に (tồn tại).",
    lesson: 6, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 7 — に (người nhận), から/に (nguồn gốc), で (công cụ)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "はは ___ はな ___ あげます。",
    answer: "に",
    distractors: ["を", "が", "から"],
    translation: "Tôi tặng hoa cho mẹ.",
    explanation: "に chỉ người nhận trong các động từ あげます/かします/おしえます.",
    lesson: 7, difficulty: 1
  },
  {
    sentence: "ともだち ___ ほん ___ かりました。",
    answer: "に",
    distractors: ["を", "から", "で"],
    translation: "Tôi mượn sách từ bạn.",
    explanation: "に (hoặc から) chỉ nguồn gốc khi dùng với もらいます/かります.",
    lesson: 7, difficulty: 1
  },
  {
    sentence: "はし ___ たべます。",
    answer: "で",
    distractors: ["を", "に", "が"],
    translation: "Tôi ăn bằng đũa.",
    explanation: "で chỉ công cụ/phương tiện dùng để thực hiện hành động.",
    lesson: 7, difficulty: 2
  },
  {
    sentence: "にほんご ___ レポートを かきます。",
    answer: "で",
    distractors: ["を", "に", "が"],
    translation: "Tôi viết báo cáo bằng tiếng Nhật.",
    explanation: "で chỉ ngôn ngữ/công cụ dùng để thực hiện hành động.",
    lesson: 7, difficulty: 2
  },
  {
    sentence: "きむらさん ___ えいご ___ ならいます。",
    answer: "に",
    distractors: ["から", "で", "が"],
    translation: "Tôi học tiếng Anh từ anh Kimura.",
    explanation: "に sau người dạy khi dùng ならいます — người dạy là nguồn gốc.",
    lesson: 7, difficulty: 3
  },
  {
    sentence: "ちち ___ とけい ___ もらいました。",
    answer: "に",
    distractors: ["から", "を", "が"],
    translation: "Tôi được bố tặng đồng hồ.",
    explanation: "に/から chỉ người cho trong もらいます. Cả に và から đều dùng được nhưng に thân mật hơn.",
    lesson: 7, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 8 — は/が với tính từ, の kết nối
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "ふじさん ___ たかいです。",
    answer: "は",
    distractors: ["が", "の", "を"],
    translation: "Núi Phú Sĩ cao.",
    explanation: "は dùng sau chủ đề khi miêu tả tính chất chung.",
    lesson: 8, difficulty: 1
  },
  {
    sentence: "このまち ___ しずかですか。",
    answer: "は",
    distractors: ["が", "に", "で"],
    translation: "Thị trấn này có yên tĩnh không?",
    explanation: "は đứng sau このまち để hỏi về đặc điểm của nó.",
    lesson: 8, difficulty: 2
  },
  {
    sentence: "にほん ___ りょうり ___ なに ___ すきですか。",
    answer: "の",
    distractors: ["は", "が", "を"],
    translation: "Trong các món ăn Nhật, bạn thích món gì?",
    explanation: "の nối にほん với りょうり: 'món ăn của Nhật'.",
    lesson: 8, difficulty: 2
  },
  {
    sentence: "このほん ___ おもしろくないです。あまり べんり ___ ありません。",
    answer: "じゃ",
    distractors: ["は", "が", "で"],
    translation: "Quyển sách này không hay. Không tiện lắm.",
    explanation: "じゃ ありません là phủ định của tính từ な: きれい → きれいじゃありません.",
    lesson: 8, difficulty: 3
  },
  {
    sentence: "ワットさん ___ しんせつですが、すこし きびしいです。",
    answer: "は",
    distractors: ["が", "も", "の"],
    translation: "Thầy Watt tốt bụng nhưng hơi nghiêm khắc.",
    explanation: "は dùng để đặt chủ đề và tạo đối lập qua が (nhưng).",
    lesson: 8, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 9 — が (năng lực/cảm xúc/sở hữu), から (lý do)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "わたしは ダンス ___ すきです。",
    answer: "が",
    distractors: ["を", "は", "に"],
    translation: "Tôi thích nhảy.",
    explanation: "が dùng với すき/きらい/じょうず/へた/ほしい — không dùng を.",
    lesson: 9, difficulty: 1
  },
  {
    sentence: "かれは えいご ___ じょうずです。",
    answer: "が",
    distractors: ["を", "は", "で"],
    translation: "Anh ấy giỏi tiếng Anh.",
    explanation: "が dùng với tính từ năng lực じょうず/へた.",
    lesson: 9, difficulty: 1
  },
  {
    sentence: "おかね ___ ありますから、りょこうします。",
    answer: "が",
    distractors: ["は", "を", "に"],
    translation: "Vì có tiền nên tôi đi du lịch.",
    explanation: "が dùng với あります để chỉ sự sở hữu/tồn tại.",
    lesson: 9, difficulty: 2
  },
  {
    sentence: "じかん ___ ありませんから、えいが ___ みません。",
    answer: "が",
    distractors: ["は", "を", "に"],
    translation: "Vì không có thời gian nên tôi không xem phim.",
    explanation: "が + ありません biểu thị không có/không sở hữu. から = vì.",
    lesson: 9, difficulty: 2
  },
  {
    sentence: "わたしは クラシック ___ すきですが、ジャズ ___ あまり すきじゃありません。",
    answer: "が",
    distractors: ["を", "は", "も"],
    translation: "Tôi thích nhạc cổ điển nhưng không thích nhạc jazz lắm.",
    explanation: "が dùng với すき trong cả hai mệnh đề, tạo đối lập qua が (nhưng).",
    lesson: 9, difficulty: 3
  },
  {
    sentence: "にほんご ___ わかりますか。すこし わかります。",
    answer: "が",
    distractors: ["を", "は", "に"],
    translation: "Bạn có hiểu tiếng Nhật không? Hiểu một chút.",
    explanation: "が dùng với わかります — đây là trường hợp đặc biệt, không dùng を.",
    lesson: 9, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 10 — が (tồn tại), に (địa điểm tồn tại), の (vị trí)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "つくえ ___ うえ ___ ほんが あります。",
    answer: "の",
    distractors: ["に", "で", "は"],
    translation: "Trên bàn có quyển sách.",
    explanation: "の nối danh từ với từ chỉ vị trí: つくえのうえ = 'trên bàn'.",
    lesson: 10, difficulty: 1
  },
  {
    sentence: "へや ___ ねこ ___ います。",
    answer: "に",
    distractors: ["で", "は", "が"],
    translation: "Trong phòng có con mèo.",
    explanation: "に chỉ địa điểm tồn tại với います/あります.",
    lesson: 10, difficulty: 1
  },
  {
    sentence: "じむしょ ___ ミラーさん ___ います。",
    answer: "に",
    distractors: ["で", "は", "の"],
    translation: "Ở văn phòng có anh Miller.",
    explanation: "に biểu thị nơi tồn tại. Khác với で biểu thị nơi hành động diễn ra.",
    lesson: 10, difficulty: 2
  },
  {
    sentence: "えき ___ まえ ___ こうえん ___ あります。",
    answer: "の",
    distractors: ["に", "で", "は"],
    translation: "Trước nhà ga có công viên.",
    explanation: "の nối đối tượng với từ chỉ vị trí: えきのまえ = 'trước nhà ga'.",
    lesson: 10, difficulty: 2
  },
  {
    sentence: "こうえん ___ こども ___ あそんでいます。",
    answer: "で",
    distractors: ["に", "は", "が"],
    translation: "Bọn trẻ đang chơi ở công viên.",
    explanation: "で chỉ địa điểm diễn ra hành động (あそぶ). Khác với に (tồn tại với います).",
    lesson: 10, difficulty: 3
  },
  {
    sentence: "はこ ___ なか ___ てがみ ___ ありますが、はこ ___ そと ___ なにも ありません。",
    answer: "の",
    distractors: ["に", "で", "は"],
    translation: "Trong hộp có thư, nhưng ngoài hộp không có gì.",
    explanation: "の nối danh từ với từ chỉ vị trí: はこのなか/そと.",
    lesson: 10, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 11 — から/まで (phạm vi thời gian/không gian)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "ぎんこうは 9じ ___ 3じ ___ です。",
    answer: "から",
    distractors: ["まで", "に", "で"],
    translation: "Ngân hàng từ 9 giờ đến 3 giờ.",
    explanation: "から chỉ điểm bắt đầu (từ). Dùng cặp から〜まで = từ〜đến.",
    lesson: 11, difficulty: 1
  },
  {
    sentence: "ぎんこうは 9じから 3じ ___ です。",
    answer: "まで",
    distractors: ["から", "に", "で"],
    translation: "Ngân hàng từ 9 giờ đến 3 giờ.",
    explanation: "まで chỉ điểm kết thúc (đến). Dùng cặp から〜まで.",
    lesson: 11, difficulty: 1
  },
  {
    sentence: "とうきょう ___ おおさか ___ のぞみで 2じかんです。",
    answer: "から",
    distractors: ["まで", "に", "で"],
    translation: "Từ Tokyo đến Osaka mất 2 tiếng bằng Nozomi.",
    explanation: "から chỉ điểm xuất phát trong không gian.",
    lesson: 11, difficulty: 2
  },
  {
    sentence: "にほんご ___ クラスは なんじ ___ なんじまでですか。",
    answer: "から",
    distractors: ["まで", "に", "は"],
    translation: "Lớp tiếng Nhật từ mấy giờ đến mấy giờ?",
    explanation: "なんじから〜なんじまで: cách hỏi thời gian bắt đầu và kết thúc.",
    lesson: 11, difficulty: 2
  },
  {
    sentence: "かいぎは 10じ ___ はじまって、12じ ___ おわります。",
    answer: "から",
    distractors: ["まで", "に", "で"],
    translation: "Cuộc họp bắt đầu từ 10 giờ và kết thúc lúc 12 giờ.",
    explanation: "から + はじまる: bắt đầu từ. Chú ý: kết thúc dùng に + おわる.",
    lesson: 11, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 12 — より (so sánh), のほうが (hơn)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "このかばん ___ あのかばん ___ おもいです。",
    answer: "は",
    distractors: ["より", "が", "の"],
    translation: "Cái túi này nặng hơn cái túi kia.",
    explanation: "N1 は N2 より + adj: N1 thì ... hơn N2.",
    lesson: 12, difficulty: 1
  },
  {
    sentence: "バス ___ でんしゃのほうが はやいです。",
    answer: "より",
    distractors: ["から", "に", "で"],
    translation: "Tàu điện nhanh hơn xe buýt.",
    explanation: "N2 より N1のほうが adj: N1 hơn N2. より đứng sau điều kém hơn.",
    lesson: 12, difficulty: 1
  },
  {
    sentence: "にほん ___ ベトナムのほうが ひとが おおいです。",
    answer: "より",
    distractors: ["から", "に", "は"],
    translation: "Việt Nam đông dân hơn Nhật Bản.",
    explanation: "より đứng sau N2 (điều kém hơn), ほうが đứng sau N1 (điều hơn).",
    lesson: 12, difficulty: 2
  },
  {
    sentence: "りんご ___ オレンジ ___ どちらが すきですか。",
    answer: "と",
    distractors: ["や", "より", "か"],
    translation: "Bạn thích táo hay cam hơn?",
    explanation: "AとBとどちら/どちらが: cách hỏi so sánh 2 lựa chọn.",
    lesson: 12, difficulty: 2
  },
  {
    sentence: "きせつの なかで、なつ ___ ふゆ ___ どちらが すきですか。ふゆ ___ ほうが すきです。",
    answer: "と",
    distractors: ["より", "や", "か"],
    translation: "Trong các mùa, bạn thích mùa hè hay mùa đông hơn? Tôi thích mùa đông hơn.",
    explanation: "と dùng để liệt kê 2 lựa chọn trong câu hỏi so sánh.",
    lesson: 12, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 13 — が (ほしい/たい), に (mục đích đi)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "わたしは あたらしい パソコン ___ ほしいです。",
    answer: "が",
    distractors: ["を", "は", "に"],
    translation: "Tôi muốn có máy tính mới.",
    explanation: "が dùng với ほしい — tương tự すき, không dùng を.",
    lesson: 13, difficulty: 1
  },
  {
    sentence: "おきなわ ___ いきたいです。",
    answer: "へ",
    distractors: ["に", "を", "が"],
    translation: "Tôi muốn đi Okinawa.",
    explanation: "へ hoặc に đều dùng được với いきたい. へ nhấn mạnh hướng đi.",
    lesson: 13, difficulty: 2
  },
  {
    sentence: "デパート ___ かいもの ___ いきます。",
    answer: "へ",
    distractors: ["に", "で", "を"],
    translation: "Tôi đi trung tâm thương mại để mua sắm.",
    explanation: "へ chỉ điểm đến. かいもの に いく = đi để mua sắm (mục đích).",
    lesson: 13, difficulty: 2
  },
  {
    sentence: "かれ ___ あいたいです。でも じかん ___ ありません。",
    answer: "に",
    distractors: ["を", "が", "と"],
    translation: "Tôi muốn gặp anh ấy. Nhưng không có thời gian.",
    explanation: "に dùng với あいたい — người gặp dùng に.",
    lesson: 13, difficulty: 3
  },
  {
    sentence: "なに ___ いちばん たべたいですか。すしと さしみ ___ たべたいです。",
    answer: "が",
    distractors: ["を", "は", "に"],
    translation: "Bạn muốn ăn gì nhất? Tôi muốn ăn sushi và sashimi.",
    explanation: "が với たい (muốn làm) — trong văn nói cũng có thể dùng を nhưng が chuẩn hơn.",
    lesson: 13, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 14 — て形 (liệt kê), Vている (đang làm)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "ミラーさんは いま でんわ ___ かけています。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Anh Miller đang gọi điện thoại.",
    explanation: "でんわをかける = 'gọi điện'. を chỉ tân ngữ của かける.",
    lesson: 14, difficulty: 1
  },
  {
    sentence: "ここ ___ なまえ ___ かいてください。",
    answer: "に",
    distractors: ["で", "は", "を"],
    translation: "Hãy viết tên vào đây.",
    explanation: "に chỉ điểm đến/nơi ghi/viết vào: ここに = 'vào đây'.",
    lesson: 14, difficulty: 2
  },
  {
    sentence: "えき ___ でて、みぎ ___ まがってください。",
    answer: "を",
    distractors: ["に", "で", "が"],
    translation: "Ra khỏi nhà ga rồi rẽ phải.",
    explanation: "を dùng với động từ di chuyển qua không gian: でる/まがる/わたる + を.",
    lesson: 14, difficulty: 3
  },
  {
    sentence: "ちょっと まってください。いま しゃしん ___ とっています。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Xin chờ một chút. Tôi đang chụp ảnh.",
    explanation: "しゃしんをとる = 'chụp ảnh'. を chỉ tân ngữ trực tiếp.",
    lesson: 14, difficulty: 2
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 15 — てもいい, てはいけない, Vている (trạng thái)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "わたしは ハノイ ___ すんでいます。",
    answer: "に",
    distractors: ["で", "へ", "は"],
    translation: "Tôi đang sống ở Hà Nội.",
    explanation: "に với すんでいます — nơi cư trú dùng に, không dùng で.",
    lesson: 15, difficulty: 2
  },
  {
    sentence: "ここ ___ たばこ ___ すってはいけません。",
    answer: "で",
    distractors: ["に", "は", "を"],
    translation: "Không được hút thuốc ở đây.",
    explanation: "で chỉ địa điểm diễn ra hành động (hút thuốc).",
    lesson: 15, difficulty: 2
  },
  {
    sentence: "しゃしん ___ とっても いいですか。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Tôi chụp ảnh có được không?",
    explanation: "しゃしんをとる = chụp ảnh. を + Vても いいですか: xin phép làm gì.",
    lesson: 15, difficulty: 2
  },
  {
    sentence: "かれは もう けっこん ___ しています。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Anh ấy đã kết hôn rồi.",
    explanation: "けっこんをしています = trạng thái đã kết hôn (kết quả của hành động quá khứ).",
    lesson: 15, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 16 — てから (sau khi), Vて liệt kê
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "ごはん ___ たべてから、はをみがきます。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Sau khi ăn cơm, tôi đánh răng.",
    explanation: "を chỉ tân ngữ của たべて.",
    lesson: 16, difficulty: 1
  },
  {
    sentence: "でんき ___ けしてから、きょうしつ ___ でます。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Sau khi tắt điện, ra khỏi lớp học.",
    explanation: "を dùng hai lần: でんきをけす (tắt điện) và きょうしつをでる (ra khỏi phòng).",
    lesson: 16, difficulty: 2
  },
  {
    sentence: "あさ ジョギング ___ して、シャワー ___ あびて、かいしゃへ いきます。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Sáng tôi chạy bộ, tắm rồi đến công ty.",
    explanation: "を dùng với ジョギング (chạy bộ) và シャワー (tắm).",
    lesson: 16, difficulty: 2
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 17 — なければならない, ないでください
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "まいにち くすり ___ のまなければなりません。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Tôi phải uống thuốc mỗi ngày.",
    explanation: "を chỉ tân ngữ của のむ.",
    lesson: 17, difficulty: 2
  },
  {
    sentence: "ここ ___ しゃしん ___ とらないでください。",
    answer: "で",
    distractors: ["に", "は", "が"],
    translation: "Xin đừng chụp ảnh ở đây.",
    explanation: "で chỉ địa điểm của hành động chụp ảnh.",
    lesson: 17, difficulty: 2
  },
  {
    sentence: "パスポート ___ みせなければなりませんか。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Tôi có phải trình hộ chiếu không?",
    explanation: "を chỉ tân ngữ của みせる (trình/đưa xem).",
    lesson: 17, difficulty: 2
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 18 — ことができる, まえに
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "ミラーさんは かんじ ___ よむことが できます。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Anh Miller có thể đọc chữ Hán.",
    explanation: "を chỉ tân ngữ của よむ trong cấu trúc ことができます.",
    lesson: 18, difficulty: 2
  },
  {
    sentence: "ねる まえ ___ にっき ___ かきます。",
    answer: "に",
    distractors: ["で", "は", "の"],
    translation: "Trước khi đi ngủ, tôi viết nhật ký.",
    explanation: "まえに = trước khi. に đứng sau まえ trong cấu trúc Vる まえに.",
    lesson: 18, difficulty: 2
  },
  {
    sentence: "りょうり ___ つくることが できますか。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Bạn có thể nấu ăn không?",
    explanation: "を chỉ tân ngữ của つくる trong cấu trúc ことができますか.",
    lesson: 18, difficulty: 1
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 19 — たことがある, なる
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "うま ___ のったことがあります。",
    answer: "に",
    distractors: ["を", "で", "が"],
    translation: "Tôi đã từng cưỡi ngựa.",
    explanation: "に dùng với のる — phương tiện/vật cưỡi dùng に.",
    lesson: 19, difficulty: 2
  },
  {
    sentence: "にほん ___ いったことがありますか。",
    answer: "へ",
    distractors: ["に", "を", "から"],
    translation: "Bạn đã từng đến Nhật chưa?",
    explanation: "へ/に đều dùng được với いく. に nhấn mạnh điểm đến, へ nhấn mạnh hướng.",
    lesson: 19, difficulty: 2
  },
  {
    sentence: "さむく ___ なります。",
    answer: "なり",
    distractors: ["に", "を", "が"],
    translation: "Trời trở nên lạnh.",
    explanation: "Adj-i く + なる: trở nên. さむい → さむく + なります.",
    lesson: 19, difficulty: 3
  },
  {
    sentence: "にほんご ___ じょうず ___ なりたいです。",
    answer: "に",
    distractors: ["が", "を", "で"],
    translation: "Tôi muốn trở nên giỏi tiếng Nhật.",
    explanation: "Adj-na に + なる: trở nên. じょうず (na adj) → じょうずに + なる.",
    lesson: 19, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 20-21 — と思います, と言います
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "にほんは こうつうが べんりだ ___ おもいます。",
    answer: "と",
    distractors: ["が", "を", "に"],
    translation: "Tôi nghĩ giao thông ở Nhật thuận tiện.",
    explanation: "と おもいます: trích dẫn suy nghĩ/ý kiến. と đứng sau nội dung nghĩ.",
    lesson: 21, difficulty: 2
  },
  {
    sentence: "やまださんは らいしゅう しゅっちょうする ___ いいました。",
    answer: "と",
    distractors: ["が", "を", "に"],
    translation: "Anh Yamada nói là tuần sau sẽ đi công tác.",
    explanation: "と いいます: trích dẫn lời nói. と đứng sau nội dung lời nói.",
    lesson: 21, difficulty: 2
  },
  {
    sentence: "あした あめが ふる ___ おもいますか。",
    answer: "と",
    distractors: ["が", "を", "か"],
    translation: "Bạn có nghĩ ngày mai trời mưa không?",
    explanation: "と おもいますか: hỏi ý kiến. と đứng sau nội dung muốn hỏi ý kiến.",
    lesson: 21, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 22 — Mệnh đề định ngữ (N修飾)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "これはミラーさん ___ かいた えです。",
    answer: "が",
    distractors: ["は", "の", "を"],
    translation: "Đây là bức tranh mà anh Miller đã vẽ.",
    explanation: "が trong mệnh đề định ngữ: ミラーさんがかいた〔え〕— chủ ngữ của mệnh đề phụ dùng が.",
    lesson: 22, difficulty: 3
  },
  {
    sentence: "わたし ___ せんしゅう みた えいが ___ おもしろかったです。",
    answer: "が",
    distractors: ["は", "の", "を"],
    translation: "Bộ phim tôi xem tuần trước thật thú vị.",
    explanation: "が trong mệnh đề định ngữ. わたしがみた = 'tôi đã xem' bổ nghĩa cho えいが.",
    lesson: 22, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 23 — とき, と (hệ quả)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "ひまな ___ ビデオをみます。",
    answer: "とき",
    distractors: ["に", "は", "で"],
    translation: "Khi rảnh rỗi tôi xem video.",
    explanation: "とき = 'khi'. Adj-naなとき / Adj-iいとき.",
    lesson: 23, difficulty: 2
  },
  {
    sentence: "このボタン ___ おすと、おつりが でます。",
    answer: "を",
    distractors: ["が", "に", "で"],
    translation: "Hễ ấn nút này là tiền thừa sẽ ra.",
    explanation: "を chỉ tân ngữ của おす (ấn). と tạo cấu trúc điều kiện tất yếu.",
    lesson: 23, difficulty: 2
  },
  {
    sentence: "ふゆ ___ なると、さむくなります。",
    answer: "に",
    distractors: ["が", "は", "で"],
    translation: "Hễ đến mùa đông là trời trở nên lạnh.",
    explanation: "に + なる: trở thành. ふゆになる = trở thành mùa đông.",
    lesson: 23, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 24 — てあげる/もらう/くれる
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "わたしはたなかさん ___ りょうりをつくって もらいました。",
    answer: "に",
    distractors: ["から", "が", "で"],
    translation: "Tôi được anh Tanaka nấu ăn cho.",
    explanation: "に + もらいます: người mình nhận ơn từ dùng に.",
    lesson: 24, difficulty: 2
  },
  {
    sentence: "たなかさんはわたし ___ じてんしゃをなおして くれました。",
    answer: "に",
    distractors: ["が", "を", "で"],
    translation: "Anh Tanaka đã sửa xe đạp cho tôi.",
    explanation: "に + くれます: người nhận ơn dùng に (thường là người nói hoặc gần người nói).",
    lesson: 24, difficulty: 2
  },
  {
    sentence: "ともだち ___ えいご ___ おしえて あげました。",
    answer: "に",
    distractors: ["が", "を", "で"],
    translation: "Tôi dạy tiếng Anh cho bạn.",
    explanation: "に + あげます: người nhận ơn dùng に.",
    lesson: 24, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // BÀI 25 — たら (điều kiện), ても (nhượng bộ)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "おかね ___ あったら、りょこうします。",
    answer: "が",
    distractors: ["は", "を", "に"],
    translation: "Nếu có tiền, tôi sẽ đi du lịch.",
    explanation: "が + あったら: nếu có. が dùng với あります để chỉ sở hữu.",
    lesson: 25, difficulty: 2
  },
  {
    sentence: "あめ ___ ふっても、でかけます。",
    answer: "が",
    distractors: ["は", "を", "に"],
    translation: "Dù trời mưa tôi vẫn ra ngoài.",
    explanation: "が + ふっても: dù mưa. が chỉ chủ ngữ (mưa rơi).",
    lesson: 25, difficulty: 2
  },
  {
    sentence: "やすくても、わたし ___ かいません。",
    answer: "は",
    distractors: ["が", "も", "を"],
    translation: "Dù rẻ tôi cũng không mua.",
    explanation: "は đứng sau わたし để nhấn mạnh chủ đề và tạo đối lập.",
    lesson: 25, difficulty: 3
  },
  {
    sentence: "10じ ___ なったら、でかけましょう。",
    answer: "に",
    distractors: ["が", "は", "で"],
    translation: "Khi đến 10 giờ thì chúng ta cùng đi nhé.",
    explanation: "に + なったら: khi trở thành. 10じになる = đến 10 giờ.",
    lesson: 25, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // TỔNG HỢP — Phân biệt に vs で (chủ đề nâng cao)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "プール ___ およぎます。",
    answer: "で",
    distractors: ["に", "へ", "を"],
    translation: "Tôi bơi ở hồ bơi.",
    explanation: "で chỉ địa điểm diễn ra hành động (bơi). Không dùng に vì およぐ là hành động.",
    lesson: 6, difficulty: 2
  },
  {
    sentence: "プール ___ さかなが います。",
    answer: "に",
    distractors: ["で", "は", "を"],
    translation: "Trong bể có cá.",
    explanation: "に chỉ địa điểm tồn tại với います. Khác với で (địa điểm hành động).",
    lesson: 10, difficulty: 2
  },
  {
    sentence: "がっこう ___ べんきょうします。",
    answer: "で",
    distractors: ["に", "へ", "を"],
    translation: "Tôi học ở trường.",
    explanation: "で chỉ địa điểm hành động. がっこうで = 'ở trường' với hành động べんきょうする.",
    lesson: 6, difficulty: 1
  },
  {
    sentence: "がっこう ___ せんせいが います。",
    answer: "に",
    distractors: ["で", "は", "の"],
    translation: "Ở trường có thầy giáo.",
    explanation: "に chỉ địa điểm tồn tại với います.",
    lesson: 10, difficulty: 1
  },

  // ═══════════════════════════════════════════════════════════════
  // TỔNG HỢP — Phân biệt は vs が (chủ đề nâng cao)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "あ、バス ___ きました！",
    answer: "が",
    distractors: ["は", "を", "に"],
    translation: "À, xe buýt đến rồi!",
    explanation: "が dùng khi đó là thông tin mới/bất ngờ. は dùng khi chủ đề đã biết từ trước.",
    lesson: 9, difficulty: 3
  },
  {
    sentence: "バス ___ きません。タクシー ___ のりましょう。",
    answer: "は",
    distractors: ["が", "を", "に"],
    translation: "Xe buýt không đến. Hãy đi taxi thôi.",
    explanation: "は dùng khi バス đã là chủ đề đang nói đến và có hàm ý đối lập.",
    lesson: 9, difficulty: 3
  },
  {
    sentence: "だれ ___ きましたか。やまださん ___ きました。",
    answer: "が",
    distractors: ["は", "を", "に"],
    translation: "Ai đến vậy? Anh Yamada đến.",
    explanation: "が dùng khi trả lời câu hỏi だれが/なにが (thông tin mới).",
    lesson: 1, difficulty: 3
  },
  {
    sentence: "わたし ___ コーヒーを のみます。あなた ___ なにを のみますか。",
    answer: "は",
    distractors: ["が", "も", "を"],
    translation: "Tôi uống cà phê. Còn bạn uống gì?",
    explanation: "は dùng khi đặt lại chủ đề và có hàm ý 'còn về phần bạn thì...'.",
    lesson: 4, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // TỔNG HỢP — Phân biệt へ vs に (hướng đến)
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "びょういん ___ いきます。かぜを ひきました。",
    answer: "へ",
    distractors: ["に", "で", "を"],
    translation: "Tôi đến bệnh viện. Tôi bị cảm.",
    explanation: "へ nhấn mạnh hướng di chuyển. に cũng dùng được nhưng へ thông dụng hơn ở đây.",
    lesson: 5, difficulty: 2
  },
  {
    sentence: "びょういん ___ くすりを もらいに いきます。",
    answer: "へ",
    distractors: ["に", "で", "を"],
    translation: "Tôi đến bệnh viện lấy thuốc.",
    explanation: "へ chỉ điểm đến. に trong くすりをもらいに là に mục đích.",
    lesson: 13, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // TỔNG HỢP — だけ vs しか
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "わたしは にほんご ___ はなします。えいごは はなしません。",
    answer: "だけ",
    distractors: ["しか", "も", "は"],
    translation: "Tôi chỉ nói tiếng Nhật. Tôi không nói tiếng Anh.",
    explanation: "だけ = 'chỉ', dùng trong câu khẳng định. しか dùng với phủ định (〜しか〜ません).",
    lesson: 11, difficulty: 3
  },
  {
    sentence: "わたしは にほんご ___ はなせません。",
    answer: "しか",
    distractors: ["だけ", "も", "は"],
    translation: "Tôi chỉ nói được tiếng Nhật (không nói được ngôn ngữ nào khác).",
    explanation: "しか + 否定 = 'chỉ'. Câu phải là phủ định khi dùng しか.",
    lesson: 11, difficulty: 3
  },

  // ═══════════════════════════════════════════════════════════════
  // TỔNG HỢP — Câu khó 2 ô trống
  // ═══════════════════════════════════════════════════════════════
  {
    sentence: "たなかさん ___ おくさん ___ フランスじんです。",
    answer: "の",
    distractors: ["は", "が", "に"],
    translation: "Vợ của anh Tanaka là người Pháp.",
    explanation: "の nối hai danh từ: たなかさんのおくさん = 'vợ của anh Tanaka'.",
    lesson: 2, difficulty: 2
  },
  {
    sentence: "きのう ともだち ___ レストラン ___ ランチを たべました。",
    answer: "と",
    distractors: ["が", "に", "で"],
    translation: "Hôm qua tôi ăn trưa với bạn ở nhà hàng.",
    explanation: "と chỉ người đi cùng. Câu này test: と (với ai) và で (ở đâu).",
    lesson: 6, difficulty: 3
  },
  {
    sentence: "こうえん ___ こども ___ はな ___ あそんでいます。",
    answer: "で",
    distractors: ["に", "は", "を"],
    translation: "Bọn trẻ đang chơi với hoa ở công viên.",
    explanation: "で chỉ địa điểm hành động あそぶ. こうえんで ≠ こうえんに (tồn tại).",
    lesson: 10, difficulty: 3
  }
];

// Danh sách tất cả trợ từ có trong bộ câu hỏi (dùng cho bộ lọc UI)
export const PARTICLE_LIST = ["は", "が", "を", "に", "で", "へ", "と", "も", "の", "から", "まで", "より", "だけ", "しか"];
