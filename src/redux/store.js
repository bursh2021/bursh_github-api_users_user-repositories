import { configureStore } from '@reduxjs/toolkit';
import GithubApiUsers from './reducer'

export const store = configureStore({
  reducer: {
    GithubApiUsers
  },
});
