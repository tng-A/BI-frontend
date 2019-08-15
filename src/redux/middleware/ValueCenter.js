import { put, call, takeEvery } from "redux-saga/effects";
import {
  getValueCenterSuccess,
  getValueCenterfailure,
  getValueCenter
} from "../actionCreators/ValueCenter";
import valueCenterService from "../../services/ValueCenter";

export function* getValueCentersAsync() {
  try {
    const response = yield call(valueCenterService.getIncomeStream);
    console.log("response", response);
    yield put(getValueCenterSuccess({ ...response }));
  } catch (error) {
    yield put(getValueCenterfailure(error));
  }
}

export function* watchGetValueCenterPass() {
  yield takeEvery(getValueCenter().type, getValueCentersAsync);
}
