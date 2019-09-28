import {
  GET_NAVBAR_DATA,
  GET_NAVBAR_DATA_FAILURE,
  GET_NAVBAR_DATA_SUCCESS
} from '../ActionTypes/navbar';

const initialState = {
  navbarData: [],
  loading: false,
  error: ''
};

const navBar = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAVBAR_DATA:
      return { ...state, loading: true };
    case GET_NAVBAR_DATA_SUCCESS:
      return { ...state, loading: false, navbarData: action.payload.data };
    case GET_NAVBAR_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default navBar;
