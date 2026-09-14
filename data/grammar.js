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
,
  26: [
    {
        "title": "~んです",
        "structure": "Thể thông thường + んです",
        "explanation": "Dùng để nhấn mạnh lý do, giải thích nguyên nhân hoặc hỏi thêm thông tin.",
        "examples": [
            {
                "jp": "どうして 遅れたんですか。",
                "romaji": "Doushite okuretan desu ka.",
                "vi": "Tại sao bạn lại đến muộn vậy?"
            }
        ]
    },
    {
        "title": "~んですが、~ていただけませんか",
        "structure": "V (thể thông thường) + んですが、Vていただけませんか",
        "explanation": "Dùng để nhờ vả một cách lịch sự.",
        "examples": [
            {
                "jp": "日本語を書いたんですが、見ていただけませんか。",
                "romaji": "Nihongo o kaitan desu ga, mite itadakemasen ka.",
                "vi": "Tôi đã viết tiếng Nhật, bạn xem giúp tôi được không?"
            }
        ]
    },
    {
        "title": "~んですが、~たらいいですか",
        "structure": "V (thể thông thường) + んですが、Vたらいいですか",
        "explanation": "Dùng để xin lời khuyên hoặc hướng dẫn.",
        "examples": [
            {
                "jp": "カメラを買いたいんですが、どこで買ったらいいですか。",
                "romaji": "Kamera o kaitain desu ga, doko de kattara ii desu ka.",
                "vi": "Tôi muốn mua máy ảnh, mua ở đâu thì tốt?"
            }
        ]
    }
],
  27: [
    {
        "title": "Thể khả năng (可能形)",
        "structure": "Nhóm 1: đổi cột [i] sang [e] + ます\nNhóm 2: bỏ ます + られます\nNhóm 3: します -> できます, きます -> こられます",
        "explanation": "Biểu thị khả năng làm một việc gì đó hoặc một việc có thể xảy ra.",
        "examples": [
            {
                "jp": "私は 日本語が 話せます。",
                "romaji": "Watashi wa nihongo ga hanasemasu.",
                "vi": "Tôi có thể nói tiếng Nhật."
            }
        ]
    },
    {
        "title": "見えます / 聞こえます",
        "structure": "Danh từ + が + 見えます / 聞こえます",
        "explanation": "Biểu thị việc nhìn thấy, nghe thấy một cách tự nhiên (không có chủ ý).",
        "examples": [
            {
                "jp": "ここから 富士山が 見えます。",
                "romaji": "Koko kara Fujisan ga miemasu.",
                "vi": "Từ đây có thể nhìn thấy núi Phú Sĩ."
            }
        ]
    },
    {
        "title": "~しか~ません",
        "structure": "Danh từ + しか + Động từ phủ định",
        "explanation": "Chỉ, ngoài ra không... (mang sắc thái không đủ, ít).",
        "examples": [
            {
                "jp": "ローマ字しか 書けません。",
                "romaji": "Romaji shika kakemasen.",
                "vi": "Tôi chỉ có thể viết được Romaji."
            }
        ]
    }
],
  28: [
    {
        "title": "~ながら",
        "structure": "V(bỏ ます) + ながら + V2",
        "explanation": "Thực hiện đồng thời hai hành động (hành động V2 là chính).",
        "examples": [
            {
                "jp": "音楽を 聞きながら 食事します。",
                "romaji": "Ongaku o kikinagara shokuji shimasu.",
                "vi": "Vừa nghe nhạc vừa ăn cơm."
            }
        ]
    },
    {
        "title": "~ています (Thói quen)",
        "structure": "Vて + います",
        "explanation": "Diễn tả một thói quen hoặc một hành động lặp đi lặp lại.",
        "examples": [
            {
                "jp": "毎朝 ジョギングを しています。",
                "romaji": "Maiasa jogingu o shite imasu.",
                "vi": "Mỗi sáng tôi đều chạy bộ."
            }
        ]
    },
    {
        "title": "~し、~し",
        "structure": "Mệnh đề 1 (thể thông thường) + し、Mệnh đề 2 (thể thông thường) + し、~",
        "explanation": "Liệt kê các lý do, nguyên nhân (thường có chung một kết luận).",
        "examples": [
            {
                "jp": "熱も あるし、頭も 痛いし、今日は 会社を 休みます。",
                "romaji": "Netsu mo aru shi, atama mo itai shi, kyou wa kaisha o yasumimasu.",
                "vi": "Vừa bị sốt, vừa đau đầu, nên hôm nay tôi nghỉ làm."
            }
        ]
    }
],
  29: [
    {
        "title": "Tự động từ + ています",
        "structure": "Tự động từ (Vて) + います",
        "explanation": "Diễn tả trạng thái kết quả của một hành động, sự việc hiện tại đang hiển hiện trước mắt.",
        "examples": [
            {
                "jp": "窓が 閉まっています。",
                "romaji": "Mado ga shimatte imasu.",
                "vi": "Cửa sổ đang đóng."
            }
        ]
    },
    {
        "title": "~てしまいました / ~てしまいます",
        "structure": "Vて + しまいました / しまいます",
        "explanation": "Diễn tả hành động đã hoàn thành trọn vẹn, hoặc biểu thị sự nuối tiếc, hối hận về một việc đã lỡ xảy ra.",
        "examples": [
            {
                "jp": "パスポートを なくしてしまいました。",
                "romaji": "Pasupooto o nakushite shimaimashita.",
                "vi": "Tôi lỡ làm mất hộ chiếu rồi."
            }
        ]
    }
],
  30: [
    {
        "title": "Tha động từ + てあります",
        "structure": "Danh từ + が + Tha động từ (Vて) + あります",
        "explanation": "Diễn tả trạng thái là kết quả của một hành động có chủ ý của ai đó.",
        "examples": [
            {
                "jp": "カレンダーに 予定が 書いてあります。",
                "romaji": "Karenda ni yotei ga kaite arimasu.",
                "vi": "Lịch trình đã được viết trên tờ lịch."
            }
        ]
    },
    {
        "title": "~ておきます",
        "structure": "Vて + おきます",
        "explanation": "Chuẩn bị trước cho một việc gì đó; xử lý sau một hành động; hoặc giữ nguyên trạng thái.",
        "examples": [
            {
                "jp": "旅行の前に、切符を 買っておきます。",
                "romaji": "Ryokou no mae ni, kippu o katte okimasu.",
                "vi": "Trước khi đi du lịch, tôi mua vé sẵn."
            }
        ]
    }
],
  31: [
    {
        "title": "Thể ý định (意向形)",
        "structure": "Nhóm 1: [i] -> [o] + う\nNhóm 2: bỏ ます + よう\nNhóm 3: します -> しよう, きます -> こよう",
        "explanation": "Dùng để rủ rê hoặc thể hiện ý định (thể thông thường của ~ましょう).",
        "examples": [
            {
                "jp": "少し 休もう。",
                "romaji": "Sukoshi yasumou.",
                "vi": "Nghỉ một chút đi."
            }
        ]
    },
    {
        "title": "~と思っています",
        "structure": "V (Thể ý định) + と 思っています",
        "explanation": "Diễn tả ý định đã có từ trước và vẫn tiếp diễn ở hiện tại.",
        "examples": [
            {
                "jp": "週末は 海へ 行こうと 思っています。",
                "romaji": "Shuumatsu wa umi e ikou to omotte imasu.",
                "vi": "Cuối tuần tôi định đi biển."
            }
        ]
    },
    {
        "title": "~つもりです",
        "structure": "V (Từ điển) / Vない + つもりです",
        "explanation": "Diễn tả một dự định, quyết định chắc chắn hơn so với ~と思っています.",
        "examples": [
            {
                "jp": "国へ 帰っても、日本語を 勉強するつもりです。",
                "romaji": "Kuni e kaette mo, nihongo o benkyou suru tsumori desu.",
                "vi": "Dù về nước, tôi vẫn dự định học tiếng Nhật."
            }
        ]
    },
    {
        "title": "~予定です",
        "structure": "V (Từ điển) / Nの + 予定です",
        "explanation": "Diễn tả một kế hoạch, lịch trình đã được định sẵn.",
        "examples": [
            {
                "jp": "7月の終わりに ドイツへ 出張する予定です。",
                "romaji": "Shichigatsu no owari ni Doitsu e shucchou suru yotei desu.",
                "vi": "Theo kế hoạch thì cuối tháng 7 tôi sẽ đi công tác ở Đức."
            }
        ]
    }
],
  32: [
    {
        "title": "~ほうがいいです",
        "structure": "Vた / Vない + ほうがいいです",
        "explanation": "Đưa ra lời khuyên (nên / không nên làm gì).",
        "examples": [
            {
                "jp": "毎日 運動したほうがいいです。",
                "romaji": "Mainichi undou shita hou ga ii desu.",
                "vi": "Bạn nên tập thể dục mỗi ngày."
            }
        ]
    },
    {
        "title": "~でしょう",
        "structure": "Thể thông thường + でしょう",
        "explanation": "Sự suy đoán của người nói (chắc là, có lẽ là).",
        "examples": [
            {
                "jp": "明日は 雨が 降るでしょう。",
                "romaji": "Ashita wa ame ga furu deshou.",
                "vi": "Ngày mai có lẽ trời sẽ mưa."
            }
        ]
    },
    {
        "title": "~かもしれません",
        "structure": "Thể thông thường (bỏ だ) + かもしれません",
        "explanation": "Diễn tả khả năng xảy ra của một sự việc (có thể là, biết đâu là). Khả năng thấp hơn でしょう.",
        "examples": [
            {
                "jp": "午後から 雪が 降るかもしれません。",
                "romaji": "Gogo kara yuki ga furu kamo shiremasen.",
                "vi": "Biết đâu từ chiều tuyết sẽ rơi."
            }
        ]
    }
],
  33: [
    {
        "title": "Thể mệnh lệnh và cấm đoán",
        "structure": "Mệnh lệnh: Nhóm 1 [i]->[e], Nhóm 2 bỏ ます+ろ, します->しろ, きます->こい\nCấm đoán: V (Từ điển) + な",
        "explanation": "Dùng để ra lệnh hoặc cấm đoán gay gắt (thường dùng trong thể thao, nguy hiểm, nam giới nói với nhau).",
        "examples": [
            {
                "jp": "早く 寝ろ。",
                "romaji": "Hayaku nero.",
                "vi": "Ngủ sớm đi."
            },
            {
                "jp": "ここで 休むな。",
                "romaji": "Koko de yasumu na.",
                "vi": "Không được nghỉ ở đây."
            }
        ]
    },
    {
        "title": "~と書いてあります / ~と読みます",
        "structure": "N / Mệnh đề + と 書いてあります / 読みます",
        "explanation": "Có viết là... / Đọc là...",
        "examples": [
            {
                "jp": "あそこに 「止まれ」と 書いてあります。",
                "romaji": "Asoko ni 'tomare' to kaite arimasu.",
                "vi": "Chỗ kia có viết là 'Dừng lại'."
            }
        ]
    },
    {
        "title": "~という意味です",
        "structure": "X は Y（thể thông thường）+ という意味です",
        "explanation": "Dùng để giải thích ý nghĩa (X có nghĩa là Y).",
        "examples": [
            {
                "jp": "「立入禁止」は 入るなと いう意味です。",
                "romaji": "'Tachiiri kinshi' wa hairu na to iu imi desu.",
                "vi": "'Cấm vào' có nghĩa là không được vào."
            }
        ]
    },
    {
        "title": "~と言っていました / ~と伝えていただけませんか",
        "structure": "Câu trích dẫn + と言って/伝えて~",
        "explanation": "Truyền đạt lại lời nhắn của ai đó / Nhờ truyền đạt lại lời nhắn cho ai đó.",
        "examples": [
            {
                "jp": "田中さんは 明日 休むと 言っていました。",
                "romaji": "Tanaka-san wa ashita yasumu to itte imashita.",
                "vi": "Anh Tanaka nói là ngày mai sẽ nghỉ."
            }
        ]
    }
],
  34: [
    {
        "title": "~とおりに",
        "structure": "V1 (Từ điển/た) / Nの + とおりに、V2",
        "explanation": "Làm V2 theo đúng như V1 / N.",
        "examples": [
            {
                "jp": "私が 言ったとおりに、書いてください。",
                "romaji": "Watashi ga itta toori ni, kaite kudasai.",
                "vi": "Hãy viết theo đúng như những gì tôi nói."
            }
        ]
    },
    {
        "title": "~あとで",
        "structure": "Vた / Nの + あとで、~",
        "explanation": "Sau khi làm việc này thì làm việc kia.",
        "examples": [
            {
                "jp": "仕事のあとで、飲みに行きませんか。",
                "romaji": "Shigoto no ato de, nomi ni ikimasen ka.",
                "vi": "Sau khi làm việc xong, có đi uống không?"
            }
        ]
    },
    {
        "title": "~て / ~ないで",
        "structure": "V1て / V1ないで、V2",
        "explanation": "Làm V2 trong trạng thái đi kèm V1 (có làm V1 / không làm V1). Hoặc chọn 1 trong 2 hành động.",
        "examples": [
            {
                "jp": "しょうゆを つけて 食べます。",
                "romaji": "Shouyu o tsukete tabemasu.",
                "vi": "Chấm xì dầu rồi ăn."
            },
            {
                "jp": "日曜日は どこも 行かないで、家で 休みます。",
                "romaji": "Nichiyoubi wa doko mo ikanaide, uchi de yasumimasu.",
                "vi": "Chủ nhật tôi không đi đâu cả mà nghỉ ở nhà."
            }
        ]
    }
],
  35: [
    {
        "title": "Thể điều kiện (条件形)",
        "structure": "Nhóm 1: [i]->[e]+ば\nNhóm 2: bỏ ます+れば\nNhóm 3: します->すれば, きます->くれば\nTính từ-i: bỏ い + ければ\nTính từ-na/N: なら",
        "explanation": "Nếu... thì... (Điều kiện để một việc khác xảy ra).",
        "examples": [
            {
                "jp": "春に なれば、桜が 咲きます。",
                "romaji": "Haru ni nareba, sakura ga sakimasu.",
                "vi": "Nếu mùa xuân đến, hoa anh đào sẽ nở."
            }
        ]
    },
    {
        "title": "~なら",
        "structure": "N + なら、~",
        "explanation": "Nếu là N (tiếp nhận chủ đề từ người nói trước để đưa ra lời khuyên hoặc thông tin).",
        "examples": [
            {
                "jp": "温泉なら、白馬がいいですよ。",
                "romaji": "Onsen nara, Hakuba ga ii desu yo.",
                "vi": "Nếu là suối nước nóng thì Hakuba là tốt đấy."
            }
        ]
    }
],
  36: [
    {
        "title": "~ように、~",
        "structure": "V (Khả năng/Từ điển) / Vない + ように、V2",
        "explanation": "Để có thể... / Để không... (V2 là hành động có chủ ý nhằm đạt được mục đích V1, V1 không có chủ ý hoặc khả năng).",
        "examples": [
            {
                "jp": "日本語が 話せるように、毎日 練習しています。",
                "romaji": "Nihongo ga hanaseru you ni, mainichi renshuu shite imasu.",
                "vi": "Để có thể nói được tiếng Nhật, tôi luyện tập mỗi ngày."
            }
        ]
    },
    {
        "title": "~ようになります",
        "structure": "V (Khả năng/Từ điển) + ようになります",
        "explanation": "Trở nên có thể làm gì / Bắt đầu làm gì (Sự biến đổi trạng thái).",
        "examples": [
            {
                "jp": "漢字が 読めるようになりました。",
                "romaji": "Kanji ga yomeru you ni narimashita.",
                "vi": "Tôi đã có thể đọc được Kanji (trước đây không đọc được)."
            }
        ]
    },
    {
        "title": "~ようにしています / ようにしてください",
        "structure": "V (Từ điển) / Vない + ようにしています / ようにしてください",
        "explanation": "Cố gắng làm / không làm việc gì đó như một thói quen / Xin hãy cố gắng...",
        "examples": [
            {
                "jp": "毎日 野菜を 食べるようにしています。",
                "romaji": "Mainichi yasai o taberu you ni shite imasu.",
                "vi": "Tôi đang cố gắng ăn rau mỗi ngày."
            },
            {
                "jp": "絶対に パスポートを なくさないようにしてください。",
                "romaji": "Zettai ni pasupooto o nakusanai you ni shite kudasai.",
                "vi": "Xin hãy cố gắng tuyệt đối không làm mất hộ chiếu."
            }
        ]
    }
],
  37: [
    {
        "title": "Thể bị động (受身形)",
        "structure": "Nhóm 1: [i] -> [a] + れる\nNhóm 2: bỏ ます + られる\nNhóm 3: します -> される, きます -> こられる",
        "explanation": "Dùng để diễn tả việc bị tác động, bị làm gì đó.",
        "examples": [
            {
                "jp": "私は 先生に ほめられました。",
                "romaji": "Watashi wa sensei ni homeraremashita.",
                "vi": "Tôi được giáo viên khen."
            }
        ]
    },
    {
        "title": "Bị động gián tiếp (Bị hại)",
        "structure": "N1(người bị hại) は N2(người tác động) に N3(vật) を + V(bị động)",
        "explanation": "Diễn tả sự phiền toái, thiệt hại do hành động của người khác gây ra.",
        "examples": [
            {
                "jp": "私は 弟に パソコンを 壊されました。",
                "romaji": "Watashi wa otouto ni pasokon o kowasaremashita.",
                "vi": "Tôi bị em trai làm hỏng máy tính."
            }
        ]
    },
    {
        "title": "Bị động với vật làm chủ ngữ",
        "structure": "N (Vật / Việc) + が/は + V(bị động)",
        "explanation": "Dùng khi nói về một sự kiện, sự việc được thực hiện mà không cần nhắc đến người thực hiện.",
        "examples": [
            {
                "jp": "大阪で 展覧会が 開かれます。",
                "romaji": "Oosaka de tenrankai ga hirakaremasu.",
                "vi": "Triển lãm được tổ chức ở Osaka."
            }
        ]
    }
],
  38: [
    {
        "title": "Danh từ hóa động từ (~のは / ~のが)",
        "structure": "V (Từ điển) + のは / のが + Tính từ",
        "explanation": "Biến động từ thành cụm danh từ để miêu tả tính chất (với は) hoặc sở thích, sở trường (với が).",
        "examples": [
            {
                "jp": "音楽を 聞くのは 楽しいです。",
                "romaji": "Ongaku o kiku no wa tanoshii desu.",
                "vi": "Việc nghe nhạc rất vui."
            },
            {
                "jp": "私は 絵を かくのが 好きです。",
                "romaji": "Watashi wa e o kaku no ga suki desu.",
                "vi": "Tôi thích việc vẽ tranh."
            }
        ]
    },
    {
        "title": "~のを 忘れました / 知っていますか",
        "structure": "V (Thể thông thường) + のを + 忘れました / 知っていますか",
        "explanation": "Quên làm việc gì đó / Có biết việc gì đó không.",
        "examples": [
            {
                "jp": "薬を 飲むのを 忘れました。",
                "romaji": "Kusuri o nomu no o wasuremashita.",
                "vi": "Tôi đã quên uống thuốc."
            },
            {
                "jp": "鈴木さんが 結婚したのを 知っていますか。",
                "romaji": "Suzuki-san ga kekkon shita no o shitte imasu ka.",
                "vi": "Bạn có biết việc anh Suzuki đã kết hôn không?"
            }
        ]
    }
],
  39: [
    {
        "title": "~て / ~で (Nguyên nhân, lý do)",
        "structure": "Vて / Tính từ-i (bỏ い) + くて / Tính từ-na + で / N + で",
        "explanation": "Chỉ nguyên nhân. Vế sau thường là chỉ cảm xúc, trạng thái, động từ khả năng (không dùng với ý chí, mệnh lệnh).",
        "examples": [
            {
                "jp": "ニュースを 聞いて、びっくりしました。",
                "romaji": "Nyuusu o kiite, bikkuri shimashita.",
                "vi": "Nghe tin tức xong tôi đã giật mình."
            },
            {
                "jp": "地震で ビルが 倒れました。",
                "romaji": "Jishin de biru ga taoremashita.",
                "vi": "Tòa nhà bị đổ do động đất."
            }
        ]
    },
    {
        "title": "~ので",
        "structure": "Thể thông thường (N/Na + な) + ので",
        "explanation": "Bởi vì... (Diễn tả lý do một cách khách quan, nhẹ nhàng hơn から, thường dùng để xin phép, nhờ vả).",
        "examples": [
            {
                "jp": "気分が 悪いので、帰っても いいですか。",
                "romaji": "Kibun ga warui node, kaette mo ii desu ka.",
                "vi": "Vì thấy trong người không khỏe, tôi về trước có được không?"
            }
        ]
    }
],
  40: [
    {
        "title": "Câu hỏi lồng ghép (có từ để hỏi)",
        "structure": "Từ để hỏi + Thể thông thường (N/Na bỏ だ) + か、~",
        "explanation": "Lồng một câu hỏi có từ để hỏi vào trong câu lớn.",
        "examples": [
            {
                "jp": "会議は 何時に 終わるか、わかりません。",
                "romaji": "Kaigi wa nanji ni owaru ka, wakarimasen.",
                "vi": "Tôi không biết cuộc họp sẽ kết thúc lúc mấy giờ."
            }
        ]
    },
    {
        "title": "Câu hỏi lồng ghép (không có từ để hỏi - Yes/No)",
        "structure": "Thể thông thường (N/Na bỏ だ) + かどうか、~",
        "explanation": "Có... hay không (Lồng câu hỏi Yes/No vào câu lớn).",
        "examples": [
            {
                "jp": "その 話は ほんとうか どうか、わかりません。",
                "romaji": "Sono hanashi wa hontou ka dou ka, wakarimasen.",
                "vi": "Câu chuyện đó có thật hay không thì tôi không biết."
            }
        ]
    },
    {
        "title": "~てみます",
        "structure": "Vて + みます",
        "explanation": "Thử làm một việc gì đó.",
        "examples": [
            {
                "jp": "この ズボンを はいてみても いいですか。",
                "romaji": "Kono zubon o haite mite mo ii desu ka.",
                "vi": "Tôi mặc thử chiếc quần này có được không?"
            }
        ]
    }
],
  41: [
    {
        "title": "いただきます / くださいます / やります",
        "structure": "N1(người nhận) は N2(người cho) に N3 を いただきます\nN1(người cho) は (私に) N3 を くださいます\nN1(tôi) は N2(người bề dưới/động vật) に N3 を やります",
        "explanation": "Cách diễn đạt việc cho/nhận với người có địa vị cao hơn hoặc thấp hơn. いただきます: nhận từ người bề trên. くださいます: người bề trên cho mình. やります: cho người bề dưới, động vật, thực vật.",
        "examples": [
            {
                "jp": "私は 社長に 時計を いただきました。",
                "romaji": "Watashi wa shachou ni tokei o itadakimashita.",
                "vi": "Tôi đã nhận được chiếc đồng hồ từ giám đốc."
            },
            {
                "jp": "部長は 私に お土産を くださいました。",
                "romaji": "Buchou wa watashi ni omiyage o kudasaimashita.",
                "vi": "Trưởng phòng đã cho tôi quà lưu niệm."
            },
            {
                "jp": "私は 犬に えさを やります。",
                "romaji": "Watashi wa inu ni esa o yarimasu.",
                "vi": "Tôi cho chó ăn (cho đồ ăn)."
            }
        ]
    },
    {
        "title": "~ていただきます / ~てくださいます / ~てやります",
        "structure": "Vて + いただきます / くださいます / やります",
        "explanation": "Nhận được hành động giúp đỡ từ người bề trên / Người bề trên làm giúp cho mình / Mình làm giúp cho người bề dưới.",
        "examples": [
            {
                "jp": "私は 先生に 漢字を 直していただきました。",
                "romaji": "Watashi wa sensei ni kanji o naoshite itadakimashita.",
                "vi": "Tôi được thầy giáo sửa chữ Kanji cho."
            }
        ]
    }
],
  42: [
    {
        "title": "~ために (Mục đích)",
        "structure": "V(Từ điển) / Nの + ために、~",
        "explanation": "Để, vì (Mục đích). Hành động vế trước và vế sau phải do cùng một chủ thể có ý chí thực hiện.",
        "examples": [
            {
                "jp": "自分の 店を 持つために、貯金しています。",
                "romaji": "Jibun no mise o motsu tame ni, chokin shite imasu.",
                "vi": "Tôi đang tiết kiệm tiền để mở cửa hàng riêng."
            },
            {
                "jp": "家族のために、うちを 建てます。",
                "romaji": "Kazoku no tame ni, uchi o tatemasu.",
                "vi": "Tôi xây nhà vì gia đình."
            }
        ]
    },
    {
        "title": "~のに (Mục đích, công dụng, tốn kém)",
        "structure": "V(Từ điển) / N + のに + 使う / いい / 役に立つ / 時間がかかる",
        "explanation": "Dùng cho việc gì / Có lợi cho việc gì / Tốn (thời gian, tiền bạc) cho việc gì.",
        "examples": [
            {
                "jp": "この はさみは 花を 切るのに 使います。",
                "romaji": "Kono hasami wa hana o kiru noni tsukaimasu.",
                "vi": "Cái kéo này dùng để cắt hoa."
            },
            {
                "jp": "駅へ 行くのに 2時間 かかります。",
                "romaji": "Eki e iku noni nijikan kakarimasu.",
                "vi": "Tốn 2 tiếng để đi đến nhà ga."
            }
        ]
    }
],
  43: [
    {
        "title": "~そうです (Trông có vẻ)",
        "structure": "V (bỏ ます) / Tính từ-i (bỏ い) / Tính từ-na (bỏ な) + そうです",
        "explanation": "Trông có vẻ... (Sự phán đoán bằng mắt, cảm giác trực tiếp). Riêng いい -> よさそうです.",
        "examples": [
            {
                "jp": "今にも 雨が 降りそうです。",
                "romaji": "Ima nimo ame ga furisou desu.",
                "vi": "Trời trông có vẻ sắp mưa đến nơi rồi."
            },
            {
                "jp": "この 料理は 辛そうです。",
                "romaji": "Kono ryouri wa karasou desu.",
                "vi": "Món ăn này trông có vẻ cay."
            }
        ]
    },
    {
        "title": "~てきます",
        "structure": "Vて + きます",
        "explanation": "Đi làm việc gì đó rồi quay lại (Hành động bao hàm sự di chuyển).",
        "examples": [
            {
                "jp": "ちょっと たばこを 買ってきます。",
                "romaji": "Chotto tabako o katte kimasu.",
                "vi": "Tôi đi mua thuốc lá một chút (rồi sẽ quay lại)."
            }
        ]
    }
],
  44: [
    {
        "title": "~すぎます",
        "structure": "V (bỏ ます) / Tính từ-i (bỏ い) / Tính từ-na (bỏ な) + すぎます",
        "explanation": "Quá... (Vượt quá mức độ thông thường, thường mang ý nghĩa tiêu cực).",
        "examples": [
            {
                "jp": "昨日の夜 お酒を 飲みすぎました。",
                "romaji": "Kinou no yoru osake o nomisugimashita.",
                "vi": "Tối qua tôi đã uống quá nhiều rượu."
            }
        ]
    },
    {
        "title": "~やすいです / ~にくいです",
        "structure": "V (bỏ ます) + やすいです / にくいです",
        "explanation": "Dễ làm gì / Khó làm gì.",
        "examples": [
            {
                "jp": "この パソコンは 使いやすいです。",
                "romaji": "Kono pasokon wa tsukaiyasui desu.",
                "vi": "Cái máy tính này dễ sử dụng."
            },
            {
                "jp": "東京は 住みにくいです。",
                "romaji": "Toukyou wa suminikui desu.",
                "vi": "Tokyo thì khó sống."
            }
        ]
    },
    {
        "title": "~くします / ~にします",
        "structure": "Tính từ-i (bỏ い) + く + します\nTính từ-na (bỏ な) / N + に + します",
        "explanation": "Làm cho... trở nên (Chỉ sự biến đổi do tác động có chủ ý). Nに します còn có nghĩa là quyết định chọn N.",
        "examples": [
            {
                "jp": "音を 大きくします。",
                "romaji": "Oto o ookiku shimasu.",
                "vi": "Làm cho âm thanh to lên."
            },
            {
                "jp": "部屋を きれいに します。",
                "romaji": "Heya o kirei ni shimasu.",
                "vi": "Làm cho căn phòng sạch sẽ."
            },
            {
                "jp": "私は カレーに します。",
                "romaji": "Watashi wa karee ni shimasu.",
                "vi": "Tôi chọn món cà ri (Quyết định)."
            }
        ]
    }
],
  45: [
    {
        "title": "~場合は",
        "structure": "V(Từ điển/た/ない) / Tính từ-i / Tính từ-na(な) / N(の) + 場合は",
        "explanation": "Trong trường hợp... (Giả định một tình huống khó khăn, rắc rối xảy ra để đưa ra cách giải quyết).",
        "examples": [
            {
                "jp": "パスポートを なくした場合は、どうしたらいいですか。",
                "romaji": "Pasupooto o nakushita baai wa, dou shitara ii desu ka.",
                "vi": "Trong trường hợp làm mất hộ chiếu thì tôi nên làm thế nào?"
            }
        ]
    },
    {
        "title": "~のに",
        "structure": "Thể thông thường (N/Na + な) + のに、~",
        "explanation": "Mặc dù... vậy mà... (Diễn tả sự bất ngờ, thất vọng, không như mong đợi).",
        "examples": [
            {
                "jp": "約束を したのに、彼女は 来ませんでした。",
                "romaji": "Yakusoku o shita noni, kanojo wa kimasen deshita.",
                "vi": "Mặc dù đã hẹn rồi vậy mà cô ấy không đến."
            }
        ]
    }
],
  46: [
    {
        "title": "~ところです",
        "structure": "V(Từ điển) / Vている / Vた + ところです",
        "explanation": "V(Từ điển): Sắp sửa làm gì / Vている: Đang trong lúc làm gì / Vた: Vừa mới làm xong (về mặt thời gian vật lý).",
        "examples": [
            {
                "jp": "今から ご飯を 食べる ところです。",
                "romaji": "Ima kara gohan o taberu tokoro desu.",
                "vi": "Tôi sắp sửa ăn cơm bây giờ."
            },
            {
                "jp": "今 部屋を 片付けている ところです。",
                "romaji": "Ima heya o katazukete iru tokoro desu.",
                "vi": "Bây giờ tôi đang dọn phòng."
            },
            {
                "jp": "たった今 バスが 出た ところです。",
                "romaji": "Tatta ima basu ga deta tokoro desu.",
                "vi": "Xe buýt vừa mới chạy xong."
            }
        ]
    },
    {
        "title": "~たばかりです",
        "structure": "Vた + ばかりです",
        "explanation": "Vừa mới làm gì (mang tính cảm giác chủ quan của người nói, dù thời gian thực tế có thể đã lâu).",
        "examples": [
            {
                "jp": "先月 日本へ 来たばかりです。",
                "romaji": "Sengetsu Nihon e kita bakari desu.",
                "vi": "Tôi vừa mới đến Nhật tháng trước."
            }
        ]
    },
    {
        "title": "~はずです",
        "structure": "Thể thông thường (Na な / N の) + はずです",
        "explanation": "Chắc chắn là... (Suy đoán có căn cứ xác đáng).",
        "examples": [
            {
                "jp": "田中さんは 今日 休むと 言っていましたから、いないはずです。",
                "romaji": "Tanaka-san wa kyou yasumu to itte imashita kara, inai hazu desu.",
                "vi": "Anh Tanaka nói hôm nay sẽ nghỉ nên chắc chắn là không có ở đây."
            }
        ]
    }
],
  47: [
    {
        "title": "~そうです (Truyền đạt)",
        "structure": "Thể thông thường + そうです",
        "explanation": "Nghe nói là... (Truyền đạt lại thông tin nghe được từ nguồn khác).",
        "examples": [
            {
                "jp": "天気予報によると、明日は 寒くなるそうです。",
                "romaji": "Tenkiyohou ni yoru to, ashita wa samuku naru sou desu.",
                "vi": "Theo dự báo thời tiết thì nghe nói ngày mai trời sẽ trở lạnh."
            }
        ]
    },
    {
        "title": "~ようです",
        "structure": "Thể thông thường (Na な / N の) + ようです",
        "explanation": "Có vẻ như là, dường như là... (Sự suy đoán dựa trên giác quan, quan sát tình huống).",
        "examples": [
            {
                "jp": "人が 大勢 集まっていますね。事故のようです。",
                "romaji": "Hito ga oozei atsumatte imasu ne. Jiko no you desu.",
                "vi": "Nhiều người tập trung nhỉ. Có vẻ như là tai nạn."
            }
        ]
    }
],
  48: [
    {
        "title": "Thể sai khiến (使役形)",
        "structure": "Nhóm 1: [i] -> [a] + せる\nNhóm 2: bỏ ます + させる\nNhóm 3: します -> させる, きます -> こさせる",
        "explanation": "Bắt / Cho phép ai đó làm gì.",
        "examples": [
            {
                "jp": "部長は 私を 大阪へ 出張させました。",
                "romaji": "Buchou wa watashi o Oosaka e shucchou sasemashita.",
                "vi": "Trưởng phòng đã bắt/cho tôi đi công tác ở Osaka."
            },
            {
                "jp": "私は 娘に ピアノを 習わせます。",
                "romaji": "Watashi wa musume ni piano o narawasemasu.",
                "vi": "Tôi cho con gái học piano."
            }
        ]
    },
    {
        "title": "~させていただけませんか",
        "structure": "V (Sai khiến - て) + いただけませんか",
        "explanation": "Xin phép ai đó cho mình làm việc gì một cách lịch sự.",
        "examples": [
            {
                "jp": "すみません、明日 休ませていただけませんか。",
                "romaji": "Sumimasen, ashita yasumasete itadakemasen ka.",
                "vi": "Xin lỗi, cho phép tôi nghỉ ngày mai được không ạ?"
            }
        ]
    }
],
  49: [
    {
        "title": "Tôn kính ngữ (尊敬語) - Động từ đặc biệt",
        "structure": "行きます/来ます/います -> いらっしゃいます\n食べます/飲みます -> 召し上がります\n言います -> おっしゃいます\n知っています -> ご存じです\n見ます -> ご覧になります\nします -> なさいます\nくれます -> くださいます",
        "explanation": "Dùng để nói về hành động của người bề trên, thể hiện sự kính trọng.",
        "examples": [
            {
                "jp": "先生は もう お帰りに なりましたか。",
                "romaji": "Sensei wa mou okaeri ni narimashita ka.",
                "vi": "Thầy giáo đã về chưa ạ?"
            }
        ]
    },
    {
        "title": "Tôn kính ngữ - Quy tắc chung",
        "structure": "お + V(bỏ ます) + に なります",
        "explanation": "Dùng cho các động từ nhóm 1 và 2 (không dùng cho động từ 1 âm tiết hoặc động từ đặc biệt).",
        "examples": [
            {
                "jp": "社長は 新しい 車を お買いに なりました。",
                "romaji": "Shachou wa atarashii kuruma o okai ni narimashita.",
                "vi": "Giám đốc đã mua xe ô tô mới."
            }
        ]
    },
    {
        "title": "Tôn kính ngữ - Yêu cầu lịch sự",
        "structure": "お + V(bỏ ます) + ください / ご + Danh từ nhóm 3 + ください",
        "explanation": "Yêu cầu người khác làm gì một cách lịch sự (Xin mời...).",
        "examples": [
            {
                "jp": "あちらから お入りください。",
                "romaji": "Achira kara ohairi kudasai.",
                "vi": "Xin mời vào từ lối kia."
            }
        ]
    }
],
  50: [
    {
        "title": "Khiêm nhường ngữ (謙譲語) - Động từ đặc biệt",
        "structure": "行きます/来ます -> 参ります\nいます -> おります\n食べます/飲みます/もらいます -> いただきます\n言います -> 申します\n知っています -> 存じております\n見ます -> 拝見します\n聞きます/行きます(đến nhà) -> 伺います\n会います -> お目にかかります\nします -> いたします",
        "explanation": "Dùng để hạ mình khi nói về hành động của bản thân nhằm tôn kính người nghe / người nhận hành động.",
        "examples": [
            {
                "jp": "私は ミラーと 申します。",
                "romaji": "Watashi wa Miraa to moushimasu.",
                "vi": "Tôi tên là Miller."
            },
            {
                "jp": "先生の 奥様に お目にかかりました。",
                "romaji": "Sensei no okusama ni omenikakarimashita.",
                "vi": "Tôi đã vinh hạnh được gặp vợ của thầy giáo."
            }
        ]
    },
    {
        "title": "Khiêm nhường ngữ - Quy tắc chung",
        "structure": "お + V(bỏ ます) + します / ご + Danh từ nhóm 3 + します",
        "explanation": "Dùng để nói về hành động của bản thân liên quan đến người bề trên (giúp đỡ, phục vụ).",
        "examples": [
            {
                "jp": "私が 荷物を お持ちします。",
                "romaji": "Watashi ga nimotsu o omochi shimasu.",
                "vi": "Để tôi mang hành lý giúp cho ạ."
            },
            {
                "jp": "今日の 予定を ご説明します。",
                "romaji": "Kyou no yotei o gosetsumei shimasu.",
                "vi": "Tôi xin phép trình bày lịch trình ngày hôm nay."
            }
        ]
    }
]
};
