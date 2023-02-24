import axios from "axios";

export const getCarsAPI = (
  model?: string,
  location?: string,
  page?: number
) => {
  let name = "";
  let place = "";
  if (model) {
    name = `model=${model}&`;
  }
  if (location) {
    place = `location=${location}`;
  }
  console.log(place);
  return axios.get(
    `http://localhost:8080/cars?${name}${place}&limit=10&${page}`
  );
};

export const deleteCarAPI = (id: string) => {
  return axios.delete(`http://localhost:8080/cars/delete/${id}`);
};

export const updateCarAPI = (id: string, data: any) => {
  return axios.patch(`http://localhost:8080/cars/update/${id}`, data);
};
