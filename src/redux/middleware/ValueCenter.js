import { put, call, takeEvery } from "redux-saga/effects";
import {
  getValueCenterSuccess,
  getValueCenterfailure,
  getValueCenter
} from "../actionCreators/ValueCenter";
import valueCenterService from "../../services/ValueCenter";

export function* getValueCentersAsync({ payload }) {
  try {
    const response = yield call(valueCenterService.getValueCentres, payload);
    yield put(getValueCenterSuccess({ ...response }));
  } catch (error) {
    yield put(getValueCenterfailure(error));
  }
}

export function* watchGetValueCenterPass() {
  yield takeEvery(getValueCenter().type, getValueCentersAsync);
}
