export const initialCommentQuestions = [
    {
        question: 'What is React Js ?',
        answer: ''
    },
    {
        question: 'What is Node Js ?',
        answer: ''
    },
    {
        question: 'What is Express Js ?',
        answer: ''
    }
];
export const initialMcqQuestions = [
    {
        question: 'What is React Js Mcq?',
        answer: [
            'Server Side Language1 ',
            'Server Side Language2',
            'Server Side Language3',
            'Server Side Language4'
        ]
    },
    {
        question: 'What is Node Js Mcq ?',
        answer: [
            'Server Side Language5',
            'Server Side Language',
            'Server Side Language',
            'Server Side Language'
        ]    
    },
    {
        question: 'What is Express Js Mcq ?',
        answer: [
            'Server Side Language',
            'Server Side Language',
            'Server Side Language',
            'Server Side Language'
        ]    
    }
];
export const initialQuestions = [
    ...(initialCommentQuestions.map((question) => {
        return {
            question: question.question,
            answer: ''
        };
    })),
    ...(initialMcqQuestions.map((question) => {
        return {
            question: question.question,
            answer: ''
        };
    })),
    
];
