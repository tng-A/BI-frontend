import { put, call, takeEvery } from "redux-saga/effects";
import {
  getTransactions,
  getTransactionsSuccess,
  getTransactionsfailure
} from "../actionCreators/Transcations";
import TransactionService from "../../services/Transactions";

export function* getTransactionsAsync() {
  try {
    const response = yield call(TransactionService.getTransactions);
    yield put(getTransactionsSuccess({ ...response }));
  } catch (error) {
    yield put(getTransactionsfailure(error));
  }
}

export function* watchGetTransactionsPass() {
  yield takeEvery(getTransactions().type, getTransactionsAsync);
}
