import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showCounter);

  const onIncrement = ()=>{
    dispatch({type:'increment'});
  }

  const onDecrement = ()=>{
    dispatch({type:'decrement'});
  }

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 });
  };  

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className='counter'>
        <button onClick={onIncrement} >Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={onDecrement} >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// class Counter extends Component {
//   onIncrement(){
//     this.props.increment();
//   }

//   onDecrement(){
//     this.props.decrement();
//   }

//   toggleCounterHandler(){

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className="counter">
//           <button onClick={this.onIncrement.bind(this)}>Increment</button>
//           <button onClick={this.onDecrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment:()=> dispatch({ type: "increment" }),
//     decrement:()=> dispatch({ type: "decrement" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
