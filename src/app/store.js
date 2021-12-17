import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; // we name our reducer her since the export is default
import isLoggedReducer from '../features/login/loginSlice'; // we name our reducer her since the export is default

// here i can import all my reducers from my slices, i think need to assign them n the configure store.

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: isLoggedReducer
  },
});