import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    // increment,decrement n incrementByAmount are called actions
    increment: state => {
      state.value += 1
    },
    reset: state => {
        state.value = 0
    },
    // below it is taking old state in fn and based on old state it is retuning a new state
    decrement: state => {
      state.value -= 1
    },
    // reducer fn takes old state i.e (state) and action and use both and give a new state
    incrementByAmount: (state, action) => {
      // whatever the user type we return that with the help of (action.payload) below
      state.value += Number(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer