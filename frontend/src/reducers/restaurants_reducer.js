import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT } from "../actions/restaurant_actions";

const RestaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      let newState = Object.assign({}, state);
      action.restaurants.map(
        (restaurant) => (newState[restaurant._id] = restaurant)
      );
      return newState;
    // case RECEIVE_RESTAURANT:
    //   let newState = Object.assign({}, state);
    //   newState[action.restaurant._id] = action.restaurant
    //   return newState;
    default:
      return state;
  }
};

export default RestaurantsReducer;
