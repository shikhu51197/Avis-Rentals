import {
  LOGIN_LOADING,
  LOGIN_ERR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.actionTypes";

export interface stateType {
  loading: boolean;
  error: boolean;
  isAuth: boolean;
  authData: any;
}

const initialState: stateType = {
  loading: false,
  error: false,
  isAuth: false,
  authData: null,
};

export default function authReducer(
  state: stateType = initialState,
  action: any
) {
  switch (action.type) {
    case LOGIN_LOADING:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuth: true, error: false };
    case LOGIN_ERR:
      return { ...state, loading: false, isAuth: false, error: true };
    case LOGOUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
}
