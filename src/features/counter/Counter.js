import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// We need to import all the reducers and functions here
import {decrement,increment,incrementByAmount,incrementAsync,selectCount} from './counterSlice';

// This is essentially a component, here we are going to be returning JSX
// We need to use useSelector to pull in the data from the store.
// We need to use useDispatch to make changes to that store data

export function Counter() {
  const count = useSelector(selectCount);                       // assigns the global state of selectCount to "count"
  const dispatch = useDispatch();                               // Allows use to make changes to the store state
  const [incrementAmount, setIncrementAmount] = useState('2');  

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
