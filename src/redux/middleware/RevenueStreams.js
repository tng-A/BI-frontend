import { put, call, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  getRevenueStreams,
  getRevenueStreamsSuccess,
  getRevenueStreamsFailure,
  createRevenueStreamsTarget,
  createRevenueStreamsTargetSuccess,
  createRevenueStreamsTargetFailure
} from "../actionCreators/RevenueStreams";

import RevenueStreamsService from "../../services/RevenueStreams";

export function* getRevenueStreamsAsync({ payload }) {
  try {
    const response = yield call(
      RevenueStreamsService.getRevenueStreams,
      payload
    );
    yield put(getRevenueStreamsSuccess({ ...response }));
  } catch (error) {
    yield put(getRevenueStreamsFailure(error));
  }
}

export function* getRevenueStreamsWatcher() {
  yield takeLatest(getRevenueStreams().type, getRevenueStreamsAsync);
}

export function* createRevenueStreamsTargetAsync({ payload }) {
  try {
    const response = yield call(
      RevenueStreamsService.postRevanueStreamsTarget,
      payload
    );
    yield put(createRevenueStreamsTargetSuccess({ ...response }));
    toast.success("Target was created!", {
      position: toast.POSITION.TOP_RIGHT
    });
  } catch (error) {
    yield put(createRevenueStreamsTargetFailure(error));
  }
}

export function* createRevenueStreamsTargetWatcher() {
  yield takeLatest(
    createRevenueStreamsTarget().type,
    createRevenueStreamsTargetAsync
  );
}
