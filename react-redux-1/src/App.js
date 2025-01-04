import { useDispatch, useSelector } from 'react-redux'
import './index.css'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0 );
  // useSelector is used to get the data from the store or reducers like in this case we are getting the count(value) from the counterSlice
  // state.counter.value in this (counter) is a name of the reducer
  const count = useSelector((state) => state.counter.value);
  // useDispatch is used to dispatch the action to the store,, if want to execute the action so we need to dispatch the action
  const dispatch = useDispatch();

  function handleIncrementClick() {
      dispatch(increment());
  }

  function handleDecrementClick() {
      dispatch(decrement());
  }

  function handleResetClick() {
      dispatch(reset());
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className='container'>
        <button onClick={handleIncrementClick}> + </button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}> - </button>
        <br/>
        <br/>
        <button onClick={handleResetClick}> Reset </button>
        <br/>
        <br/>
        <input 
          type='Number'
          value={amount}
          placeholder='Enter Amount'
          onChange={(e) => setAmount(e.target.value)}
         />
         <br/>
        <br/>
        <button onClick={handleIncAmountClick}> Inc by Amount </button>
    </div>
  )
}

export default App;

