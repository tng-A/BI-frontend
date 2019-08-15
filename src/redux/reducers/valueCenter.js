import {
  GET_VALUE_CENTERS,
  GET_VALUE_CENTERS_SUCCESS,
  GET_VALUE_CENTERS_FAILURE,
  GET_FILTERED_VALUE_CENTER, 
  GET_FILTERED_VALUE_CENTER_SUCCESS, 
  GET_FILTERED_VALUE_CENTER_FAILURE
} from "../ActionTypes/ValueCenter";

export const initialState = {
  valueCenters: [],
  filteredValueCenters: [], 
  loading: false
};

export const getValueCentersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_VALUE_CENTERS:
      return { ...state, errors: "", loading: true };
    case GET_VALUE_CENTERS_SUCCESS:
        console.log("actin",action)
      return { ...state, valueCenters: action.payload.data, loading: false };
    case GET_VALUE_CENTERS_FAILURE:
      return { ...state, valueCenters: [], loading: false };
    default:
      return state;
  }
};

export const getFilteredValueCenterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_FILTERED_VALUE_CENTER:
      return { ...state, errors: "", loading: true };
        console.log("actin",action)
      case GET_FILTERED_VALUE_CENTER_SUCCESS:
      return { ...state, filteredValueCenters: action.payload.data, loading: false };
    case GET_FILTERED_VALUE_CENTER_FAILURE:
      return { ...state, filteredValueCenters: [], loading: false };
    default:
      return state;
  }
};
