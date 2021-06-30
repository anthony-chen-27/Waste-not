import {
  RECEIVE_FOOD_CATEGORY,
  CLEAR_FOOD_CATEGORY,
} from "../actions/food_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case CLEAR_FOOD_CATEGORY:
      newState = Object.assign({}, state);
      delete newState["category"];
      return newState;
    case RECEIVE_FOOD_CATEGORY:
      newState = Object.assign({}, state);
      newState["category"] = action.category;
      return newState;
    default:
      return state;
  }
};
