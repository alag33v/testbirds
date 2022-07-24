import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users';

const store = configureStore({
  reducer: {
    users: userReducer
  }
});

type RootState = ReturnType<typeof store.getState>;
export const selectUsers = (state: RootState) => state.users.users;
export const allSelectUsers = (state: RootState) => state.users.allUsers;
export default store;
