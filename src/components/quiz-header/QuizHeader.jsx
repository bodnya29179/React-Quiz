import React from 'react';
import Timer from '../timer/Timer';

const QuizHeader = () => {
  const timeout = () => {};

  return (
    <div>
      <Timer seconds={10} timeoutCallback={timeout}/>
    </div>
  );
};

export default QuizHeader;
