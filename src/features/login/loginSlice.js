import { createSlice } from '@reduxjs/toolkit';

export const logged = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    signIn: state => {
        return !state
    }
  },
});

export const { signIn } = logged.actions;

export default logged.reducer;