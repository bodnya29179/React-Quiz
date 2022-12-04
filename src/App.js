import { Fragment, useState } from 'react';
import { Quiz } from './components';
import classes from './App.module.scss';
import ipad from './assets/svg/ipad.svg';
import button from './assets/svg/button.svg';
import arrow from './assets/arrow.gif';
import minion from './assets/minion.gif';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startTheGame = () => setIsGameStarted(true);

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img className={classes.device} src={ipad} alt="iPad device"/>

        {
          !isGameStarted && (
            <Fragment>
              <img className={classes.clickMeArrow} src={arrow} alt=""/>
              <img className={classes.greetings} src={minion} alt=""/>
              <span className={classes.clickMeLabel}>Let's start the quiz</span>
            </Fragment>
          )
        }

        <button className={classes.startButton} onClick={startTheGame}>
          <img className={classes.buttonIcon} src={button} alt="Start button"/>
        </button>

        <div className={classes.quiz}>
          { isGameStarted && <Quiz/> }
        </div>
      </div>
    </div>
  );
}

export default App;
