import { combineReducers } from "redux";

import modal from "./modal_reducer";
import map from "./map_reducer";
import food from "./food_reducer";

export default combineReducers({
  modal,
  map,
  food,
});
