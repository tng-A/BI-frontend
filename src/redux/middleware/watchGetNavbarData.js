import { takeEvery } from 'redux-saga/effects';
import { getNavBarData } from '../actionCreators/navbar';
import { getNavBarDataAsync } from './navabar';
export function* watchGetNavbarData() {
  yield takeEvery(getNavBarData().type, getNavBarDataAsync);
}
