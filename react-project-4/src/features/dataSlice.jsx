
import { createSlice } from '@reduxjs/toolkit';
import mockData from '../components/random.json';

// Transform mockData into the required fields format
const transformMockDataToFields = (data) => {
  const entry = data.mockData[0]; // Access the first object
  return Object.entries(entry).map(([key, value]) => ({
    header: key,
    value: value
  }));
};

const initialState = {
  fields: transformMockDataToFields(mockData), // Dynamically populate fields
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export const selectFields = (state) => state.data.fields;
export default dataSlice.reducer;

