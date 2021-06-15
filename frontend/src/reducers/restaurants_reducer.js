import { RECEIVE_RESTAURANTS } from "../actions/restaurant_actions";

const RestaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      let newState = Object.assign({}, state);
      action.restaurants.map(
        (restaurant) => (newState[restaurante._id] = restaurant)
      );
      return newState;
    default:
      return state;
  }
};

export default RestaurantsReducer;
