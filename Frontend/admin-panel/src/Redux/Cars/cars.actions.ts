import { useToast } from "@chakra-ui/react";
import { updateType } from "../../Pages/Update";
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
import { getCarsAPI, deleteCarAPI, updateCarAPI, addCarsAPI } from "./cars.api";

export const getCars =
  (page: number, model?: string, location?: string) =>
  async (dispatch: any) => {
    dispatch({ type: CAR_GET_LOADING });
    try {
      let data = await getCarsAPI(model, location, page);
      dispatch({ type: CAR_GET_SUCCESS, payload: data.data });
    } catch (err) {
      dispatch({ type: CAR_GET_ERROR });
    }
  };

export const PageChange = (page: number) => (dispatch: any) => {
  dispatch({ type: CAR_GET_PAGE, payload: page });
};

export const addCars = (data: any) => async (dispatch: any) => {
  try {
    let add_car = await addCarsAPI(data);
    dispatch({ type: CAR_ADD_SUCCESS });
    getCars(1, "", "");
  } catch (err) {
    dispatch({ type: CAR_ADD_ERROR });
  }
};

export const addCarDone = () => async (dispatch: any) => {
  dispatch({ type: CAR_ADD_DONE });
};

export const deleteCar = (id: string) => async (dispatch: any) => {
  try {
    let del_Car = await deleteCarAPI(id);

    dispatch(getCars(1, "", ""));
  } catch (err) {
    console.log(err);
  }
};

export const updateCar =
  (id: string, data: updateType) => async (dispatch: any) => {
    console.log("heu");
    try {
      let upd_car = await updateCarAPI(id, data);
      dispatch({ type: CAR_UPDATE_SUCCESS });
      dispatch(getCars(1, "", ""));
    } catch (err) {
      console.log(err);
      dispatch({ type: CAR_UPDATE_ERROR });
    }
  };

export const updateCarDone = () => async (dispatch: any) => {
  dispatch({ type: CAR_UPDATE_DONE });
};
