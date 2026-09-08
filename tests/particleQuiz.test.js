import { describe, it, expect, beforeEach } from 'vitest';
import { ParticleQuiz } from '../features/particleQuiz.js';

describe('Particle Quiz Logic', () => {
  let mockDom;
  let quiz;

  beforeEach(() => {
    // Giả lập các thành phần DOM mà ParticleQuiz sử dụng
    mockDom = {
      startScreen: { hidden: false },
      gameScreen: { hidden: true },
      endScreen: { hidden: true },
      progressBar: { style: { width: '0%' } },
      progressText: { textContent: '' },
      scoreDisplay: { textContent: '0' },
      lessonBadge: { textContent: '' },
      diffBadge: { textContent: '', className: '' },
      questionText: { innerHTML: '' },
      translationText: { textContent: '' },
      choicesArea: { hidden: true, innerHTML: '', appendChild: function(child) { this.children = this.children || []; this.children.push(child); } },
      typingArea: { hidden: true },
      typingInput: { value: '', focus: () => {}, disabled: false, className: '' },
      explanation: { hidden: true, textContent: '', className: '' },
      endScore: { textContent: '0' },
      endCorrect: { textContent: '0' },
      endWrong: { textContent: '0' },
      endPercent: { textContent: '0%' },
      endMedal: { textContent: '' },
      wrongListContainer: { innerHTML: '', appendChild: () => {} },
      
      // Stub for querySelectorAll
      questionTextRef: {
        querySelectorAll: () => {
          return [{ textContent: '', className: '' }];
        }
      }
    };
    
    // Cần thêm querySelectorAll cho questionText và choicesArea
    mockDom.questionText.querySelectorAll = () => [{ textContent: '', className: '' }];
    mockDom.choicesArea.querySelectorAll = () => {
      return (mockDom.choicesArea.children || []).map(btn => {
        btn.classList = { add: (c) => btn.className += ' ' + c };
        return btn;
      });
    };

    // Giả lập global.document
    global.document = {
      createElement: (tag) => {
        return {
          className: '',
          textContent: '',
          innerHTML: '',
          dataset: {},
          style: {},
          appendChild: function(child) { this.children = this.children || []; this.children.push(child); },
          addEventListener: () => {}
        };
      }
    };

    quiz = new ParticleQuiz(mockDom);
    
    // Override alert để không bị block trong môi trường node
    quiz._showMessage = (msg) => { console.log(msg); };
  });

  it('Khởi tạo state mặc định đúng cách', () => {
    expect(quiz.state.score).toBe(0);
    expect(quiz.state.mode).toBe('multiple');
  });

  it('Bắt đầu game với bộ lọc "Dễ"', () => {
    quiz.startGame({ difficulty: 1 });
    // Vì mock data lấy từ particles.js có 30 câu hỏi Dễ
    expect(quiz.state.total).toBe(30);
    expect(mockDom.startScreen.hidden).toBe(true);
    expect(mockDom.gameScreen.hidden).toBe(false);
  });

  it('Chuyển câu hỏi tiếp theo và render UI', () => {
    quiz.startGame({ difficulty: 1 });
    expect(quiz.state.currentQ).not.toBeNull();
    // 30 câu -> Làm 1 câu còn 29 câu trong queue
    expect(quiz.queue.length).toBe(29);
    
    // Check progress text
    expect(mockDom.progressText.textContent).toBe('1 / 30');
  });

  it('Trả lời đúng được cộng điểm và hiển thị feedback', () => {
    quiz.startGame({ difficulty: 1 });
    const currentQ = quiz.state.currentQ;
    
    // Giả lập người dùng nhập đáp án đúng
    quiz._submitAnswer(currentQ.answer);
    
    expect(quiz.state.correct).toBe(1);
    expect(quiz.state.score).toBe(5); // Dễ được 5 điểm
    expect(mockDom.explanation.hidden).toBe(false);
    expect(mockDom.explanation.textContent).toContain('✅');
  });

  it('Trả lời sai bị đưa vào danh sách sai (wrongList)', () => {
    quiz.startGame({ difficulty: 2 }); // Trung bình -> 10 điểm
    const currentQ = quiz.state.currentQ;
    
    // Chọn đại 1 đáp án sai (distractor)
    const wrongAnswer = currentQ.distractors[0];
    quiz._submitAnswer(wrongAnswer);
    
    expect(quiz.state.wrong).toBe(1);
    expect(quiz.state.score).toBe(0);
    expect(quiz.state.wrongList.length).toBe(1);
    expect(mockDom.explanation.textContent).toContain('❌');
  });
});
