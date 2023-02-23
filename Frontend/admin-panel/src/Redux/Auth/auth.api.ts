import axios from "axios";

export const login_api = (email: string, password: string) => {
  return axios.post("https://reqres.in/api/login", { email, password });
};
