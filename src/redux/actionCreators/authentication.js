import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from '../ActionTypes/authentication';

export const registration = payload => ({
  type: REGISTER,
  payload
});

export const registrationSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload
});

export const registrationFailure = error => ({
  type: REGISTER_FAILURE,
  error
});

export const login = payload => ({
  type: LOGIN,
  payload
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error
});
