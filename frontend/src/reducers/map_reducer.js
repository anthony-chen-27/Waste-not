import { combineReducers } from "redux";

import center from "./map/map_center";
import selectedRestaurantId from "./map/selected_restaurant";

export default combineReducers({
  center,
  selectedRestaurantId,
});
