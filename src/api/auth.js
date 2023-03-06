import axios from "axios";
import { BASE_URL } from "constants/baseUrl";
import { token } from "./token";
import { Notify } from 'notiflix';

axios.defaults.baseURL = BASE_URL;

Notify.init({
  position: 'center-top',
  distance: '40px',
});

export const signupUserAsync = async (values) => {
  const { name, email, password } = values;
  const { data } = await axios.post('/auth/signup', { name, email, password });
  token.set(data.token);
  return data;
};

export const loginUserAsync = async (values) => {
  const { email, password } = values;
  const { data } = await axios.post('/auth/login', { email, password });
  token.set(data.token);
  return data;
};

export const logoutUserAsync = async (value) => {
  token.set(value);
  await axios.post('/auth/logout');
  token.unset();
  return true;
};

export const forgotPasswordAsync = async (values) => {
  const { email } = values;
  await axios.post('/auth/verify', { email });
}; 

export const getUserAsync = async (value) => {
  try {
    const { data } = await axios.get(`/auth/${value}`);
    return data;
  } catch (error) {
    Notify.failure(`${error.message}`);
  }
};

export const changePasswordAsync = async (values) => {
  const { data } = await axios.put(`/auth/update/${values.id}`, {
    password: values.password
  });
  token.set(data.token);
  return data;
};

export const updateUserAsync = async (values) => {
  const { name, email } = values;
  token.set(values.token);
  const { data } = await axios.patch('/auth/update', {
    name, email
  });
  return data.name;
};

export const deleteUserAsync = async (value) => {
  token.set(value);
  await axios.delete('auth/');
}