import { RECEIVE_SELECTED_RESTAURANT } from "../../actions/map_actions";

export default (state = null, { type, restaurantId }) => {
  switch (type) {
    case RECEIVE_SELECTED_RESTAURANT:
      return restaurantId;
    default:
      return state;
  }
};
