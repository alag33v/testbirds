import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allUsers } from '../assets/data';
import { IUser } from './../types';

interface UsersSliceState {
  users: IUser[];
  allUsers: IUser[];
}

const initialState: UsersSliceState = {
  users: [],
  allUsers
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.allUsers = state.allUsers.filter(
        user => user.id !== action.payload.id
      );
      state.users = [...state.users, action.payload];
    },

    removeUser: (state, action: PayloadAction<IUser>) => {
      state.users = state.users.filter(user => user.id !== action.payload.id);
      state.allUsers = [...state.allUsers, action.payload];
    }
  }
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
