import React, { useEffect, useState } from 'react';
import Timer from '../timer/Timer';
import classes from './QuizHeader.module.scss';

const QuizHeader = ({ currentQuestion, allQuestions, timeoutCallback }) => {
  const [currentNumber, setCurrentNumber] = useState();

  useEffect(() => setCurrentNumber(currentQuestion), [currentQuestion]);

  return (
    <div>
      <Timer seconds={10} timeoutCallback={timeoutCallback} shouldRerender={{}}/>

      <h1 className={classes.counter}>
        <span className={classes.numberOfQuestion}>{currentNumber}</span>
        &nbsp;of&nbsp;
        <span className={classes.numberOfQuestion}>{allQuestions}</span>
      </h1>
    </div>
  );
};

export default QuizHeader;
