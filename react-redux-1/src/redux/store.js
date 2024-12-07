import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    // below written (counter) is came from the slice name and  (counterReducer) came from the slice
    counter: counterReducer
  },
})

//steps:
// create store
// wrap app component under Provider
// create Slice
// register reducer in store