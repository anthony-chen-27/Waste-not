import { RECEIVE_PROFILE } from "../actions/profile_actions";
import { RECEIVE_RESTAURANT, RECEIVE_FOOD_ITEM } from "../actions/restaurant_actions";

const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_PROFILE:
      console.log('ap',action.profile);
      action.profile.forEach(restaurant => {
        newState[restaurant._id] = restaurant
      })
      console.log('new state:', newState)
      return newState;
    case RECEIVE_RESTAURANT:
      console.log('action:', action)
      return state;
    case RECEIVE_FOOD_ITEM:
      console.log('action:', action)
      console.log('state:', state)
      newState[action.foodItem.restaurant].foodItems.push(action.foodItem)
      return newState;
    default:
      return state;
  }
};

export default ProfileReducer;