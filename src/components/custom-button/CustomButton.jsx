import React from 'react';
import classes from './CustomButton.module.scss';

const CustomButton = ({ clickCallback }) => {
  return (
    <button className={classes.btn} onClick={clickCallback}></button>
  );
};

export default CustomButton;
