import { createSlice } from "@reduxjs/toolkit";
import { getAllTasks, addTask } from "./tasksOperations";

const initialState = {
  filter: '',
  items: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasks.fulfilled, (state, { payload }) => {
        state.items = [...payload];
      })
      .addCase(addTask.fulfilled, () => {})
  }
})