import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
  } from "./actionTypes";
  
  const initialState = {
    token:"",
    isLoading: false,
    isError: false,
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case REGISTER_REQUEST:
        return { ...state, isLoading: true };
      case REGISTER_SUCCESS:
        return { ...state, isLoading: false };
      case REGISTER_FAILURE:
        return { ...state, isLoading: false, isError: true };
      case LOGIN_REQUEST:
        return { ...state, isLoading: true };
      case LOGIN_SUCCESS:
        return { ...state, isLoading: false, token: payload };
      case LOGIN_FAILURE:
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };
  export { reducer };