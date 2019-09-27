import {
  REGISTER,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../ActionTypes/authentication';

const initialState = {
  loginData: {},
  registrationData: {},
  loading: false,
  errors: '',
  errorResponseData: {},
  status: ''
};
const authentication = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registrationData: action.payload.data,
        loading: false, 
        status: action.payload.status
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        errors: action.error,
        loading: false,
        errorResponseData: action.error.response.data
      };
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.payload.data,
        loading: false, 
        status: action.payload.status
      };
    case LOGIN_FAILURE:
      return { ...state, errors: action.error, loading: false };
    default:
      return state;
  }
};

export default authentication;
