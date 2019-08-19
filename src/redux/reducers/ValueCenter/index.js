import {
    GET_VALUE_CENTERS,
    GET_VALUE_CENTERS_SUCCESS,
    GET_VALUE_CENTERS_FAILURE
  } from "../../ActionTypes/ValueCenter";
  
  export const initialState = {
    valueCenters: [],
    loading: false
  };
  
  const getValueCentersReducer = (state = initialState, action = {}) => {
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
  export default getValueCentersReducer;
  