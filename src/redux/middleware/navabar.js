import { put, call, takeEvery } from 'redux-saga/effects';
import {
  getNavBarData,
  getNavBarDataFailure,
  getNavBarDataSuccess
} from '../actionCreators/navbar';
import navbarService from '../../services/navBarData';

export function* getNavBarDataAsync({payload}) {
 
  try { 
    const response = yield call(navbarService.getNavbarData, payload);
    yield put(getNavBarDataSuccess({...response}));
  } catch (error) {
    yield put(getNavBarDataFailure(error));
  }
}

export function* watchGetNavbarData() {
  yield takeEvery(getNavBarData().type, getNavBarDataAsync);
}
