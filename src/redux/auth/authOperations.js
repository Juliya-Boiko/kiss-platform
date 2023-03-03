import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupUserAsync, loginUserAsync, logoutUserAsync,
  forgotPasswordAsync, getUserAsync, changePasswordAsync, updateUserAsync
} from "api/auth";
import { Notify } from 'notiflix';

Notify.init({
  position: 'center-top',
  distance: '40px',
});

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (userData) => {
    try {
      const data = await signupUserAsync(userData);
      Notify.success('Registration successful!');
      return data;
    } catch (error) {
      Notify.failure(`${error.response.data.message}`);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (values) => {
    try {
      const data = await loginUserAsync(values);
      Notify.success('Login successful!');
      return data;
    } catch (error) {
      Notify.failure(`${error.response.data.message}`);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (value) => {
    try {
      await logoutUserAsync(value);
    } catch (error) {
      Notify.failure(`${error.response.data.message}`);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (values) => {
    try {
      await forgotPasswordAsync(values);
    } catch (error) {
      Notify.failure(`${error.response.data.message}`);
    }
  }
);

export const getUserId = createAsyncThunk(
  'auth/getUser',
  async (value) => {
    try {
      const data = await getUserAsync(value);
      return data;
    } catch (error) {
      console.log('getUserId ->', error);
      // Notify.failure(error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (values) => {
    try {
      const data = await changePasswordAsync(values);
      return data;
    } catch (error) {
      Notify.failure(`${error.response.data.message}`);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (values) => {
    try {
      const data = await updateUserAsync(values);
      return data;
    } catch (error) {
      Notify.failure(`${error.response.data.message}`);
    }
  }
)