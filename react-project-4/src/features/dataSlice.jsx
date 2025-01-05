import { createSlice } from '@reduxjs/toolkit';
import mockData from '../components/random.json';

// Extract fields from mock data
const getMockDataFields = (data) => {
  const firstEntry = data.mockData[0]; // Get the first object
  const fields = [];
  for (const [key, value] of Object.entries(firstEntry)) {
    fields.push({ header: key, value: value });
  }
  return fields;
};

// Initial state with mock data fields
const initialState = {
  fields: getMockDataFields(mockData),
};

// Create a slice of state for data
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

// Selector to access the fields in state
export const selectFields = (state) => state.data.fields;

// Export the reducer
export default dataSlice.reducer;
