import { createSlice } from '@reduxjs/toolkit';
import { fetchShowData } from './showThunks';
import { RootState } from '../../app/store';

interface ShowState {
  data: {
    name: string;
    rating: number | null;
    image: string;
    summary: string;
    genres: string[];
  };
  loading: boolean;
  error: boolean;
}

const initialState: ShowState = {
  data: {
    name: '',
    rating: null,
    image: '',
    summary: '',
    genres: [],
  },
  loading: false,
  error: false,
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShowData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchShowData.fulfilled, (state, { payload: show }) => {
        state.loading = false;
        const newShow = {
          name: show.name,
          rating: show.rating.average,
          image: show.image.medium,
          summary: show.summary,
          genres: show.genres,
        };
        state.data = newShow;
      })
      .addCase(fetchShowData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const showReducer = showSlice.reducer;
export const selectShow = (state: RootState) => state.show.data;