import axios from "axios";
import { token } from "./token";
import { Notify } from 'notiflix';

Notify.init({
  position: 'center-top',
  distance: '40px',
});

export const getAllTasksAsync = async (value) => {
  token.set(value);
  const { data } = await axios.get('/tasks');
  return data.tasks;
};

export const addTaskAsync = async (values) => {
  const { title, descr, status } = values;
  token.set(values.token);
  await axios.post('/tasks', { title, descr, status });
  return true;
};

export const getTaskByIdAsync = async (values) => {
  try {
    token.set(values.token);
    const data = await axios.get(`/tasks/${values.id}`);
    return data;
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
};

export const updateTaskAsync = async (values) => {
  const { title, descr, status } = values;
  try {
    token.set(values.token);
    const data = await axios.put(`/tasks/${values.id}`, { title, descr, status });
    return data;
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
};

export const deleteTaskAsync = async (values) => {
  try {
    token.set(values.token);
    const data = await axios.delete(`/tasks/${values._id}`);
    return data;
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
};