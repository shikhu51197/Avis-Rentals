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
    `https://lime-silly-goshawk.cyclic.app/cars?${name}${place}&limit=10&${page}`
  );
};

export const deleteCarAPI = (id: string) => {
  return axios.delete(
    `https://lime-silly-goshawk.cyclic.app/cars/delete/${id}`
  );
};

export const updateCarAPI = (id: string, data: any) => {
  return axios.patch(
    `https://lime-silly-goshawk.cyclic.app/cars/update/${id}`,
    data
  );
};

export const addCarsAPI = (data: any) => {
  return axios.post(`https://lime-silly-goshawk.cyclic.app/cars/addcar`, data);
};
