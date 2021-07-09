import * as util from "../util/profile_api_util";

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const receiveProfile = (profile) => ({
    type: RECEIVE_PROFILE,
    profile
})

export const fetchProfile = (userId) => (dispatch) => 
    util.getProfile(userId)
        .then(({ data }) => dispatch(receiveProfile(data)))