export interface QuestionInterface {
    question: string;
    answer: string;
}
export interface SetQuestionInterface {
    index: number;
    question: string;
    setAnswer(index: number, answer: string): void;
}
export interface SetMcqQuestionInterface {
    index: number;
    question: string;
    options: string[];
    setAnswer(index: number, answer: string): void;
}
export interface DashBoardInterface {
    questionsData: QuestionInterface[];
}
export interface LoginInterface {
    isLoggedIn: boolean;
}
