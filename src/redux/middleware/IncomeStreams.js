import { put, takeLatest, call, takeEvery } from "redux-saga/effects";
import {eventChannel, END} from 'redux-saga';
import { toast } from "react-toastify";
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
  getFilteredIncomeStreamFailure,
  getPeriods,
  getPeriodsSuccess,
  getPeriodFailure,
  getMetrics,
  getMetricsSuccess,
  getMetricsFailure
} from "../actionCreators/IncomeStreams";

export function* getMetricAsync() {
  try {
    const response = yield call(IncomeStreamService.getMetricsStream);
    yield put(getMetricsSuccess({ ...response }));
  } catch (error) {
    yield put(getMetricsFailure(error));
  }
}

export function* watchGetMetricPass() {
  yield takeEvery(getMetrics().type, getMetricAsync);
}

export function* getPeriodsAsync() {
  try {
    const response = yield call(IncomeStreamService.getPeriodsStream);
    yield put(getPeriodsSuccess({ ...response }));
  } catch (error) {
    yield put(getPeriodFailure(error));
  }
}

export function* watchGetPeriodPass() {
  yield takeEvery(getPeriods().type, getPeriodsAsync);
}

export function* watchIncomeStreamSagaAsync() {
  yield takeLatest(CreateIncomeStream().type, IncomeStreamSagaAsync);
}

export function* IncomeStreamSagaAsync({ payload }) {
  let response;
  try {
    response = yield call(IncomeStreamService.postIncomeStream, payload);
    yield put(CreateIncomeStreamSuccess(response.data));
  } catch (error) {
    yield put(CreateIncomeFailure(error));
  }
}

export function countdown(secs) {
  return eventChannel(emitter => {
      const iv = setInterval(() => {
        secs -= 1
        if (secs > 0) {
          emitter(secs)
        } else {
          // this causes the channel to close
          emitter(END)
        }
      }, 1000);
      // The subscriber must return an unsubscribe function
      return () => {
        clearInterval(iv)
      }
    }
  )
}

export function* IncomeStreamTargetSagaAsync({ payload }) {
  try {
    const response = yield call(
      IncomeStreamService.IncomeStreamTarget,
      payload
    );
    yield put(CreateIncomeStreamTargetSuccess({ ...response }));
    toast.success("Target was created!", {
      position: toast.POSITION.TOP_RIGHT
    });
  } catch (error) {
    yield put(CreateIncomeStreamTargetFailure(error));
    toast.error("Error When creating target !", {
      position: toast.POSITION.TOP_RIGHT
    });
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
    const { year, periodType } = action;
  
    const response = yield call(
      IncomeStreamService.getFilteredIncomeStream,
      periodType,
      year
    );
    yield put(getFilteredIncomeStreamSuccess(response.data));
  } catch (error) {
    yield put(getFilteredIncomeStreamFailure(error));
  }
}

export function* watchFilteredIncomestreampass() {
  yield takeLatest(
    getFilteredIncomeStream().type,
    getFilteredIncomeStreamAsync
  );
}
