import React, { Fragment, useState } from 'react';
import classes from './Quiz.module.scss';
import QuizHeader from '../quiz-header/QuizHeader';
import QuizBody from '../quiz-body/QuizBody';
import { QUIZ } from '../../constants';

const Quiz = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const nextQuestion = () => setCurrentQuestionIndex(currentQuestionIndex + 1);

  const timeout = () => nextQuestion();

  const selectAnswer = (answer) => {
    if (answer.isCorrect) {
      setTotalScore((previousValue) => previousValue + 1);
    }

    nextQuestion();
  };

  return (
    <div>
      {
        currentQuestionIndex === QUIZ.length ? (
          <Fragment>
            Finished! Your score is {totalScore}/{QUIZ.length}.
          </Fragment>
        ) : (
          <Fragment>
            <QuizHeader
              currentQuestion={currentQuestionIndex + 1}
              allQuestions={QUIZ.length}
              timeoutCallback={timeout}
            />

            <QuizBody
              question={QUIZ[currentQuestionIndex].question}
              answers={QUIZ[currentQuestionIndex].answers}
              selectAnswerCallback={selectAnswer}
            />
          </Fragment>
        )
      }
    </div>
  );
};

export default Quiz;
