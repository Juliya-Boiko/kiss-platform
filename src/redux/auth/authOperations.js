import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupUserAsync, loginUserAsync, logoutUserAsync,
  forgotPasswordAsync, getUserAsync, changePasswordAsync
} from "api/auth";

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

export const getUserId = createAsyncThunk(
  'auth/getUser',
  async (values) => {
    try {
      const data = await getUserAsync();
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
      const data = await changePasswordAsync();
      // Notify.success('Registration successful!');
      console.log('auth/changePassword --->',data);
      return data;
    } catch (error) {
      console.log(error);
      // Notify.failure(error.message);
    }
  }
);