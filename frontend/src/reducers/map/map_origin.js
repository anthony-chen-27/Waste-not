import { RECEIVE_MAP_ORIGIN } from "../../actions/map_actions";

export default (state = {}, { type, mapOrigin }) => {
  switch (type) {
    case RECEIVE_MAP_ORIGIN:
      return mapOrigin;
    default:
      return state;
  }
};
