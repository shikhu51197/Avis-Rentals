import {
  CAR_GET_ERROR,
  CAR_GET_LOADING,
  CAR_GET_SUCCESS,
} from "./cars.actionTypes";

export interface carState {
  loading: boolean;
  err: boolean;
  carData: any;
}

const initialState: carState = {
  loading: false,
  err: false,
  carData: [],
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
    default:
      return state;
  }
}
