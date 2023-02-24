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
    const data = await axios.get('/auth/current', {
      body: {
        email: "BoikoJuliya2707@gmail.com"
      }
    });
    console.log(data);
  } catch (error) {
    console.log('error--->', error);
  }
  // return data;
};