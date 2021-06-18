import { combineReducers } from "redux";

import restaurants from "./restaurants_reducer";
import profile from "./profile_reducer.js";

export default combineReducers({
  restaurants,
  profile
});
