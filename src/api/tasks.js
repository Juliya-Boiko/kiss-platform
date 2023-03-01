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