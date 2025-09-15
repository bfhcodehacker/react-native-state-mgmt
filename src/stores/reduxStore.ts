import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducers/todoReducer';

export const reduxStore = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export type AppStore = typeof reduxStore;
export type AppDispatch = typeof reduxStore.dispatch;
export type RootState = ReturnType<typeof reduxStore.getState>