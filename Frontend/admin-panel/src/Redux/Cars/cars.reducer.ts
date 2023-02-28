import {
  CAR_ADD_DONE,
  CAR_ADD_ERROR,
  CAR_ADD_SUCCESS,
  CAR_COUNT_SUCCESS,
  CAR_GET_ERROR,
  CAR_GET_LOADING,
  CAR_GET_PAGE,
  CAR_GET_SUCCESS,
  CAR_UPDATE_DONE,
  CAR_UPDATE_ERROR,
  CAR_UPDATE_SUCCESS,
} from "./cars.actionTypes";

export interface carDataType {
  Ac: string;
  Availibilty: string;
  DropDate: string;
  DropLocation: string;
  Engine: string;
  PickupDate: string;
  PickupLocation: string;
  RegNo: string;
  Transmission: string;
  UserId: string;
  Wheel: string;
  bodycolor: string;
  brand: string;
  carId: number;
  color: string;
  date: string;
  door: string;
  feature: string;
  fuelcapacity: string;
  image: string;
  largebag: string;
  location: string;
  miles: string;
  model: string;
  seats: string;
  smallbag: string;
  type: string;
  value: number;
  _id?: string;
}

export interface carState {
  loading: boolean;
  err: boolean;
  carData: carDataType[];
  page: number;
  count: number;
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
  count: 1,
  update_success: false,
  update_error: false,
  add_success: false,
  add_error: false,
};

type actionType =
  | { type: "cars/get/success"; payload: carDataType[] }
  | { type: "cars/count/success"; payload: number }
  | { type: "cars/get/loading"; payload: undefined }
  | { type: "cars/get/error"; payload: undefined }
  | { type: "cars/page/set"; payload: number }
  | { type: "cars/update/success"; payload: undefined }
  | { type: "cars/update/error"; payload: undefined }
  | { type: "cars/update/done"; payload: undefined }
  | { type: "cars/add/success"; payload: undefined }
  | { type: "cars/add/error"; payload: undefined }
  | { type: "cars/add/done"; payload: undefined };

export default function carReducer(
  state: carState = initialState,
  action: actionType
): carState {
  switch (action.type) {
    case CAR_GET_LOADING:
      return { ...state, loading: true };
    case CAR_GET_SUCCESS:
      return { ...state, loading: false, carData: action.payload || [] };
    case CAR_GET_ERROR:
      return { ...state, loading: false, err: true };
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
    case CAR_COUNT_SUCCESS:
      return { ...state, count: action.payload };
    default:
      return state;
  }
}
