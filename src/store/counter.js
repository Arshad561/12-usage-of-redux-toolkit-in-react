import { createSlice } from '@reduxjs/toolkit';

// initial counter state
const initialCounterState = {
  counter: 0,
  showCounter: true
}

// creating counterSlice
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter;
    }
  }
})

// redux-toolkit creates the action identifier automatically for us 
// and populate them as actions on counterSlice object
// we just need to export that actions and use it in other files to dispatch actions
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;