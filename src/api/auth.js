import axios from "axios";
import { BASE_URL } from "constants/baseUrl";

axios.defaults.baseURL = BASE_URL;

export const signupUserAsync = async () => {
  const { data } = await axios.post(`/auth/signup`, {
    name: "BoikoJuliya",
    email: "BoikoJuliya2707@gmail.com",
    password: "BoikoJuliya"
  });
  console.log(data);
  return data;
};