import {
  LOGIN_LOADING,
  LOGIN_ERR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.actionTypes";
import { login_api } from "./auth.api";

export interface actions {
  type: string;
}

export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const auth_login =
  (email: string, password: string) => async (dispatch: any) => {
    dispatch({ type: LOGIN_LOADING });
    try {
      let ans = await login_api(email, password);
      console.log(ans);
      if (ans.data && ans.data.token) {
        dispatch({ type: LOGIN_SUCCESS });
      } else {
        dispatch({ type: LOGIN_ERR });
      }
    } catch (err) {
      dispatch({ type: LOGIN_ERR });
    }
  };

export const auth_logout = () => (dispatch: any) => {
  dispatch({ type: LOGOUT });
};
