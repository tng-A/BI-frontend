import {
  GET_NAVBAR_DATA,
  GET_NAVBAR_DATA_SUCCESS,
  GET_NAVBAR_DATA_FAILURE
} from '../ActionTypes/navbar';

export const getNavBarData = payload => ({
  type: GET_NAVBAR_DATA,
  payload
});

export const getNavBarDataSuccess = payload => ({
  type: GET_NAVBAR_DATA_SUCCESS,
  payload
});

export const getNavBarDataFailure = error => ({
  type: GET_NAVBAR_DATA_FAILURE,
  error
});
