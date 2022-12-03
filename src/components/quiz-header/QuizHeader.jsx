import React from 'react';
import Timer from '../timer/Timer';
import classes from './QuizHeader.module.scss';

const QuizHeader = ({ currentQuestion, allQuestions, timeoutCallback }) => {
  return (
    <div>
      <Timer seconds={10} timeoutCallback={timeoutCallback}/>

      <h1 className={classes.counter}>
        <span className={classes.numberOfQuestion}>{currentQuestion}</span>
        &nbsp;of&nbsp;
        <span className={classes.numberOfQuestion}>{allQuestions}</span>
      </h1>
    </div>
  );
};

export default QuizHeader;
