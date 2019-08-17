import {
  GET_VALUE_CENTERS,
  GET_VALUE_CENTERS_SUCCESS,
  GET_VALUE_CENTERS_FAILURE,
  GET_FILTERED_VALUE_CENTER, 
  GET_FILTERED_VALUE_CENTER_SUCCESS, 
  GET_FILTERED_VALUE_CENTER_FAILURE

  
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


export const getFilteredValueCenter = (year, periodType) => {
  return {
    type: GET_FILTERED_VALUE_CENTER, 
    year, 
    periodType
  };
};

export const getFilteredValueCenterSuccess = payload => ({
  type: GET_FILTERED_VALUE_CENTER_SUCCESS,
  payload
});

export const getFilteredValueCenterFailure = error => ({
  type: GET_FILTERED_VALUE_CENTER_FAILURE,
  error
});
