import {
  GET_TRANSCATIONS,
  GET_TRANSCATIONS_SUCCESS,
  GET_TRANSCATIONS_FAILURE
} from "./../ActionTypes/Transactions";

export const getTransactions = () => {
  return {
    type: GET_TRANSCATIONS
  };
};

export const getTransactionsSuccess = payload => ({
  type: GET_TRANSCATIONS_SUCCESS,
  payload
});

export const getTransactionsfailure = error => ({
  type: GET_TRANSCATIONS_FAILURE,
  error
});
