import React, { useState } from 'react';
import Answer from '../answer/Answer';

const QuizBody = ({ question, answers, selectAnswerCallback }) => {
  const [selectedAnswer, setSelectedAnswer] = useState();

  const answerChange = (answer) => {
    setSelectedAnswer(answer);
    selectAnswerCallback(answer);
  };

  return (
    <div>
      <h2>Question:</h2>
      <span>{question}</span>

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
  );
};

export default QuizBody;
