import { combineReducers } from "redux";

import modal from "./modal_reducer";
import map from "./map_reducer";

export default combineReducers({
  modal,
  map,
});
