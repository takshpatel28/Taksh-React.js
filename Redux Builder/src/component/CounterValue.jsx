import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const { counter } = useSelector((store) => store.CounterReducer);

  return (
    <div className="counter-container">
      <h1 className="counter-value">{counter}</h1>
    </div>
  );
};

export default CounterValue;
