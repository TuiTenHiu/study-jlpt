/**
 * data/grammar.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Grammar data for Minna no Nihongo (Lessons 1-25).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const grammarData = {
  1: [
    {
      title: "N1 は N2 です",
      structure: "N1 は N2 です",
      explanation: "Dùng để giới thiệu tên, nghề nghiệp, quốc tịch... N2 là danh từ bổ nghĩa cho N1.",
      examples: [
        { jp: "わたし は マイク・ミラー です。", romaji: "Watashi wa Maiku Mira- desu.", vi: "Tôi là Mike Miller." },
        { jp: "サントスさん は ブラジルじん です。", romaji: "Santosu-san wa Burajiru-jin desu.", vi: "Anh Santos là người Brazil." }
      ]
    },
    {
      title: "N1 は N2 じゃありません",
      structure: "N1 は N2 じゃありません (hoặc では ありません)",
      explanation: "Dạng phủ định của 'です'. 'じゃ ありません' dùng trong văn nói, 'では ありません' dùng trong văn viết hoặc trang trọng.",
      examples: [
        { jp: "サントスさん は がくせい じゃありません。", romaji: "Santosu-san wa gakusei ja arimasen.", vi: "Anh Santos không phải là sinh viên." },
        { jp: "ミラーさん は かいしゃいん じゃありません。", romaji: "Mira-san wa kaishain ja arimasen.", vi: "Anh Miller không phải là nhân viên công ty." }
      ]
    },
    {
      title: "Câu hỏi: N1 は N2 ですか",
      structure: "N1 は N2 ですか",
      explanation: "Dùng để hỏi xác nhận. Trả lời bằng 'はい、そうです' hoặc 'いいえ、そうじゃありません'.",
      examples: [
        { jp: "ミラーさん は アメリカじん ですか。", romaji: "Mira-san wa Amerikajin desu ka.", vi: "Anh Miller có phải là người Mỹ không?" },
        { jp: "はい、アメリカじん です。", romaji: "Hai, Amerikajin desu.", vi: "Vâng, là người Mỹ." }
      ]
    },
    {
      title: "Trợ từ も",
      structure: "N も",
      explanation: "Dùng khi N có cùng đặc điểm hoặc trạng thái như một đối tượng đã được đề cập trước đó. Tương tự như 'cũng' trong tiếng Việt.",
      examples: [
        { jp: "ミラーさん は かいしゃいん です。グプタさん も かいしゃいん です。", romaji: "Mira-san wa kaishain desu. Guputa-san mo kaishain desu.", vi: "Anh Miller là nhân viên công ty. Anh Gupta cũng là nhân viên công ty." }
      ]
    }
  ],
  2: [
    {
      title: "これ / それ / あれ",
      structure: "これ / それ / あれ + は + N + です",
      explanation: "'これ' (cái này - gần người nói), 'それ' (cái đó - gần người nghe), 'あれ' (cái kia - xa cả hai).",
      examples: [
        { jp: "これ は じしょ です。", romaji: "Kore wa jisho desu.", vi: "Đây là cuốn từ điển." },
        { jp: "それ は コンピューター ですか。", romaji: "Sore wa konpyu-ta- desu ka.", vi: "Đó có phải là máy tính không?" }
      ]
    },
    {
      title: "この N / その N / あの N",
      structure: "この / その / あの + N + は ... です",
      explanation: "Tương tự như kore/sore/are nhưng phải đi kèm với một danh từ ngay sau đó để bổ nghĩa.",
      examples: [
        { jp: "この ほん は わたし の です。", romaji: "Kono hon wa watashi no desu.", vi: "Cuốn sách này là của tôi." },
        { jp: "あの かた は どなた ですか。", romaji: "Ano kata wa donata desu ka.", vi: "Vị kia là vị nào?" }
      ]
    }
  ],
  3: [
    {
      title: "ここ / そこ / あそこ",
      structure: "ここ / そこ / あそこ + は + N (địa điểm) + です",
      explanation: "Chỉ địa điểm. 'ここ' (đây), 'そこ' (đó), 'あそこ' (kia).",
      examples: [
        { jp: "ここ は しょくどう です。", romaji: "Koko wa shokudou desu.", vi: "Đây là nhà ăn." },
        { jp: "あそこ は トイレ です。", romaji: "Asoko wa toire desu.", vi: "Kia là nhà vệ sinh." }
      ]
    },
    {
      title: "N1 は N2 (địa điểm) です",
      structure: "N1 は N2 (địa điểm) です",
      explanation: "Dùng để nói về vị trí của người, vật hoặc địa điểm.",
      examples: [
        { jp: "おてあらい は あそこ です。", romaji: "Otearai wa asoko desu.", vi: "Nhà vệ sinh ở đằng kia." },
        { jp: "ミラーさん は じむしょ です。", romaji: "Mira-san wa jimusho desu.", vi: "Anh Miller ở văn phòng." }
      ]
    }
  ],
  4: [
    {
      title: "Vます / Vません",
      structure: "Động từ thể ます",
      explanation: "Thì hiện tại hoặc tương lai của động từ (dạng lịch sự).",
      examples: [
        { jp: "わたし は まいにchい べんきょうします。", romaji: "Watashi wa mainichi benkyoushimasu.", vi: "Tôi học bài mỗi ngày." },
        { jp: "あした は はたらきません。", romaji: "Ashita wa hatarakimasen.", vi: "Ngày mai tôi không làm việc." }
      ]
    },
    {
      title: "Thời gian に Vます",
      structure: "N (thời gian) に Vます",
      explanation: "Dùng trợ từ 'に' sau mốc thời gian cụ thể (có con số).",
      examples: [
        { jp: "6じ に おきます。", romaji: "6-ji ni okimasu.", vi: "Tôi thức dậy lúc 6 giờ." }
      ]
    }
  ],
  5: [
    {
      title: "N (địa điểm) へ いきます / きます / かえります",
      structure: "N へ いきます / きます / かえります",
      explanation: "Dùng trợ từ 'へ' (đọc là 'e') để chỉ hướng di chuyển.",
      examples: [
        { jp: "わたし は きょうと へ いきます。", romaji: "Watashi wa Kyouto e ikimasu.", vi: "Tôi đi đến Kyoto." }
      ]
    },
    {
      title: "Phương tiện で Vます",
      structure: "N (phương tiện) で V",
      explanation: "Dùng trợ từ 'で' để chỉ phương tiện đi lại.",
      examples: [
        { jp: "でんしゃ で いきます。", romaji: "Densha de ikimasu.", vi: "Tôi đi bằng tàu điện." }
      ]
    }
  ],
  6: [
    {
      title: "Danh từ + を + Động từ",
      structure: "N を V",
      explanation: "Trợ từ を chỉ đối tượng trực tiếp của hành động.",
      examples: [
        { jp: "ジュースを飲みます。", romaji: "Juusu o nomimasu.", vi: "Uống nước trái cây." },
        { jp: "テレビを見ます。", romaji: "Terebi o mimasu.", vi: "Xem tivi." }
      ]
    },
    {
      title: "Danh từ + をします",
      structure: "N をします",
      explanation: "Thực hiện một hành động (thể thao, trò chơi, sự kiện).",
      examples: [
        { jp: "サッカーをします。", romaji: "Sakkaa o shimasu.", vi: "Chơi bóng đá." },
        { jp: "パーティーをします。", romaji: "Paatii o shimasu.", vi: "Tổ chức tiệc." }
      ]
    },
    {
      title: "Danh từ (địa điểm) + で + Động từ",
      structure: "N (địa điểm) で V",
      explanation: "Trợ từ で biểu thị địa điểm xảy ra hành động.",
      examples: [
        { jp: "駅で新聞を買います。", romaji: "Eki de shinbun o kaimasu.", vi: "Mua báo ở nhà ga." },
        { jp: "レストランで食べます。", romaji: "Resutoran de tabemasu.", vi: "Ăn ở nhà hàng." }
      ]
    },
    {
      title: "Vませんか / Vましょう",
      structure: "V-masenka / V-mashou",
      explanation: "Mời mọc lịch sự hoặc đề nghị cùng làm gì đó.",
      examples: [
        { jp: "いっしょに食べませんか。", romaji: "Issho ni tabemasen ka?", vi: "Cùng ăn không?" },
        { jp: "ちょっと休みましょう。", romaji: "Chotto yasumimashou.", vi: "Cùng nghỉ một lát nhé." }
      ]
    }
  ],
  7: [
    {
      title: "Danh từ (công cụ/phương tiện) + で",
      structure: "N (công cụ) で V",
      explanation: "Biểu thị phương tiện hoặc công cụ dùng để thực hiện hành động.",
      examples: [
        { jp: "はしで食べます。", romaji: "Hashi de tabemasu.", vi: "Ăn bằng đũa." },
        { jp: "日本語でレポートを書きます。", romaji: "Nihongo de repooto o kakimasu.", vi: "Viết báo cáo bằng tiếng Nhật." }
      ]
    },
    {
      title: "Tặng / Cho mượn / Dạy",
      structure: "N1 (người) に N2 を あげます/かします/おしえます",
      explanation: "Làm gì đó cho ai (đối tượng nhận hành động dùng trợ từ に).",
      examples: [
        { jp: "母に花をあげます。", romaji: "Haha ni hana o agemasu.", vi: "Tặng hoa cho mẹ." },
        { jp: "友達に本をかしました。", romaji: "Tomodachi ni hon o kashimashita.", vi: "Đã cho bạn mượn sách." }
      ]
    },
    {
      title: "Nhận / Mượn / Học",
      structure: "N1 (người) に N2 を もらいます/かります/ならいます",
      explanation: "Nhận gì đó từ ai (nguồn nhận dùng に hoặc から).",
      examples: [
        { jp: "父に時計をもらいました。", romaji: "Chichi ni tokei o moraimashita.", vi: "Nhận được đồng hồ từ bố." },
        { jp: "木村さんに英語をならいます。", romaji: "Kimura-san ni Eigo o naraimasu.", vi: "Học tiếng Anh từ anh Kimura." }
      ]
    }
  ],
  8: [
    {
      title: "Tính từ đuôi な và đuôi い",
      structure: "N は Adj です",
      explanation: "Miêu tả tính chất của danh từ.",
      examples: [
        { jp: "ワットさんは親切です。", romaji: "Watto-san wa shinsetsu desu.", vi: "Thầy Watt tốt bụng." },
        { jp: "富士山は高いです。", romaji: "Fujisan wa takai desu.", vi: "Núi Phú Sĩ cao." }
      ]
    },
    {
      title: "Phủ định của tính từ",
      structure: "Adj (na) じゃありません / Adj (i) Kunai desu",
      explanation: "Cách chia phủ định cho hai loại tính từ.",
      examples: [
        { jp: "この本はおもしろくないです。", romaji: "Kono hon wa omoshirokunai desu.", vi: "Quyển sách này không hay." },
        { jp: "あまり便利じゃありません。", romaji: "Amari benri ja arimasen.", vi: "Không tiện lợi lắm." }
      ]
    },
    {
      title: "Hỏi ý kiến/ấn tượng",
      structure: "N は どうですか",
      explanation: "Hỏi về cảm nhận của ai đó về sự vật/sự việc.",
      examples: [
        { jp: "日本の生活はどうですか。", romaji: "Nihon no seikatsu wa dou desu ka?", vi: "Cuộc sống ở Nhật thế nào?" },
        { jp: "おいしいです。", romaji: "Oishii desu.", vi: "Ngon lắm." }
      ]
    }
  ],
  9: [
    {
      title: "Sở hữu và Năng lực",
      structure: "N が あります / わかります",
      explanation: "Dùng trợ từ が với động từ chỉ sở hữu hoặc năng lực.",
      examples: [
        { jp: "イタリア料理がわかります。", romaji: "Itaria ryouri ga wakarimasu.", vi: "Tôi hiểu (biết) món Ý." },
        { jp: "お金があります。", romaji: "Okane ga arimasu.", vi: "Tôi có tiền." }
      ]
    },
    {
      title: "Thích / Ghét / Giỏi / Dở",
      structure: "N が すき / きらい / じょうず / へた です",
      explanation: "Dùng trợ từ が với tính từ chỉ cảm xúc hoặc năng lực.",
      examples: [
        { jp: "ダンスが上手です。", romaji: "Dansu ga jouzu desu.", vi: "Khiêu vũ giỏi." },
        { jp: "お酒がきらいです。", romaji: "Osake ga kirai desu.", vi: "Tôi ghét rượu." }
      ]
    },
    {
      title: "Giải thích lý do",
      structure: "S1 から、S2",
      explanation: "Vì S1 nên S2.",
      examples: [
        { jp: "時間がありませんから、見ません。", romaji: "Jikan ga arimasen kara, mimasen.", vi: "Vì không có thời gian nên tôi không xem." }
      ]
    }
  ],
  10: [
    {
      title: "Sự hiện hữu (Vật / Người)",
      structure: "N が あります / います",
      explanation: "Có cái gì (vật/thực vật) hoặc ai (người/động vật).",
      examples: [
        { jp: "コンピューターがあります。", romaji: "Konpyuutaa ga arimasu.", vi: "Có cái máy tính." },
        { jp: "男の人がいます。", romaji: "Otoko no hito ga imasu.", vi: "Có người đàn ông." }
      ]
    },
    {
      title: "Vị trí của vật/người",
      structure: "N1 (địa điểm) に N2 が あります / います",
      explanation: "Ở địa điểm N1 có N2.",
      examples: [
        { jp: "部屋につくえがあります。", romaji: "Heya ni tsukue ga arimasu.", vi: "Trong phòng có cái bàn." },
        { jp: "事務所にミラーさんがいます。", romaji: "Jimusho ni Miraa-san ga imasu.", vi: "Ở văn phòng có anh Miller." }
      ]
    },
    {
      title: "Từ chỉ vị trí",
      structure: "N1 の N2 (vị trí)",
      explanation: "Trên, dưới, trong, ngoài, trước, sau...",
      examples: [
        { jp: "机の上に写真があります。", romaji: "Tsukue no ue ni shashin ga arimasu.", vi: "Trên bàn có bức ảnh." },
        { jp: "箱の中に手紙があります。", romaji: "Hako no naka ni tegami ga arimasu.", vi: "Trong hộp có lá thư." }
      ]
    }
  ],
  11: [
    {
      title: "Cách đếm số lượng",
      structure: "N を [Số từ] V",
      explanation: "Số từ chỉ số lượng vật hoặc người thường đứng trước động từ.",
      examples: [
        { jp: "りんごを 4つ 買いました。", romaji: "Ringo o yottsu kaimashita.", vi: "Tôi đã mua 4 quả táo." },
        { jp: "外国人の学生が 2人 います。", romaji: "Gaikokujin no gakusei ga futari imasu.", vi: "Có 2 sinh viên người nước ngoài." }
      ]
    },
    {
      title: "Khoảng thời gian",
      structure: "[Khoảng thời gian] V",
      explanation: "Không cần dùng trợ từ sau các từ chỉ khoảng thời gian.",
      examples: [
        { jp: "国で 2か月 日本語を勉強しました。", romaji: "Kuni de nikagetsu nihongo o benkyou shimashita.", vi: "Tôi đã học tiếng Nhật 2 tháng ở nước mình." }
      ]
    },
    {
      title: "Tần suất",
      structure: "[Khoảng thời gian] に [Số lần] V",
      explanation: "Biểu thị tần suất thực hiện hành động.",
      examples: [
        { jp: "1か月に 2回 映画を見ます。", romaji: "Ikkagetsu ni nikai eiga o mimasu.", vi: "Một tháng tôi xem phim 2 lần." }
      ]
    }
  ],
  12: [
    {
      title: "Quá khứ của Danh từ và Tính từ な",
      structure: "N / Adj-na でした",
      explanation: "Dạng quá khứ khẳng định lịch sự.",
      examples: [
        { jp: "きのうは 雨でした。", romaji: "Kinou wa ame deshita.", vi: "Hôm qua trời đã mưa." },
        { jp: "お祭りは にぎやかでした。", romaji: "Omatsuri wa nigiyaka deshita.", vi: "Lễ hội đã rất nhộn nhịp." }
      ]
    },
    {
      title: "Quá khứ của Tính từ い",
      structure: "Adj-i (-i -> katta) です",
      explanation: "Bỏ 'i' thêm 'katta' để chuyển sang quá khứ.",
      examples: [
        { jp: "きのうは 暑かったです。", romaji: "Kinou wa atsukatta desu.", vi: "Hôm qua trời đã nóng." },
        { jp: "パーティーは 楽しかったです。", romaji: "Paatii wa tanoshikatta desu.", vi: "Bữa tiệc đã rất vui." }
      ]
    },
    {
      title: "So sánh hơn",
      structure: "N1 は N2 より Adj です",
      explanation: "N1 thì ... hơn N2.",
      examples: [
        { jp: "このかばんは あの red-kaban より 重いです。", romaji: "Kono kaban wa ano kaban yori omoi desu.", vi: "Cái túi này nặng hơn cái túi kia." }
      ]
    }
  ],
  13: [
    {
      title: "Muốn có cái gì",
      structure: "N が ほしい です",
      explanation: "Bày tỏ mong muốn sở hữu một vật gì đó.",
      examples: [
        { jp: "わたしは コンピューターが ほしいです。", romaji: "Watashi wa konpyuutaa ga hoshii desu.", vi: "Tôi muốn có máy tính." }
      ]
    },
    {
      title: "Muốn làm gì",
      structure: "V-tai です",
      explanation: "Bày tỏ mong muốn thực hiện một hành động.",
      examples: [
        { jp: "わたしは 沖縄へ 行きたいです。", romaji: "Watashi wa Okinawa e ikitai desu.", vi: "Tôi muốn đi Okinawa." }
      ]
    },
    {
      title: "Mục đích của việc di chuyển",
      structure: "Địa điểm へ [V-masu/N] に 行きます",
      explanation: "Đi đâu để làm việc gì.",
      examples: [
        { jp: "デパートへ 買い物に 行きます。", romaji: "Depaato e kaimono ni ikimasu.", vi: "Tôi đi bách hóa để mua sắm." }
      ]
    }
  ],
  14: [
    {
      title: "Hãy làm gì (Yêu cầu)",
      structure: "Vて ください",
      explanation: "Dùng để yêu cầu, sai bảo hoặc mời ai đó làm gì.",
      examples: [
        { jp: "ちょっと 待ってください。", romaji: "Chotto matte kudasai.", vi: "Xin vui lòng chờ một chút." },
        { jp: "ここに 名前を 書いてください。", romaji: "Koko ni namae o kaite kudasai.", vi: "Hãy viết tên vào đây." }
      ]
    },
    {
      title: "Đang làm gì (Hiện tại tiếp diễn)",
      structure: "Vて います",
      explanation: "Diễn tả hành động đang diễn ra tại thời điểm nói.",
      examples: [
        { jp: "ミラーさんは 今 電話をかけています。", romaji: "Miraa-san wa ima denwa o kakete imasu.", vi: "Anh Miller đang gọi điện thoại." }
      ]
    }
  ],
  15: [
    {
      title: "Làm gì đó cũng được (Cho phép)",
      structure: "Vても いいです",
      explanation: "Dùng để xin phép hoặc cho phép làm gì đó.",
      examples: [
        { jp: "写真を 撮っても いいですか。", romaji: "Shashin o tottemo ii desu ka?", vi: "Tôi chụp ảnh có được không?" },
        { jp: "はい、いいですよ。", romaji: "Hai, ii desu yo.", vi: "Vâng, được chứ." }
      ]
    },
    {
      title: "Không được làm gì (Cấm đoán)",
      structure: "Vては いけません",
      explanation: "Dùng để diễn tả sự ngăn cấm.",
      examples: [
        { jp: "ここで たばこを 吸ってはいけません。", romaji: "Koko de tabako o sutte wa ikemasen.", vi: "Không được hút thuốc ở đây." }
      ]
    },
    {
      title: "Trạng thái (Kết quả)",
      structure: "Vて います",
      explanation: "Diễn tả trạng thái hiện tại là kết quả của một hành động trong quá khứ (như kết hôn, sống ở đâu, sở hữu gì đó).",
      examples: [
        { jp: "わたしは 結婚しています。", romaji: "Watashi wa kekkon shite imasu.", vi: "Tôi đã kết hôn." },
        { jp: "わたしは ハノイに 住んでいます。", romaji: "Watashi wa Hanoi ni sunde imasu.", vi: "Tôi đang sống ở Hà Nội." }
      ]
    }
  ],
  16: [
    {
      title: "Liệt kê hành động",
      structure: "V1て、V2て、... Vます",
      explanation: "Dùng để liệt kê các hành động xảy ra theo trình tự thời gian.",
      examples: [
        { jp: "朝ジョギングをして、シャワーを浴びて、会社へ行きます。", romaji: "Asa jogging o shite, shawaa o abite, kaisha e ikimasu.", vi: "Sáng tôi chạy bộ, tắm rồi đến công ty." },
        { jp: "神戸へ行って、映画を見て、お茶を飲みました。", romaji: "Koube e itte, eiga o mite, ocha o nomimashita.", vi: "Tôi đã đi Kobe, xem phim rồi uống trà." }
      ]
    },
    {
      title: "Sau khi làm gì",
      structure: "V1てから、V2",
      explanation: "Nhấn mạnh hành động V2 được tiến hành sau khi hành động V1 đã kết thúc.",
      examples: [
        { jp: "電気を消してから、教室を出ます。", romaji: "Denki o keshite kara, kyoushitsu o demasu.", vi: "Sau khi tắt điện thì ra khỏi phòng học." }
      ]
    }
  ],
  17: [
    {
      title: "Đừng làm gì",
      structure: "Vないで ください",
      explanation: "Dùng để yêu cầu ai đó không được thực hiện một hành động nào đó.",
      examples: [
        { jp: "ここで写真を撮らないでください。", romaji: "Koko de shashin o toranaide kudasai.", vi: "Xin đừng chụp ảnh ở đây." }
      ]
    },
    {
      title: "Phải làm gì",
      structure: "Vなければなりません",
      explanation: "Biểu đạt một việc được coi như là nghĩa vụ hoặc sự cần thiết phải làm.",
      examples: [
        { jp: "毎日勉強しなければなりません。", romaji: "Mainichi benkyoushinakereba narimasen.", vi: "Hàng ngày tôi phải học bài." },
        { jp: "薬を飲まなければなりません。", romaji: "Kusuri o nomanakereba narimasen.", vi: "Tôi phải uống thuốc." }
      ]
    }
  ],
  18: [
    {
      title: "Có thể làm gì",
      structure: "Vる ことが できます",
      explanation: "Biểu đạt năng lực hoặc khả năng thực hiện một hành động.",
      examples: [
        { jp: "ミラーさんは漢字を読むことができます。", romaji: "Miraa-san wa kanji o yomu koto ga dekimasu.", vi: "Anh Miller có thể đọc được chữ Hán." }
      ]
    },
    {
      title: "Trước khi làm gì",
      structure: "V1る / Nの / Thời gian + まえに、V2",
      explanation: "Biểu thị hành động V2 xảy ra trước hành động V1.",
      examples: [
        { jp: "寝るまえに、日記を書きます。", romaji: "Neru mae ni, nikki o kakimasu.", vi: "Trước khi đi ngủ, tôi viết nhật ký." },
        { jp: "食事のまえに、手を洗います。", romaji: "Shokuji no mae ni, te o araimasu.", vi: "Trước bữa ăn, tôi rửa tay." }
      ]
    }
  ],
  19: [
    {
      title: "Đã từng làm gì (Kinh nghiệm)",
      structure: "Vた ことが あります",
      explanation: "Diễn tả kinh nghiệm đã từng trải qua một việc gì đó trong quá khứ.",
      examples: [
        { jp: "馬に乗ったことがあります。", romaji: "Uma ni notta koto ga arimasu.", vi: "Tôi đã từng cưỡi ngựa." },
        { jp: "日本へ行ったことがあります。", romaji: "Nihon e itta koto ga arimasu.", vi: "Tôi đã từng đi Nhật Bản." }
      ]
    },
    {
      title: "Trở nên, trở thành",
      structure: "Adj-i -> ku / Adj-na -> ni + なります",
      explanation: "Diễn tả sự thay đổi trạng thái hoặc tính chất của đối tượng.",
      examples: [
        { jp: "寒くなります。", romaji: "Samuku narimasu.", vi: "Trời trở nên lạnh." },
        { jp: "25歳になります。", romaji: "Nijuugo-sai ni narimasu.", vi: "Trở sang tuổi 25." }
      ]
    }
  ],
  20: [
    {
      title: "Thể thông thường (Plain Form)",
      structure: "Thể thông thường",
      explanation: "Dùng trong hội thoại thân mật với bạn bè, người thân.",
      examples: [
        { jp: "サントスさんはパーティーへ行く？", romaji: "Santosu-san wa paatii e iku?", vi: "Anh Santos có đi dự tiệc không?" },
        { jp: "うん、行く。", romaji: "Un, iku.", vi: "Ừ, đi chứ." }
      ]
    }
  ],
  21: [
    {
      title: "Ý kiến: ~ Tôi nghĩ rằng...",
      structure: "[Thể thông thường] と おもいます",
      explanation: "Dùng để bày tỏ suy nghĩ, ý kiến hoặc phán đoán của bản thân.",
      examples: [
        { jp: "日本は こうつうが べんりだと おもいます。", romaji: "Nihon wa koutsuu ga benri da to omoimasu.", vi: "Tôi nghĩ rằng Nhật Bản có giao thông thuận lợi." },
        { jp: "あした あめが ふると おomいます。", romaji: "Ashita ame ga furu to omoimasu.", vi: "Tôi nghĩ ngày mai trời sẽ mưa." }
      ]
    },
    {
      title: "Trích dẫn: ~ Nói rằng...",
      structure: "[Câu nói / Thể thông thường] と いいます",
      explanation: "Dùng để trích dẫn trực tiếp hoặc gián tiếp lời nói của ai đó.",
      examples: [
        { jp: "やまださんは 「おやすみなさい」と いいました。", romaji: "Yamada san wa 'Oyasuminasai' to iimashita.", vi: "Anh Yamada đã nói 'Chúc ngủ ngon'." },
        { jp: "やまださんは らいしゅう しゅっちょうする と いいました。", romaji: "Yamada san wa raishuu shucchou suru to iimashita.", vi: "Anh Yamada nói là tuần sau anh ấy sẽ đi công tác." }
      ]
    }
  ],
  22: [
    {
      title: "Mệnh đề định ngữ bổ nghĩa danh từ",
      structure: "[V (thông thường) / Adj / N] + Danh từ",
      explanation: "Dùng cả một cụm câu để bổ nghĩa cho một danh từ.",
      examples: [
        { jp: "これは ミラーさんが かいた えです。", romaji: "Kore wa Miraa-san ga kaita e desu.", vi: "Đây là bức tranh mà anh Miller đã vẽ." },
        { jp: "わたしが せんしゅう みた えいが。", romaji: "Watashi ga senshuu mita eiga.", vi: "Bộ phim mà tuần trước tôi đã xem." }
      ]
    }
  ],
  23: [
    {
      title: "Thời điểm: Khi...",
      structure: "[V thông thường / Adj / N-no] + とき",
      explanation: "Diễn tả thời điểm thực hiện một hành động hoặc một trạng thái.",
      examples: [
        { jp: "としょかんで ほんを かりるとき、カードが いります。", romaji: "Toshokan de hon o kariru toki, kaado ga irimasu.", vi: "Khi mượn sách ở thư viện cần có thẻ." },
        { jp: "ひまなとき、ビデオを みます。", romaji: "Hima na toki, bideo o mimasu.", vi: "Khi rảnh rỗi tôi thường xem video." }
      ]
    },
    {
      title: "Hệ quả: Hễ mà... / Nếu...",
      structure: "Vる + と",
      explanation: "Diễn tả một hệ quả tất yếu hoặc kết quả tự nhiên của một hành động.",
      examples: [
        { jp: "ふゆに なると、さむくなります。", romaji: "Fuyu ni naru to, samuku narimasu.", vi: "Hễ đến mùa đông là trời trở nên lạnh." },
        { jp: "この ボタンを おすと、おつりが でます。", romaji: "Kono botan o osu to, otsuri ga demasu.", vi: "Hễ ấn nút này là tiền thừa sẽ ra." }
      ]
    }
  ],
  24: [
    {
      title: "Cho và Nhận hành động",
      structure: "Vて + あげます / もらいます / くれます",
      explanation: "Diễn tả việc thực hiện một hành động giúp đỡ người khác hoặc nhận được sự giúp đỡ.",
      examples: [
        { jp: "わたしは たなかさんに りょうりを つくって もらいました。", romaji: "Watashi wa Tanaka-san ni ryouri o tsukutte moraimashita.", vi: "Tôi được anh Tanaka nấu ăn cho." },
        { jp: "たなかさんは わたしに じてんしゃを なおして くれました。", romaji: "Tanaka-san wa watashi ni jitensha o naoshite kuremashita.", vi: "Anh Tanaka đã sửa xe đạp cho tôi." }
      ]
    }
  ],
  25: [
    {
      title: "Điều kiện giả định: Nếu...",
      structure: "Vた + ら",
      explanation: "Diễn tả một điều kiện giả định về một sự việc trong tương lai.",
      examples: [
        { jp: "お金が あったら、りょこうします。", romaji: "Okane ga attara, ryokou shimasu.", vi: "Nếu có tiền, tôi sẽ đi du lịch." },
        { jp: "10時に なったら、でかけましょう。", romaji: "Juuji ni nattara, dekakemashou.", vi: "Khi nào đến 10 giờ thì chúng ta cùng đi nhé." }
      ]
    },
    {
      title: "Điều kiện nghịch lý: Dù... vẫn...",
      structure: "Vて + も",
      explanation: "Diễn tả một điều kiện nghịch lý (mặc dù có A nhưng vẫn B).",
      examples: [
        { jp: "あめが ふっても、せんたくします。", romaji: "Ame ga futte mo, sentaku shimasu.", vi: "Dù trời mưa tôi vẫn giặt đồ." },
        { jp: "やすくても、わたしは かいません。", romaji: "Yasukute mo, watashi wa kaimasen.", vi: "Dù rẻ tôi cũng không mua." }
      ]
    }
  ]
};
