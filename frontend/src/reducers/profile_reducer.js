import { RECEIVE_PROFILE } from "../actions/profile_actions";
import { RECEIVE_RESTAURANT, RECEIVE_FOOD_ITEM } from "../actions/restaurant_actions";

const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_PROFILE:
      action.profile.forEach(restaurant => {
        newState[restaurant._id] = restaurant
      })
      return newState;
    case RECEIVE_RESTAURANT:
      return state;
    case RECEIVE_FOOD_ITEM:
      newState[action.foodItem.restaurant].foodItems.push(action.foodItem)
      return newState;
    default:
      return state;
  }
};

export default ProfileReducer;