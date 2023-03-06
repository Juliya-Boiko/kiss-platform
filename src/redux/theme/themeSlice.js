import { createSlice } from "@reduxjs/toolkit";
//import { getAllTasks, addTask } from "./tasksOperations";

const initialState = {
  theme: true
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return { theme: !state.theme }
    },
  }
})

export const { toggleTheme } = themeSlice.actions;