import axios from "axios";

export const getUsersAPI = () => {
  return axios.get("https://lime-silly-goshawk.cyclic.app/users");
};
