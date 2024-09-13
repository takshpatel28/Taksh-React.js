import React from 'react';
import './App.css';
import Counter from './component/Counter';
import CounterValue from './component/CounterValue';
import CounterBtn from './component/CounterBtn';
import Theme from './component/Theme';
import { useSelector } from 'react-redux';

const App = () => {
  const theme = useSelector((store) => store.ThemeReducer);

  return (
    <div className={`app-container ${theme}`}>
      <Theme />
      <Counter />
      <CounterValue />
      <CounterBtn />
    </div>
  );
};

export default App;
