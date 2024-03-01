import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { ApiShow } from '../../types';

export const fetchShowData = createAsyncThunk(
  'show/fetchData',
  async (id: string) => {
    const response = await axiosApi.get<ApiShow>('/shows/' + id);
    return response.data;
  }
);
