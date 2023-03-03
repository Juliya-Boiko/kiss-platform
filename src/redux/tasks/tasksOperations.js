import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTasksAsync, addTaskAsync } from "api/tasks";
import { Notify } from 'notiflix';

Notify.init({
  position: 'center-top',
  distance: '40px',
});

export const getAllTasks = createAsyncThunk(
  'tasks/getAll',
  async (value) => {
    try {
      const data = await getAllTasksAsync(value);
      return data;
    } catch (error) {
      Notify.failure(`${error.response.data.message}`);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/add',
  async (values) => {
    try {
      await addTaskAsync(values);
      Notify.success('Add new task successful!');
    } catch (error) {
      Notify.failure(`${error.response.data.message}`);
    }
  }
);