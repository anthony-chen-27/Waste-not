import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from "../actions/restaurant_actions";

const RestaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      action.restaurants.map(
        (restaurant) => (newState[restaurant._id] = restaurant)
      );
      return newState;
    case RECEIVE_RESTAURANT:
      newState[action.restaurant._id] = action.restaurant
      return newState;
    default:
      return state;
  }
};

export default RestaurantsReducer;
