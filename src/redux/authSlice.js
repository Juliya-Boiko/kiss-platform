import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupUserAsync } from "api/auth";

const initialState = {
  //resp: null
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
      // token.set(data.token);
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
    builder.addCase(signupUser.fulfilled, (state, { payload }) => {
      state.avatar = payload.avatar;
      state.name = payload.name;
      state.userId = payload.userId;
      state.token = payload.token;
      state.isLogged = true;
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
