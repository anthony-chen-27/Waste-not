import * as util from "../util/restaurant_api_util";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

export const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants,
});

export const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant,
});

export const fetchRestaurant = restaurantId => dispatch => 
  util.getRestaurant(restaurantId)
    .then(({ data }) => dispatch(receiveRestaurant(data)))
    .catch((err) => console.log(err))


export const fetchRestaurants = () => (dispatch) =>
  util.getRestaurants()
    .then(({ data }) => dispatch(receiveRestaurants(data)))
    .catch((err) => console.log(err));

    
export const createRestaurant = (data) => (dispatch) =>
  util.createRestaurant(data)
    .then(({ data }) => dispatch(receiveRestaurants([data])))
    .catch((err) => console.log(err));

export const createFoodItem = (data) => (dispatch) =>
  util.createFoodItem(data)
    .then(({ data }) => dispatch(receiveRestaurants([data])))
    .catch((err) => console.log(err));