import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupUserAsync, loginUserAsync, logoutUserAsync, forgotPasswordAsync, getUserAsync } from "api/auth";

const initialState = {
  avatar: null,
  name: '',
  userId: null,
  token: null,
  isLogged: false,
};

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (values) => {
    try {
      const data = await signupUserAsync();
      // Notify.success('Registration successful!');
      return data;
      //console.log(data);
    } catch (error) {
      console.log(error);
      // Notify.failure(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (values) => {
    try {
      const data = await loginUserAsync();
      // Notify.success('Registration successful!');
      return data;
      //console.log(data);
    } catch (error) {
      console.log(error);
      // Notify.failure(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (values) => {
    try {
      await logoutUserAsync();
      //console.log(data);
    } catch (error) {
      console.log(error);
      // Notify.failure(error.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (values) => {
    try {
      await forgotPasswordAsync();
    } catch (error) {
      console.log('forgotPasswordERROR ->', error);
      // Notify.failure(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (values) => {
    try {
      const data = await getUserAsync();
      // Notify.success('Registration successful!');
      return data;
      //console.log(data);
    } catch (error) {
      console.log(error);
      // Notify.failure(error.message);
    }
  }
);

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
  }
})

  // extraReducers: {
  //   [signupUser.fulfilled](state, { payload }) {
  //     state.avatar = payload.avatar;
  //     state.name = payload.name;
  //     state.userId = payload.userId;
  //     state.token = payload.token;
  //     state.isLogged = true;
  //   }
  // }
