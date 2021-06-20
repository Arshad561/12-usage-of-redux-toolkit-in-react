import { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const [counter, showCounter] = useSelector(state => [state.counter.counter, state.counter.showCounter]);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggleCounter());
  };

  const onIncrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const onDecrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick = {onIncrementHandler}>Increment</button>
        <button onClick = {onDecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Example for class based components

// class Counter extends Component {
//   toggleCounterHandler = () => { };

//   onIncrementHandler = () => {
//     this.props.increment();
//   }

//   onDecrementHandler = () => {
//     this.props.decrement();
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.onIncrementHandler}>Increment</button>
//           <button onClick={this.onDecrementHandler}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }

// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'INCREMENT'}),
//     decrement: () => dispatch({type: 'DECREMENT'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
