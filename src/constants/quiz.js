import { v4 as uuidv4 } from 'uuid';

export const QUIZ = Object.freeze([
  {
    questionId: uuidv4(),
    question: 'Fake question #1?',
    answers: [
      {
        answerId: uuidv4(),
        text: 'Fake answer 1',
        isCorrect: true,
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 2',
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 3',
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 4',
      },
    ],
  },
  {
    questionId: uuidv4(),
    question: 'Fake question #2?',
    answers: [
      {
        answerId: uuidv4(),
        text: 'Fake answer 1',
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 2',
        isCorrect: true,
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 3',
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 4',
      },
    ],
  },
  {
    questionId: uuidv4(),
    question: 'Fake question #3?',
    answers: [
      {
        answerId: uuidv4(),
        text: 'Fake answer 1',
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 2',
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 3',
        isCorrect: true,
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 4',
      },
    ],
  },
  {
    questionId: uuidv4(),
    question: 'Fake question #4?',
    answers: [
      {
        answerId: uuidv4(),
        text: 'Fake answer 1',
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 2',
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 3',
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 4',
        isCorrect: true,
      },
    ],
  },
  {
    questionId: uuidv4(),
    question: 'Fake question #5?',
    answers: [
      {
        answerId: uuidv4(),
        text: 'Fake answer 1',
        isCorrect: true,
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 2',
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 3',
      },
      {
        answerId: uuidv4(),
        text: 'Fake answer 4',
      },
    ],
  },
]);
