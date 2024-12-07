import { configureStore } from '@reduxjs/toolkit';
import { tableReducer } from '../features/tableSlice';

export const store = configureStore({
  reducer: {
    table: tableReducer, // Add table slice to the store
  },
});



//steps:
// create store
// wrap app component under Provider
// create Slice
// register reducer in store