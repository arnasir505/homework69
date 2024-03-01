import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
});

export const searchReducer = searchSlice.reducer;
