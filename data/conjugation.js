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
  { masu: 'おきます',       group: 2, vi: 'thức dậy' },
  { masu: 'ねます',         group: 2, vi: 'ngủ' },
  { masu: 'はたらきます',   group: 1, vi: 'làm việc' },
  { masu: 'やすみます',     group: 1, vi: 'nghỉ ngơi' },
  { masu: 'おわります',     group: 1, vi: 'kết thúc' },
  { masu: 'べんきょうします', group: 3, vi: 'học' },
  { masu: 'いれます',       group: 2, vi: 'bật (đèn)' },
  { masu: 'けします',       group: 1, vi: 'tắt (đèn)' },

  // ── Bài 5 ──
  { masu: 'いきます',       group: 1, vi: 'đi', irregular_te: 'いって', irregular_ta: 'いった' },
  { masu: 'きます',         group: 3, vi: 'đến' },
  { masu: 'かえります',     group: 1, vi: 'về' },

  // ── Bài 6 ──
  { masu: 'たべます',       group: 2, vi: 'ăn' },
  { masu: 'のみます',       group: 1, vi: 'uống' },
  { masu: 'すいます',       group: 1, vi: 'hút (thuốc)' },
  { masu: 'みます',         group: 2, vi: 'xem' },
  { masu: 'ききます',       group: 1, vi: 'nghe' },
  { masu: 'よみます',       group: 1, vi: 'đọc' },
  { masu: 'かきます',       group: 1, vi: 'viết' },
  { masu: 'かいます',       group: 1, vi: 'mua' },
  { masu: 'とります',       group: 1, vi: 'chụp (ảnh)' },
  { masu: 'します',         group: 3, vi: 'làm' },
  { masu: 'あいます',       group: 1, vi: 'gặp' },

  // ── Bài 7 ──
  { masu: 'きります',       group: 1, vi: 'cắt' },
  { masu: 'おくります',     group: 1, vi: 'gửi' },
  { masu: 'あげます',       group: 2, vi: 'tặng' },
  { masu: 'もらいます',     group: 1, vi: 'nhận' },
  { masu: 'かします',       group: 1, vi: 'cho mượn' },
  { masu: 'かります',       group: 2, vi: 'mượn' },
  { masu: 'おしえます',     group: 2, vi: 'dạy' },
  { masu: 'ならいます',     group: 1, vi: 'học tập' },
  { masu: 'かけます',       group: 2, vi: 'gọi (điện)' },

  // ── Bài 13 ──
  { masu: 'あそびます',     group: 1, vi: 'chơi' },
  { masu: 'およぎます',     group: 1, vi: 'bơi' },
  { masu: 'むかえます',     group: 2, vi: 'đón' },
  { masu: 'つかれます',     group: 2, vi: 'mệt' },
  { masu: 'だします',       group: 1, vi: 'gửi (thư)' },
  { masu: 'はいります',     group: 1, vi: 'vào' },
  { masu: 'でます',         group: 2, vi: 'ra khỏi' },
  { masu: 'けっこんします', group: 3, vi: 'kết hôn' },
  { masu: 'かいものします', group: 3, vi: 'mua sắm' },
  { masu: 'さんぽします',   group: 3, vi: 'đi dạo' },

  // ── Bài 14 ──
  { masu: 'つけます',       group: 2, vi: 'bật' },
  { masu: 'あけます',       group: 2, vi: 'mở' },
  { masu: 'しめます',       group: 2, vi: 'đóng' },
  { masu: 'いそぎます',     group: 1, vi: 'vội' },
  { masu: 'まちます',       group: 1, vi: 'đợi' },
  { masu: 'とめます',       group: 2, vi: 'dừng' },
  { masu: 'まがります',     group: 1, vi: 'rẽ' },
  { masu: 'もちます',       group: 1, vi: 'cầm' },
  { masu: 'よびます',       group: 1, vi: 'gọi' },
  { masu: 'はなします',     group: 1, vi: 'nói chuyện' },
  { masu: 'みせます',       group: 2, vi: 'cho xem' },
  { masu: 'はじめます',     group: 2, vi: 'bắt đầu' },
  { masu: 'ふります',       group: 1, vi: 'rơi (mưa)' },
  { masu: 'てつだいます',   group: 1, vi: 'giúp đỡ' },
  { masu: 'コピーします',   group: 3, vi: 'copy' },

  // ── Bài 15 ──
  { masu: 'おきます',       group: 1, vi: 'đặt, để' },
  { masu: 'つくります',     group: 1, vi: 'làm, chế tạo' },
  { masu: 'うります',       group: 1, vi: 'bán' },
  { masu: 'しります',       group: 1, vi: 'biết' },
  { masu: 'すみます',       group: 1, vi: 'sống, ở' },
  { masu: 'けんきゅうします', group: 3, vi: 'nghiên cứu' },

  // ── Bài 16 ──
  { masu: 'のります',       group: 1, vi: 'lên xe' },
  { masu: 'おります',       group: 2, vi: 'xuống xe' },
  { masu: 'のりかえます',   group: 2, vi: 'chuyển xe' },
  { masu: 'あびます',       group: 2, vi: 'tắm' },
  { masu: 'おろします',     group: 1, vi: 'rút (tiền)' },
  { masu: 'おします',       group: 1, vi: 'bấm, ấn' },
  { masu: 'でんわします',   group: 3, vi: 'gọi điện' },

  // ── Bài 17 ──
  { masu: 'おぼえます',     group: 2, vi: 'nhớ' },
  { masu: 'わすれます',     group: 2, vi: 'quên' },
  { masu: 'なくします',     group: 1, vi: 'đánh mất' },
  { masu: 'はらいます',     group: 1, vi: 'trả tiền' },
  { masu: 'かえします',     group: 1, vi: 'trả lại' },
  { masu: 'でかけます',     group: 2, vi: 'ra ngoài' },
  { masu: 'ぬぎます',       group: 1, vi: 'cởi' },
  { masu: 'しんぱいします', group: 3, vi: 'lo lắng' },

  // ── Bài 18 ──
  { masu: 'できます',       group: 2, vi: 'có thể' },
  { masu: 'あらいます',     group: 1, vi: 'rửa' },
  { masu: 'ひきます',       group: 1, vi: 'chơi (nhạc cụ)' },
  { masu: 'うたいます',     group: 1, vi: 'hát' },
  { masu: 'あつめます',     group: 2, vi: 'thu thập' },
  { masu: 'すてます',       group: 2, vi: 'vứt, bỏ' },
  { masu: 'かえます',       group: 2, vi: 'đổi' },
  { masu: 'うんてんします', group: 3, vi: 'lái xe' },
  { masu: 'よやくします',   group: 3, vi: 'đặt trước' },

  // ── Bài 19 ──
  { masu: 'のぼります',     group: 1, vi: 'leo (núi)' },
  { masu: 'とまります',     group: 1, vi: 'ở (khách sạn)' },
  { masu: 'そうじします',   group: 3, vi: 'dọn dẹp' },
  { masu: 'せんたくします', group: 3, vi: 'giặt đồ' },

  // ── Bài 20 ──
  { masu: 'いります',       group: 1, vi: 'cần' },
  { masu: 'しらべます',     group: 2, vi: 'tra cứu' },
  { masu: 'なおします',     group: 1, vi: 'sửa chữa' },

  // ── Bài 21 ──
  { masu: 'おもいます',     group: 1, vi: 'nghĩ' },
  { masu: 'いいます',       group: 1, vi: 'nói' },

  // ── Bài 22 ──
  { masu: 'きます',         group: 2, vi: 'mặc (áo)' },
  { masu: 'はきます',       group: 1, vi: 'mang (giày)' },
  { masu: 'かぶります',     group: 1, vi: 'đội (mũ)' },

  // ── Bài 23 ──
  { masu: 'ききます',       group: 1, vi: 'hỏi' },
  { masu: 'まわします',     group: 1, vi: 'xoay' },
  { masu: 'ひきます',       group: 1, vi: 'kéo' },
  { masu: 'かわります',     group: 1, vi: 'thay đổi' },

  // ── Bài 24 ──
  { masu: 'くれます',       group: 2, vi: 'cho (tôi)' },
  { masu: 'つれていきます', group: 1, vi: 'đưa đi' },
  { masu: 'おくっていきます', group: 1, vi: 'tiễn đi' },
  { masu: 'しょうかいします', group: 3, vi: 'giới thiệu' },

  // ── Bài 25 ──
  { masu: 'かんがえます',   group: 2, vi: 'suy nghĩ' },
  { masu: 'つきます',       group: 1, vi: 'đến nơi' },
  { masu: 'たちます',       group: 1, vi: 'đứng' },
  { masu: 'すわります',     group: 1, vi: 'ngồi' },
  { masu: 'なくなります',   group: 1, vi: 'mất (đồ)' },
  { masu: 'こまります',     group: 1, vi: 'gặp khó khăn' },
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
