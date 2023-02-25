import {
  CAR_ADD_DONE,
  CAR_ADD_ERROR,
  CAR_ADD_SUCCESS,
  CAR_GET_ERROR,
  CAR_GET_LOADING,
  CAR_GET_PAGE,
  CAR_GET_SUCCESS,
  CAR_UPDATE_DONE,
  CAR_UPDATE_ERROR,
  CAR_UPDATE_SUCCESS,
} from "./cars.actionTypes";

export interface carState {
  loading: boolean;
  err: boolean;
  carData: any;
  page: number;
  update_success: boolean;
  update_error: boolean;
  add_success: boolean;
  add_error: boolean;
}

const initialState: carState = {
  loading: false,
  err: false,
  carData: [],
  page: 1,
  update_success: false,
  update_error: false,
  add_success: false,
  add_error: false,
};

export default function carReducer(
  state: carState = initialState,
  action: any
) {
  switch (action.type) {
    case CAR_GET_LOADING:
      return { ...state, loading: true };
    case CAR_GET_SUCCESS:
      return { ...state, loading: false, carData: action.payload };
    case CAR_GET_ERROR:
      return { ...state, loading: false, error: true };
    case CAR_GET_PAGE:
      return { ...state, page: action.payload };
    case CAR_UPDATE_SUCCESS:
      return { ...state, update_success: true };
    case CAR_UPDATE_ERROR:
      return { ...state, update_error: true };
    case CAR_UPDATE_DONE:
      return { ...state, update_error: false, update_success: false };
    case CAR_ADD_SUCCESS:
      return { ...state, add_success: true };
    case CAR_ADD_ERROR:
      return { ...state, add_error: true };
    case CAR_ADD_DONE:
      return { ...state, add_success: false, add_error: false };
    default:
      return state;
  }
}
