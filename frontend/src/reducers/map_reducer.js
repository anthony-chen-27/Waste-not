import { combineReducers } from "redux";

import origin from "./map/map_origin";
import selectedRestaurantId from "./map/selected_restaurant";

export default combineReducers({
  origin,
  selectedRestaurantId,
});
