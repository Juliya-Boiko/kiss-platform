import { createSlice } from "@reduxjs/toolkit";
import {
  signupUser, loginUser, logoutUser, forgotPassword,
  getUserId, changePassword, updateUser, deleteUser
} from "./authOperations";

const initialState = {
  avatar: null,
  name: '',
  userId: null,
  token: null,
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(signupUser.fulfilled, (state, { payload }) => {
      state.avatar = payload.avatar;
      state.name = payload.name;
      state.userId = payload.userId;
      state.token = payload.token;
      state.isLogged = true;
    })
    .addCase(loginUser.fulfilled, (state, { payload }) => {
      state.avatar = payload.avatar;
      state.name = payload.name;
      state.userId = payload.userId;
      state.token = payload.token;
      state.isLogged = true;
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.avatar = null;
      state.name = '';
      state.userId = null;
      state.token = null;
      state.isLogged = false;
    })
    .addCase(forgotPassword.fulfilled, (state) => {
      state.avatar = null;
      state.name = '';
      state.userId = null;
      state.token = null;
      state.isLogged = false;
    })
    .addCase(getUserId.fulfilled, (state, { payload }) => {
      state.userId = payload.userId;
    })
    .addCase(changePassword.fulfilled, (state, { payload }) => {
      state.avatar = payload.avatar;
      state.name = payload.name;
      state.userId = payload.userId;
      state.token = payload.token;
      state.isLogged = true;
    })
    .addCase(updateUser.fulfilled, (state, { payload }) => {
      state.name = payload;
    })
    .addCase(deleteUser.fulfilled, (state) => {
      state.avatar = null;
      state.name = '';
      state.userId = null;
      state.token = null;
      state.isLogged = false;
    })
  }
})
