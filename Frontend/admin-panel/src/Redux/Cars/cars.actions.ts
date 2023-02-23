import {
  CAR_GET_ERROR,
  CAR_GET_LOADING,
  CAR_GET_SUCCESS,
} from "./cars.actionTypes";
import { getCarsAPI, deleteCarAPI, updateCarAPI } from "./cars.api";

export const getCars =
  (model?: string, value?: number, location?: string) =>
  async (dispatch: any) => {
    dispatch({ type: CAR_GET_LOADING });
    try {
      let data = await getCarsAPI(model, value, location);
      dispatch({ type: CAR_GET_SUCCESS, payload: data.data });
    } catch (err) {
      dispatch({ type: CAR_GET_ERROR });
    }
  };

// export const addCars = (data: CarType) => async (dispatch: any) => {
//   try {
//     let add_car = await addCarsAPI(data);
//     dispatch({ type: CAR_ADD_SUCCESS });
//     getCars();
//   } catch (err) {
//     dispatch({ type: CAR_ADD_ERROR });
//   }
// };

export const deleteCar = (id: string) => async (dispatch: any) => {
  try {
    let del_Car = await deleteCarAPI(id);
    getCars();
  } catch (err) {
    console.log(err);
  }
};

export const updateCar = (id: string, data: any) => async (dispatch: any) => {
  try {
    let upd_car = await updateCarAPI(id, data);
    getCars();
  } catch (err) {
    console.log(err);
  }
};
