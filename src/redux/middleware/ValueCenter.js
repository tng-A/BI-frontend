import { put, call, takeEvery } from "redux-saga/effects";
import {
  getValueCenterSuccess,
  getValueCenterfailure,
  getValueCenter,
  getFilteredValueCenter, 
  getFilteredValueCenterSuccess,
  getFilteredValueCenterFailure

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

export function* getFilteredValueCentersAsync(action) {
  try {
    const {year, type} = action
    const response = yield call(valueCenterService.getFilteredByYear, year, type);
    console.log("response", response);
    yield put(getFilteredValueCenterSuccess({ ...response }));
  } catch (error) {
    yield put(getFilteredValueCenterFailure(error));
  }
}

export function* watchFilteredValueCenterpass() {
  yield takeEvery(getFilteredValueCenter().type, getFilteredValueCentersAsync);
}
