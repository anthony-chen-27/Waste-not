import { getRestaurants } from "../util/restaurant_api_util";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";

export const receiveRestaurants = (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants,
});

export const fetchRestaurants = () => (dispatch) =>
  getRestaurants()
    .then(({ data }) => dispatch(receiveRestaurants(data)))
    .catch((err) => console.log(err));
