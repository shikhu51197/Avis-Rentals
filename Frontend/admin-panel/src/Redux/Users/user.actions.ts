import { getUsersAPI } from "./user.api";
import { userTypes } from "./user.reducer";
import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
} from "./users.actionTypes";

export const getUser = () => async (dispatch: any) => {
  dispatch({ type: GET_USER_LOADING });
  try {
    const data = await getUsersAPI();
    if (data.data) {
      let userData: userTypes[] = data.data;
      dispatch({ type: GET_USER_SUCCESS, payload: userData });
    } else {
      dispatch({ type: GET_USER_ERROR });
    }
  } catch (err) {
    dispatch({ type: GET_USER_ERROR });
  }
};
