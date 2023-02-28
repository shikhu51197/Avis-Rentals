import {
  LOGIN_LOADING,
  LOGIN_ERR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.actionTypes";
import { login_api } from "./auth.api";

export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

// interface loginDispatch{
//   type:"login/success" | "login/error" | "login/loading" | "logout",
// }

export const auth_login =
  (email: string, password: string) => async (dispatch: any) => {
    dispatch({ type: LOGIN_LOADING });
    try {
      let ans = await login_api(email, password);
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
