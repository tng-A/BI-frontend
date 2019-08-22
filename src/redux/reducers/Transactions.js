import {
  GET_TRANSCATIONS,
  GET_TRANSCATIONS_SUCCESS,
  GET_TRANSCATIONS_FAILURE
} from "../ActionTypes/Transactions";

export const initialState = {
  Transactions: [],
  loading: false
};

const getTransactionsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_TRANSCATIONS:
      return { ...state, errors: "", loading: true };
    case GET_TRANSCATIONS_SUCCESS:
      return { ...state, Transactions: action.payload.data, loading: false };
    case GET_TRANSCATIONS_FAILURE:
      return { ...state, Transactions: [], loading: false };

    default:
      return state;
  }
};
export default getTransactionsReducer;
