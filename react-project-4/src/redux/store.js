import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});




//steps:
// create store
// wrap app component under Provider
// create Slice
// register reducer in store