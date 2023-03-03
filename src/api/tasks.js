import axios from "axios";
import { token } from "./token";

export const getAllTasksAsync = async (value) => {
  try {
    token.set(value);
    const { data } = await axios.get('/tasks');
    return data.tasks;
  } catch (error) {
    console.log('error--->', error);
  }
};

export const addTaskAsync = async (values) => {
  const { title, descr, status } = values;
  try {
    token.set(values.token);
    await axios.post('/tasks', { title, descr, status });
    return true;
  } catch (error) {
    console.log('error--->', error);
  }
};

export const getTaskByIdAsync = async (values) => {
  try {
    token.set(values.token);
    const data = await axios.get(`/tasks/${values.id}`);
    return data;
  } catch (error) {
    console.log('error--->', error);
  }
};

export const updateTaskAsync = async (values) => {
  const { title, descr, status } = values;
  try {
    token.set(values.token);
    const data = await axios.put(`/tasks/${values.id}`, { title, descr, status });
    return data;
  } catch (error) {
    console.log('error--->', error);
  }
};

export const deleteTaskAsync = async (values) => {
  // console.log('deleteTaskAsync--->', values);
  try {
    token.set(values.token);
    const data = await axios.delete(`/tasks/${values._id}`);
    return data;
  } catch (error) {
    console.log('error--->', error);
  }
};