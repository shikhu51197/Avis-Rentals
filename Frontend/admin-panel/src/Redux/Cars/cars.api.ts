import axios from "axios";

export const getCarsAPI = (
  model?: string,
  location?: string,
  page?: number,
  limit?: number,
  sort?: boolean
) => {
  console.log(limit, sort);
  let name = "";
  let place = "";
  let sortBy = "";
  if (model) {
    name = `model=${model}&`;
  }
  if (location) {
    place = `&location=${location}`;
  }

  if (sort) {
    sortBy = "desc";
  } else {
    sortBy = "asc";
  }
  console.log(place);
  return axios.get(
    `https://lime-silly-goshawk.cyclic.app/cars?limit=${limit}&page=${page}${place}&sort_by=${sortBy}`
  );
};

export const getCountAPI = (location?: string) => {
  let place = "";
  if (location) {
    place = `&location=${location}`;
  }
  return axios.get(
    `https://lime-silly-goshawk.cyclic.app/cars?limit=100&page=1${place}`
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
