import {
  getRestaurants,
} from "../util/restaurant_api_util";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";

export const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants,
});

export const fetchRestaurants = () => (dispatch) =>
  getRestaurants()
    .then((restaurants) => dispatch(receiveRestaurants(restaurants)))
    .catch((err) => console.log(err));
