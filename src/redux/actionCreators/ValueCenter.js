import {
  GET_VALUE_CENTERS,
  GET_VALUE_CENTERS_SUCCESS,
  GET_VALUE_CENTERS_FAILURE
} from "./../ActionTypes/ValueCenter";

export const getValueCenter = () => {
  return {
    type: GET_VALUE_CENTERS
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
