import { createSlice } from '@reduxjs/toolkit';
import { ApiShow } from '../../types';
import { fetchSearchResults } from './showsThunks';
import { RootState } from '../../app/store';

interface ShowsState {
  items: ApiShow[];
  loading: boolean;
  error: boolean;
}

const initialState: ShowsState = {
  items: [],
  loading: false,
  error: false,
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        const formattedShows = action.payload.map((key) => key.show);
        state.items = formattedShows;
      })
      .addCase(fetchSearchResults.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const showsReducer = showsSlice.reducer;
export const selectTvShows = (state: RootState) => state.shows.items;
