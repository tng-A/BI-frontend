import {
  GET_VALUE_CENTERS,
  GET_VALUE_CENTERS_SUCCESS,
  GET_VALUE_CENTERS_FAILURE,
  GET_FILTERED_VALUE_CENTER,
  GET_FILTERED_VALUE_CENTER_SUCCESS,
  GET_FILTERED_VALUE_CENTER_FAILURE,
  CREATE_VALUE_CENTER_TARGETS,
  CREATE_VALUE_CENTER_TARGETS_SUCCESS,
  CREATE_VALUE_CENTER_TARGETS_FAILURE
} from "../../ActionTypes/ValueCenter";

export const initialState = {
  valueCenters: [],
  filteredValueCenters: [],
  loading: false,
  valueCentersTraget: {}
};

const getValueCentersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_VALUE_CENTERS:
      return { ...state, errors: "", loading: true };
    case GET_VALUE_CENTERS_SUCCESS:
      return { ...state, valueCenters: action.payload.data, loading: false };
    case GET_VALUE_CENTERS_FAILURE:
      return { ...state, valueCenters: [], loading: false };
    case GET_FILTERED_VALUE_CENTER:
      return { ...state, errors: "", loading: true };
    case GET_FILTERED_VALUE_CENTER_SUCCESS:
      return {
        ...state,
        filteredValueCenters: action.payload.data,
        loading: false
      };
    case GET_FILTERED_VALUE_CENTER_FAILURE:
      return { ...state, filteredValueCenters: [], loading: false };
    case CREATE_VALUE_CENTER_TARGETS:
      return { ...state, loading: true };
    case CREATE_VALUE_CENTER_TARGETS_SUCCESS:
      return {
        ...state,
        loading: false,
        valueCentersTraget: action.payload.data
      };
    case CREATE_VALUE_CENTER_TARGETS_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
};

export default getValueCentersReducer;
