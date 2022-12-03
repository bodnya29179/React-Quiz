import React from 'react';
import classes from './Quiz.module.scss';
import QuizHeader from '../quiz-header/QuizHeader';

const Quiz = () => {
  return (
    <div>
      <QuizHeader currentQuestion={1} allQuestions={5}/>
    </div>
  );
};

export default Quiz;
