import axios from "axios";
import { BASE_URL } from "constants/baseUrl";
import { token } from "./token";

axios.defaults.baseURL = BASE_URL;

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

export const logoutUserAsync = async () => {
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
    console.log('error--->', error);
  }
};

export const changePasswordAsync = async (values) => {
  const { data } = await axios.put(`/auth/update/${values.id}`, {
    password: values.password
  });
  token.set(data.token);
  return data;
};