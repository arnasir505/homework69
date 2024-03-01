import { configureStore } from '@reduxjs/toolkit';
import { showsReducer } from '../store/showsSlice/showsSlice';
import { searchReducer } from '../store/searchSlice/searchSlice';
import { showReducer } from '../store/showSlice/showSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    shows: showsReducer,
    show: showReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
