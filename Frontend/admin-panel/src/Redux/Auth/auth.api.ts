import axios from "axios";

export const login_api = (email: string, password: string) => {
  return axios.post("http://localhost:8080/admin/login", {
    email,
    password,
  });
};
