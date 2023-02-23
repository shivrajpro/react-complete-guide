import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  const onIncrement = ()=>{
    dispatch({type:'increment'});
  }
 
  const onDecrement = ()=>{
    dispatch({type:'decrement'});
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className='counter'>
        <button onClick={onIncrement} >Increment</button>
        <button onClick={onDecrement} >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
