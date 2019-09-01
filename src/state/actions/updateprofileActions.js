import {
    UPDATE_PROFILE_REQUESTED,
    UPDATE_PROFILE_SUCCESSFUL,
    UPDATE_PROFILE_FAILURE
} from '../../constants/actions'

export const updateProfileRequest = data => {
    console.log('SIgnup data==>>', data)
    return {
        type: UPDATE_PROFILE_REQUESTED,
        payload: data
    };
};

export const updateProfileSuccessful = data => {
    return {
        type: UPDATE_PROFILE_SUCCESSFUL,
        payload: data
    };
};

export const updateProfileFailure = data => {
    return {
        type: UPDATE_PROFILE_FAILURE,
        payload: data
    };
};