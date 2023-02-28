import axios from "axios";

export const login_api = (email: string, password: string): Promise<any> => {
  return axios.post("https://lime-silly-goshawk.cyclic.app/admin/login", {
    email,
    password,
  });
};
