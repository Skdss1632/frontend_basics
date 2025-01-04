import { createSlice } from '@reduxjs/toolkit';
import { mockData } from "../components/random";

const initialState = {
  tableData: mockData, // Initial state for table data
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addRow: (state, action) => {
      state.tableData.push(action.payload); // Add a new row
    },
    setTableData: (state, action) => {
      state.tableData = action.payload; // Replace entire table data
    },
  },
});

export const { addRow, setTableData } = tableSlice.actions;

// exporting the reducer
export const tableReducer = tableSlice.reducer;

