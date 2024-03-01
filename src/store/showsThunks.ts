import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { RootState } from '../app/store';
import { ApiShows } from '../types';

export const fetchSearchResults = createAsyncThunk<
  ApiShows[],
  undefined,
  { state: RootState }
>('search/fetchResults', async (_arg, thunkApi) => {
  const currentSearchValue = thunkApi.getState().search.value;
  const response = await axiosApi.get<ApiShows[] | []>(
    '/search/shows?q=' + currentSearchValue
  );
  return response.data;
});
