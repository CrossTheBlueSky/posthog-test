export interface Question {
    id: number;
    text: string;
    options: string[];
  }
  
  export interface QuizState {
    currentQuestionIndex: number;
    answers: string[];
  }