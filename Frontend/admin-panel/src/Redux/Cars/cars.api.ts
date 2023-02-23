import axios from "axios";

export const getCarsAPI = (
  model?: string,
  value?: number,
  location?: string
) => {
  let name = "";
  let cost = "";
  let place = "";
  if (model) {
    name = `model=${model}&`;
  }
  if (cost) {
    cost = `value=${value}&`;
  }
  if (location) {
    place = `location=${location}`;
  }

  return axios.get(`http://localhost:8080/cars?${name}${cost}${place}`);
};

export const deleteCarAPI = (id: string) => {
  return axios.delete(`http://localhost:8080/cars/delete/${id}`);
};

export const updateCarAPI = (id: string, data: any) => {
  return axios.patch(`http://localhost:8080/cars/delete/${id}`, data);
};
