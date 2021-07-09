import axios from "axios";


export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const getRestaurant = restaurantId => {
  return axios.get(`/api/restaurants/${restaurantId}`)
};

export const getRestaurants = () => {
  return axios.get("/api/restaurants");
};

export const createRestaurant = (data) => {
  return axios.post("/api/restaurants", data);
};

export const createFoodItem = (data) => {
  return axios.post(`/api/restaurants/${data.restaurant}`, data)
}