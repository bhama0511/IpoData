// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import ipoReducer from './ipoSlice';

const store = configureStore({
  reducer: {
    ipo: ipoReducer,
  },
});

export default store;