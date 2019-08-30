import { put, call, takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  getValueCenterSuccess,
  getValueCenterfailure,
  getValueCenter,
  createValueCenterTargets,
  createValueCenterTargetsSuccess,
  createValueCenterTargetsFailure
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

export function* createValueCenterTargetsAsync({ payload }) {
  try {
    const response = yield call(
      valueCenterService.createValueCenterTargets,
      payload
    );
    yield put(createValueCenterTargetsSuccess({ ...response }));
    toast.success("Target was created!", {
      position: toast.POSITION.TOP_RIGHT
    });
  } catch (error) {
    yield put(createValueCenterTargetsFailure(error));
    toast.error("Error When creating target !", {
      position: toast.POSITION.TOP_RIGHT
    });
  }
}

export function* createValueCenterTargetsWatcher() {
  yield takeEvery(
    createValueCenterTargets().type,
    createValueCenterTargetsAsync
  );
}
