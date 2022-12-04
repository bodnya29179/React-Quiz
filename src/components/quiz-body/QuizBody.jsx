import React, { useState } from 'react';
import Answer from '../answer/Answer';
import classes from './QuizBody.module.scss';

const QuizBody = ({ question, answers, selectAnswerCallback }) => {
  const [selectedAnswer, setSelectedAnswer] = useState();

  const answerChange = (answer) => {
    setSelectedAnswer(answer);
    selectAnswerCallback(answer);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Question:</h2>

      <span className={classes.question}>{question}</span>

      <div className={classes.answersContainer}>
        {
          answers.map((answer, index) => (
            <Answer
              key={index}
              text={answer.text}
              isSelected={selectedAnswer === answer.text}
              selectCallback={answerChange.bind(this, answer)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default QuizBody;
