import {
  GET_VALUE_CENTERS,
  GET_VALUE_CENTERS_SUCCESS,
  GET_VALUE_CENTERS_FAILURE,
  CREATE_VALUE_CENTER_TARGETS,
  CREATE_VALUE_CENTER_TARGETS_SUCCESS,
  CREATE_VALUE_CENTER_TARGETS_FAILURE
} from "./../ActionTypes/ValueCenter";

export const getValueCenter = payload => {
  return {
    type: GET_VALUE_CENTERS,
    payload
  };
};

export const getValueCenterSuccess = payload => ({
  type: GET_VALUE_CENTERS_SUCCESS,
  payload
});

export const getValueCenterfailure = error => ({
  type: GET_VALUE_CENTERS_FAILURE,
  error
});

export const createValueCenterTargets = payload => ({
  type: CREATE_VALUE_CENTER_TARGETS,
  payload
});

export const createValueCenterTargetsSuccess = payload => ({
  type: CREATE_VALUE_CENTER_TARGETS_SUCCESS,
  payload
});

export const createValueCenterTargetsFailure = error => ({
  type: CREATE_VALUE_CENTER_TARGETS_FAILURE,
  error
});
