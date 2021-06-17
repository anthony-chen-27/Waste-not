import { RECEIVE_MAP_CENTER } from "../../actions/map_actions";

export default (state = null, { type, mapCenter }) => {
  switch (type) {
    case RECEIVE_MAP_CENTER:
      return mapCenter;
    default:
      return state;
  }
};
