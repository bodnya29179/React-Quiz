import React from 'react';
import classes from './Answer.module.scss';

const Answer = ({ text, isSelected, selectCallback }) => {
  return (
    <button
      className={`${classes.answer} ${isSelected && classes.isSelected}`}
      onClick={selectCallback}>
      {text}
    </button>
  );
};

export default Answer;
