import { createSlice } from '@reduxjs/toolkit';

// initail auth state
const initialAuthState = {
  isAuthenticated: false
}

// creating authSlice
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
})

// redux-toolkit creates the action identifier automatically for us 
// and populate them as actions on counterSlice object

// we just need to export that actions
export const authActions = authSlice.actions;

export default authSlice.reducer;