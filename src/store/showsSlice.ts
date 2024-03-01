import { createSlice } from '@reduxjs/toolkit';
import { ApiShows } from '../types';

interface ShowsState {
  items: ApiShows[];
  loading: boolean;
}

const initialState: ShowsState = {
  items: [],
  loading: false,
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
});

export const showsReducer = showsSlice.reducer;
