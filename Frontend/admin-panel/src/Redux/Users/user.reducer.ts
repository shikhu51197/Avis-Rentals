import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
} from "./users.actionTypes";

export interface stateType {
  loading: boolean;
  error: boolean;
  userData: any;
}

const initialState = {
  loading: false,
  error: false,
  userData: [],
};
export default function userReducer(state: stateType, action: any) {
  switch (action.type) {
    case GET_USER_LOADING:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, userData: action.payload };
    case GET_USER_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return initialState;
  }
}
