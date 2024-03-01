import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (state, { payload: inputValue }: PayloadAction<string>) => {
      state.value = inputValue;
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const {updateSearch} = searchSlice.actions;