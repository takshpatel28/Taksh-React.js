import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment, Reset } from '../redux/counter/action';

const CounterBtn = () => {
  const dispatch = useDispatch();
  const {counter}=useSelector((store)=>store.CounterReducer)
  return (
    <div className="counter-btn-container">
      <button className="counter-button increment" onClick={() => dispatch(Increment())}>
        ADD
      </button>
      <button className="counter-button decrement" disabled={counter==0}  onClick={() => dispatch(Decrement())}>
        REDUCE
      </button>
      <button onClick={()=>dispatch(Reset())}>RESET</button>
    </div>
  );
};

export default CounterBtn;
