import { Fragment } from 'react';
import classes from './App.module.scss';
import { Quiz } from './components';
import ipad from './assets/ipad.svg';

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={ipad} alt="iPad device"/>

        <div className={classes.quiz}>
          <Quiz/>
        </div>
      </div>
    </div>
  );
}

export default App;
