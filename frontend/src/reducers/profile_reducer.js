import { RECEIVE_PROFILE } from "../actions/profile_actions";

const ProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE:
      let newState = Object.assign({}, state, action.profile);
      return newState;
    default:
      return state;
  }
};

export default ProfileReducer;