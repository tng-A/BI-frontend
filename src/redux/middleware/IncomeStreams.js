import { put, takeLatest, call } from "redux-saga/effects";
import IncomeStreamService from "../../services/incomeStreams";
import {
  CreateIncomeStream,
  CreateIncomeStreamSuccess,
  CreateIncomeFailure,
  CreateIncomeStreamTarget,
  CreateIncomeStreamTargetSuccess,
  CreateIncomeStreamTargetFailure,
  getFilteredIncomeStream, 
  getFilteredIncomeStreamSuccess, 
  getFilteredIncomeStreamFailure
} from "../actionCreators/IncomeStreams";

export function* watchIncomeStreamSagaAsync() {
  yield takeLatest(CreateIncomeStream().type, IncomeStreamSagaAsync);
}

export function* IncomeStreamSagaAsync({ incomeStreamData }) {
  let response;
  try {
    response = yield call(
      IncomeStreamService.postIncomeStream,
      incomeStreamData
    );
    yield put(CreateIncomeStreamSuccess(response.data));
  } catch (error) {
    yield put(CreateIncomeFailure(error));
  }
}

export function* IncomeStreamTargetSagaAsync(IncomeStreamTarget) {
  try {
    const response = yield call(
      IncomeStreamService.IncomeStreamTarget,
      IncomeStreamTarget
    );
    yield put(CreateIncomeStreamTargetSuccess(response.data));
  } catch (error) {
    yield put(CreateIncomeStreamTargetFailure(error));
  }
}

export function* WatchIncomeStreamSagaTarget() {
  yield takeLatest(
    CreateIncomeStreamTarget().type,
    IncomeStreamTargetSagaAsync
  );
}

export function* getFilteredIncomeStreamAsync(action) {
  try {
    const {year, periodType} = action
    const response = yield call(IncomeStreamService.getFilteredIncomeStream, periodType, year);
    yield put(getFilteredIncomeStreamSuccess(response.data));
  } catch (error) {
    yield put(getFilteredIncomeStreamFailure(error));
  }
}

export function* watchFilteredIncomestreampass() {
  yield takeLatest(getFilteredIncomeStream().type, getFilteredIncomeStreamAsync);
}