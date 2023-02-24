import axios from "axios";
import { BASE_URL } from "constants/baseUrl";
import { token } from "./token";

axios.defaults.baseURL = BASE_URL;

export const signupUserAsync = async () => {
  const { data } = await axios.post('/auth/signup', {
    name: "BoikoJuliya",
    email: "BoikoJuliya2707@gmail.com",
    password: "BoikoJuliya"
  });
  console.log('signupUserAsync --->', data);
  token.set(data.token);
  return data;
};

export const loginUserAsync = async () => {
  const { data } = await axios.post('/auth/login', {
    email: "BoikoJuliya2707@gmail.com",
    password: "BoikoJuliya"
  });
  console.log('loginUserAsync --->', data);
  token.set(data.token);
  return data;
};

export const logoutUserAsync = async () => {
  await axios.post('/auth/logout');
  token.unset();
  return true;
};

export const forgotPasswordAsync = async () => {
  await axios.post('/auth/verify', {
    email: "BoikoJuliya2707@gmail.com",
  });
}; 

export const getUserAsync = async () => {
  try {
    const { data } = await axios.get('/auth/BoikoJuliya2707@gmail.com');
    return data;
  } catch (error) {
    console.log('error--->', error);
  }
};

export const changePasswordAsync = async () => {
  const { data } = await axios.put('/auth/update/63f8a5c2d2205137b459e8c2', {
    password: "BoikoJuliya"
  });
 // console.log('changePasswordAsync --->', data);
  token.set(data.token);
  return data;
};