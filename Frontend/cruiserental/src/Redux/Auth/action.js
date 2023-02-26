import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionTypes";

//FOR REGISTER
export const userRegisterRequest = () => {
  return { type: REGISTER_REQUEST };
};
export const userRegisterSuccess = (payload) => {
  return { type: REGISTER_SUCCESS, payload };
};
export const userRegisterFailure = () => {
  return { type: REGISTER_FAILURE };
};

//FOR LOGIN
export const userLoginRequest = () => {
    return { type: LOGIN_REQUEST };
  };
  export const userLoginSuccess = (payload) => {
    return { type: LOGIN_SUCCESS, payload };
  };
  export const userLoginFailure = () => {
    return { type: LOGIN_FAILURE };
  };


  //HANDLING USER REGISTRATION
export const handleUserRegister = (userData) => async (dispatch) => {
    console.log(userData);
    dispatch(userRegisterRequest());
    try {
      axios
        .post("https://lime-silly-goshawk.cyclic.app/users/register", userData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      dispatch(userRegisterSuccess());
    } catch (error) {
      console.log(error);
      dispatch(userRegisterFailure());
    }
  };



  //HANDLING USER LOGIN
  export const handleUserLogin = (userData) => async (dispatch) => {
    console.log(userData);
    dispatch(userLoginRequest());
    try {
      axios
        .post("https://lime-silly-goshawk.cyclic.app/users/login", userData)
        .then((res) => {
        if(res.data.token){      
          localStorage.setItem("token",res.data.token)
          alert("Login Successfull")
          console.log("res: ", res);
           window.location.href = '/'
        return dispatch(userLoginSuccess(res.data.token))
        }else{
          alert("Please fill all the credentials")
        }
        console.log("string",res)})
        .catch((err) => {
          alert("wrong credential")
          console.log(err)});
      dispatch(userLoginSuccess());
    } catch (error) {
      console.log(error);
      
      dispatch(userLoginFailure());
      
    }
  };