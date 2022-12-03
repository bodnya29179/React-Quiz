import { Fragment } from 'react';
import classes from './App.module.scss';
import { Quiz } from './components';

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.quiz}>
        <Quiz/>
      </div>
    </div>
  );
}

export default App;
