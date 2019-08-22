import { put, call, takeEvery } from "redux-saga/effects";
import {
  getProducts, 
  getProductSuccess, 
  getProductsfailure
} from "../actionCreators/Products";
import productService from '../../services/Products'

export function* getProductAsync() {
  try {
    const response = yield call(productService.getProduct);
    yield put(getProductSuccess({ ...response }));
  } catch (error) {
    yield put(getProductsfailure(error));
  }
}

export function* watchGetProductPass() {
  yield takeEvery(getProducts().type, getProductAsync);
}
