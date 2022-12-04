import classes from './App.module.scss';
import { Quiz } from './components';
import ipad from './assets/ipad.svg';
import button from './assets/button.svg';
import { useState } from 'react';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startTheGame = () => setIsGameStarted(true);

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img className={classes.device} src={ipad} alt="iPad device"/>

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
