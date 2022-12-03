import React, { useEffect, useState } from 'react';
import classes from './Timer.module.scss';
import { PROGRESS_BAR_COLORS } from '../../constants';

const Timer = ({ seconds, timeoutCallback }) => {
  const [progressWidth, setProgressWidth] = useState(100);
  const [progressColor, setProgressColor] = useState(classes[PROGRESS_BAR_COLORS.green]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressWidth((previousWidth) => {
        const widthPerSecond = previousWidth - (100 / seconds);

        return widthPerSecond > 0 ? widthPerSecond : 0;
      });
    }, 1_000);

    setTimeout(() => {
      clearInterval(interval);
      timeoutCallback();
    }, seconds * 1_000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let color;

    switch(true) {
      case (progressWidth > 60):
        color = PROGRESS_BAR_COLORS.green;
        break;
      case (progressWidth > 30):
        color = PROGRESS_BAR_COLORS.orange;
        break;
      default:
        color = PROGRESS_BAR_COLORS.red;
        break;
    }

    setProgressColor(classes[color]);
  }, [progressWidth]);

  return (
    <div style={{ width: `${progressWidth}%` }} className={`${classes.progressBar} ${progressColor}`}></div>
  );
};

export default Timer;
