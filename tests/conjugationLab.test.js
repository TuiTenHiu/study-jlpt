// @vitest-environment jsdom
/**
 * tests/conjugationLab.test.js
 * Unit tests cho chức năng "Chia thể" (Conjugation Lab)
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { generateSteps, allVerbs, targetForms } from "../data/conjugation.js";
import { ConjugationLab } from "../features/conjugationLab.js";

// ══════════════════════════════════════════════════════════════════════════════
//  PHẦN 1: generateSteps()
// ══════════════════════════════════════════════════════════════════════════════

describe("generateSteps()", () => {

  // Nhóm 2
  describe("Nhóm 2 — たべます", () => {
    const verb = { masu: "たべます", group: 2, vi: "ăn" };
    it("Thể て: たべます → たべて", () => { expect(generateSteps(verb, "te").finalAnswer).toBe("たべて"); });
    it("Thể た: たべます → たべた", () => { expect(generateSteps(verb, "ta").finalAnswer).toBe("たべた"); });
    it("Thể ない: たべます → たべない", () => { expect(generateSteps(verb, "nai").finalAnswer).toBe("たべない"); });
    it("Thể từ điển: たべます → たべる", () => { expect(generateSteps(verb, "dict").finalAnswer).toBe("たべる"); });
    it("Bước 1 phải là bỏ ます, bước 2 là thêm đuôi", () => {
      const result = generateSteps(verb, "te");
      expect(result.steps).toHaveLength(2);
      expect(result.steps[0].id).toBe("remove_masu");
      expect(result.steps[0].after).toBe("たべ");
      expect(result.steps[1].type).toBe("choose_suffix");
      expect(result.steps[1].correctAnswer).toBe("て");
    });
    it("Options của bước 2 phải chứa đáp án đúng và có 4 lựa chọn", () => {
      const result = generateSteps(verb, "ta");
      expect(result.steps[1].options).toContain("た");
      expect(result.steps[1].options).toHaveLength(4);
    });
  });

  // Nhóm 2: みます
  describe("Nhóm 2 — みます", () => {
    const verb = { masu: "みます", group: 2, vi: "xem" };
    it("Thể て → みて", () => { expect(generateSteps(verb, "te").finalAnswer).toBe("みて"); });
    it("Thể た → みた", () => { expect(generateSteps(verb, "ta").finalAnswer).toBe("みた"); });
    it("Thể ない → みない", () => { expect(generateSteps(verb, "nai").finalAnswer).toBe("みない"); });
    it("Thể từ điển → みる", () => { expect(generateSteps(verb, "dict").finalAnswer).toBe("みる"); });
  });

  // Nhóm 1: のみます (み → んで)
  describe("Nhóm 1 — のみます (み → んで/んだ)", () => {
    const verb = { masu: "のみます", group: 1, vi: "uống" };
    it("Thể て → のんで", () => { expect(generateSteps(verb, "te").finalAnswer).toBe("のんで"); });
    it("Thể た → のんだ", () => { expect(generateSteps(verb, "ta").finalAnswer).toBe("のんだ"); });
    it("Thể ない → のまない", () => { expect(generateSteps(verb, "nai").finalAnswer).toBe("のまない"); });
    it("Thể từ điển → のむ", () => { expect(generateSteps(verb, "dict").finalAnswer).toBe("のむ"); });
    it("Bước choose_rule phải có đáp án đúng", () => {
      const ruleStep = generateSteps(verb, "te").steps.find(s => s.type === "choose_rule");
      expect(ruleStep).toBeDefined();
      expect(ruleStep.correctAnswer).toBe("み/び/に → んで");
      expect(ruleStep.options).toHaveLength(4);
    });
  });

  // Nhóm 1: はたらきます (き → いて)
  describe("Nhóm 1 — はたらきます (き → いて/いた)", () => {
    const verb = { masu: "はたらきます", group: 1, vi: "làm việc" };
    it("Thể て → はたらいて", () => { expect(generateSteps(verb, "te").finalAnswer).toBe("はたらいて"); });
    it("Thể た → はたらいた", () => { expect(generateSteps(verb, "ta").finalAnswer).toBe("はたらいた"); });
    it("Thể ない → はたらかない", () => { expect(generateSteps(verb, "nai").finalAnswer).toBe("はたらかない"); });
    it("Thể từ điển → はたらく", () => { expect(generateSteps(verb, "dict").finalAnswer).toBe("はたらく"); });
  });

  // Nhóm 1: かえります (り → って)
  describe("Nhóm 1 — かえります (り → って/った)", () => {
    const verb = { masu: "かえります", group: 1, vi: "về" };
    it("Thể て → かえって", () => { expect(generateSteps(verb, "te").finalAnswer).toBe("かえって"); });
    it("Thể た → かえった", () => { expect(generateSteps(verb, "ta").finalAnswer).toBe("かえった"); });
    it("Thể ない → かえらない", () => { expect(generateSteps(verb, "nai").finalAnswer).toBe("かえらない"); });
    it("Thể từ điển → かえる", () => { expect(generateSteps(verb, "dict").finalAnswer).toBe("かえる"); });
  });

  // Nhóm 1: はなします (し → して)
  describe("Nhóm 1 — はなします (し → して/した)", () => {
    const verb = { masu: "はなします", group: 1, vi: "nói chuyện" };
    it("Thể て → はなして", () => { expect(generateSteps(verb, "te").finalAnswer).toBe("はなして"); });
    it("Thể た → はなした", () => { expect(generateSteps(verb, "ta").finalAnswer).toBe("はなした"); });
    it("Thể ない → はなさない", () => { expect(generateSteps(verb, "nai").finalAnswer).toBe("はなさない"); });
    it("Thể từ điển → はなす", () => { expect(generateSteps(verb, "dict").finalAnswer).toBe("はなす"); });
  });

  // Nhóm 1: およぎます (ぎ → いで)
  describe("Nhóm 1 — およぎます (ぎ → いで/いだ)", () => {
    const verb = { masu: "およぎます", group: 1, vi: "bơi" };
    it("Thể て → およいで", () => { expect(generateSteps(verb, "te").finalAnswer).toBe("およいで"); });
    it("Thể た → およいだ", () => { expect(generateSteps(verb, "ta").finalAnswer).toBe("およいだ"); });
    it("Thể ない → およがない", () => { expect(generateSteps(verb, "nai").finalAnswer).toBe("およがない"); });
    it("Thể từ điển → およぐ", () => { expect(generateSteps(verb, "dict").finalAnswer).toBe("およぐ"); });
  });

  // Ngoại lệ いきます
  describe("Ngoại lệ — いきます (き→って thay vì いて)", () => {
    const verb = { masu: "いきます", group: 1, vi: "đi", irregular_te: "いって", irregular_ta: "いった" };
    it("Thể て → いって (KHÔNG phải いいて)", () => { expect(generateSteps(verb, "te").finalAnswer).toBe("いって"); });
    it("Thể た → いった", () => { expect(generateSteps(verb, "ta").finalAnswer).toBe("いった"); });
    it("Thể ない → いかない", () => { expect(generateSteps(verb, "nai").finalAnswer).toBe("いかない"); });
    it("Thể từ điển → いく", () => { expect(generateSteps(verb, "dict").finalAnswer).toBe("いく"); });
    it("choose_rule có đáp án là dạng ngoại lệ", () => {
      const ruleStep = generateSteps(verb, "te").steps.find(s => s.type === "choose_rule");
      expect(ruleStep).toBeDefined();
      expect(ruleStep.correctAnswer).toBe("いって");
    });
  });

  // Nhóm 3: べんきょうします
  describe("Nhóm 3 (～します) — べんきょうします", () => {
    const verb = { masu: "べんきょうします", group: 3, vi: "học" };
    it("Thể て → べんきょうして", () => { expect(generateSteps(verb, "te").finalAnswer).toBe("べんきょうして"); });
    it("Thể た → べんきょうした", () => { expect(generateSteps(verb, "ta").finalAnswer).toBe("べんきょうした"); });
    it("Thể ない → べんきょうしない", () => { expect(generateSteps(verb, "nai").finalAnswer).toBe("べんきょうしない"); });
    it("Thể từ điển → べんきょうする", () => { expect(generateSteps(verb, "dict").finalAnswer).toBe("べんきょうする"); });
    it("Phải có 2 bước: remove_masu + irregular_transform", () => {
      const result = generateSteps(verb, "te");
      expect(result.steps).toHaveLength(2);
      expect(result.steps[0].id).toBe("remove_masu");
      expect(result.steps[1].id).toBe("irregular_transform");
    });
  });

  // Nhóm 3: きます
  describe("Nhóm 3 — きます (bất quy tắc)", () => {
    const verb = { masu: "きます", group: 3, vi: "đến" };
    it("Thể て → きて", () => { expect(generateSteps(verb, "te").finalAnswer).toBe("きて"); });
    it("Thể た → きた", () => { expect(generateSteps(verb, "ta").finalAnswer).toBe("きた"); });
    it("Thể ない → こない", () => { expect(generateSteps(verb, "nai").finalAnswer).toBe("こない"); });
    it("Thể từ điển → くる", () => { expect(generateSteps(verb, "dict").finalAnswer).toBe("くる"); });
  });

  // Cấu trúc kết quả
  describe("Kiểm tra cấu trúc kết quả", () => {
    const verb = { masu: "たべます", group: 2, vi: "ăn" };
    it("Phải có steps, finalAnswer, verb, formId", () => {
      const result = generateSteps(verb, "te");
      expect(result).toHaveProperty("steps");
      expect(result).toHaveProperty("finalAnswer");
      expect(result).toHaveProperty("verb");
      expect(result).toHaveProperty("formId");
    });
    it("verb trong kết quả trùng với verb đầu vào", () => {
      expect(generateSteps(verb, "te").verb).toBe(verb);
    });
    it("formId trong kết quả đúng với đầu vào", () => {
      expect(generateSteps(verb, "nai").formId).toBe("nai");
    });
  });
});

// ══════════════════════════════════════════════════════════════════════════════
//  PHẦN 2: ConjugationLab class
// ══════════════════════════════════════════════════════════════════════════════

function makeStepsContainer() {
  const children = [];
  return {
    innerHTML: "",
    appendChild: vi.fn(el => children.push(el)),
    _children: children,
  };
}

function makeMockDom() {
  return {
    arena:          { hidden: true },
    verbDisplay:    { textContent: "" },
    verbMeaning:    { textContent: "" },
    targetForm:     { textContent: "" },
    groupBadge:     { textContent: "", className: "" },
    stepsContainer: makeStepsContainer(),
  };
}

let mockElements = {};

function setupDocumentMock() {
  mockElements = {
    "cl-verb-input":    { value: "" },
    "cl-input-error":   { style: { display: "none" }, textContent: "" },
    "cl-result-arrow":  { textContent: "" },
    "cl-result-answer": { textContent: "" },
  };
  vi.spyOn(document, "getElementById").mockImplementation(id => mockElements[id] ?? null);
  vi.spyOn(document, "createElement").mockImplementation(() => ({
    className: "", style: {}, innerHTML: "", appendChild: vi.fn(),
  }));
}

describe("ConjugationLab class", () => {
  let lab, dom;

  beforeEach(() => {
    dom = makeMockDom();
    setupDocumentMock();
    lab = new ConjugationLab(dom);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("constructor", () => {
    it("Khởi tạo selectedForm là 'te'", () => { expect(lab.selectedForm).toBe("te"); });
    it("Khởi tạo currentStepData là null", () => { expect(lab.currentStepData).toBeNull(); });
    it("verbs chứa allVerbs", () => {
      expect(lab.verbs).toBe(allVerbs);
      expect(lab.verbs.length).toBeGreaterThan(0);
    });
  });

  describe("setForm()", () => {
    it("Cập nhật selectedForm đúng", () => {
      lab.setForm("ta");   expect(lab.selectedForm).toBe("ta");
      lab.setForm("nai");  expect(lab.selectedForm).toBe("nai");
      lab.setForm("dict"); expect(lab.selectedForm).toBe("dict");
    });
    it("Không gọi conjugateDirect khi input rỗng", () => {
      mockElements["cl-verb-input"].value = "";
      const spy = vi.spyOn(lab, "conjugateDirect");
      lab.setForm("ta");
      expect(spy).not.toHaveBeenCalled();
    });
    it("Tự gọi conjugateDirect nếu input đang có từ", () => {
      mockElements["cl-verb-input"].value = "たべます";
      const spy = vi.spyOn(lab, "conjugateDirect");
      lab.setForm("ta");
      expect(spy).toHaveBeenCalledWith("たべます");
    });
  });

  describe("conjugateDirect()", () => {
    it("Ẩn arena khi masuForm rỗng", () => {
      lab.conjugateDirect("");
      expect(dom.arena.hidden).toBe(true);
    });
    it("Ẩn arena và hiện lỗi khi không tìm thấy động từ", () => {
      lab.conjugateDirect("テスト");
      expect(dom.arena.hidden).toBe(true);
      expect(mockElements["cl-input-error"].style.display).toBe("block");
    });
    it("Hiện arena khi tìm thấy động từ hợp lệ", () => {
      lab.conjugateDirect("たべます");
      expect(dom.arena.hidden).toBe(false);
    });
    it("Ẩn lỗi khi tìm thấy động từ hợp lệ", () => {
      mockElements["cl-input-error"].style.display = "block";
      lab.conjugateDirect("たべます");
      expect(mockElements["cl-input-error"].style.display).toBe("none");
    });
    it("Cập nhật currentStepData sau khi chia thể", () => {
      lab.conjugateDirect("たべます");
      expect(lab.currentStepData).not.toBeNull();
      expect(lab.currentStepData.finalAnswer).toBe("たべて");
    });
    it("Cập nhật verbDisplay và verbMeaning đúng", () => {
      lab.conjugateDirect("たべます");
      expect(dom.verbDisplay.textContent).toBe("たべます");
      expect(dom.verbMeaning.textContent).toBe("ăn");
    });
    it("Cập nhật targetForm đúng theo selectedForm", () => {
      lab.selectedForm = "nai";
      lab.conjugateDirect("のみます");
      expect(dom.targetForm.textContent).toBe("Thể ない");
    });
    it("groupBadge đúng cho Nhóm 2", () => { lab.conjugateDirect("たべます"); expect(dom.groupBadge.textContent).toBe("Nhóm 2"); });
    it("groupBadge đúng cho Nhóm 1", () => { lab.conjugateDirect("のみます"); expect(dom.groupBadge.textContent).toBe("Nhóm 1"); });
    it("groupBadge đúng cho Nhóm 3", () => { lab.conjugateDirect("べんきょうします"); expect(dom.groupBadge.textContent).toBe("Nhóm 3"); });
    it("Ghi đáp án vào cl-result-answer", () => {
      lab.conjugateDirect("たべます");
      expect(mockElements["cl-result-answer"].textContent).toBe("たべて");
    });
    it("Ghi nhãn thể vào cl-result-arrow", () => {
      lab.conjugateDirect("たべます");
      expect(mockElements["cl-result-arrow"].textContent).toBe("→ Thể て");
    });
    it("Gọi stepsContainer.appendChild để render bước", () => {
      lab.conjugateDirect("たべます");
      expect(dom.stepsContainer.appendChild).toHaveBeenCalled();
    });
  });

  // Kiểm thử bảng đáp án
  describe("Bảng đáp án conjugateDirect()", () => {
    const cases = [
      ["たべます",         "te",   "たべて"],
      ["たべます",         "ta",   "たべた"],
      ["たべます",         "nai",  "たべない"],
      ["たべます",         "dict", "たべる"],
      ["のみます",         "te",   "のんで"],
      ["のみます",         "ta",   "のんだ"],
      ["のみます",         "nai",  "のまない"],
      ["のみます",         "dict", "のむ"],
      ["かえります",       "te",   "かえって"],
      ["かえります",       "ta",   "かえった"],
      ["はたらきます",     "te",   "はたらいて"],
      ["はたらきます",     "ta",   "はたらいた"],
      ["べんきょうします", "te",   "べんきょうして"],
      ["べんきょうします", "nai",  "べんきょうしない"],
      ["いきます",         "te",   "いって"],
      ["いきます",         "ta",   "いった"],
      ["きます",           "nai",  "こない"],
      ["きます",           "dict", "くる"],
    ];
    cases.forEach(([masu, form, expected]) => {
      it(`${masu} [${form}] → ${expected}`, () => {
        lab.selectedForm = form;
        lab.conjugateDirect(masu);
        expect(mockElements["cl-result-answer"].textContent).toBe(expected);
      });
    });
  });

  // Dữ liệu allVerbs
  describe("allVerbs — Kiểm tra dữ liệu nguồn", () => {
    it("Phải có ít nhất 50 động từ", () => { expect(allVerbs.length).toBeGreaterThanOrEqual(50); });
    it("Mỗi verb có masu, group (1/2/3), vi", () => {
      allVerbs.forEach(v => {
        expect(v).toHaveProperty("masu");
        expect(v).toHaveProperty("group");
        expect(v).toHaveProperty("vi");
        expect([1, 2, 3]).toContain(v.group);
      });
    });
    it("Có たべます (Nhóm 2)", () => {
      const v = allVerbs.find(v => v.masu === "たべます");
      expect(v).toBeDefined(); expect(v.group).toBe(2);
    });
    it("Có のみます (Nhóm 1)", () => {
      const v = allVerbs.find(v => v.masu === "のみます");
      expect(v).toBeDefined(); expect(v.group).toBe(1);
    });
    it("Có べんきょうします (Nhóm 3)", () => {
      const v = allVerbs.find(v => v.masu === "べんきょうします");
      expect(v).toBeDefined(); expect(v.group).toBe(3);
    });
    it("Có いきます với irregular_te/irregular_ta đúng", () => {
      const v = allVerbs.find(v => v.masu === "いきます");
      expect(v).toBeDefined();
      expect(v.irregular_te).toBe("いって");
      expect(v.irregular_ta).toBe("いった");
    });
  });

  // targetForms
  describe("targetForms — cấu hình 4 thể", () => {
    it("Phải có đúng 4 thể: te, ta, nai, dict", () => {
      const ids = targetForms.map(f => f.id);
      expect(ids).toContain("te"); expect(ids).toContain("ta");
      expect(ids).toContain("nai"); expect(ids).toContain("dict");
      expect(ids).toHaveLength(4);
    });
    it("Mỗi form có id, label, labelJp", () => {
      targetForms.forEach(f => {
        expect(f).toHaveProperty("id");
        expect(f).toHaveProperty("label");
        expect(f).toHaveProperty("labelJp");
      });
    });
  });
});
