import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
} from "./users.actionTypes";

export interface userTypes {
  Address: string;
  NumberOfOrders: number;
  confirmPass: string;
  country: string;
  email: string;
  image: string;
  name: string;
  password: string;
  _id?: string;
}

export interface UserState {
  loading: boolean;
  error: boolean;
  userData: userTypes[];
}

const initialState = {
  loading: false,
  error: false,
  userData: [],
};

type actionType =
  | { type: "user/get/loading"; payload: undefined }
  | { type: "user/get/success"; payload: userTypes[] }
  | { type: "user/get/error"; payload: undefined };

export default function userReducer(
  state: UserState = initialState,
  action: actionType
): UserState {
  switch (action.type) {
    case GET_USER_LOADING:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, userData: action.payload || [] };
    case GET_USER_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return initialState;
  }
}
