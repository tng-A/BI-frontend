import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { toast } from "react-toastify";
import {
  getProducts,
  getProductSuccess,
  getProductsfailure,
  getFilteredProducts,
  getFilteredProductsStreamSuccess,
  getFilteredProductsStreamFailure,
  createProductsTarget, 
  createProductsTargetSuccess, 
  createProductsTargetFailure
  
} from '../actionCreators/Products';
import productService from '../../services/Products';

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

export function* getFilteredProductAsync(action) {
  try {
    const { year, periodType } = action;
    const response = yield call(
      productService.getFilteredProducts,
      periodType,
      year
    );
    yield put(getFilteredProductsStreamSuccess(response.data));
  } catch (error) {
    yield put(getFilteredProductsStreamFailure(error));
  }
}

export function* watchGetFilteredProduct() {
  yield takeEvery(getFilteredProducts().type, getFilteredProductAsync);
}

export function* productTargetSagaAsync({ payload }) {
  try {
    const response = yield call(
      productService.productTarget,
      payload
    );
    yield put(createProductsTargetSuccess({ ...response }));
    toast.success("Target was created!", {
      position: toast.POSITION.TOP_RIGHT
    });
  } catch (error) {
    yield put(createProductsTargetFailure(error));
    toast.error("Error When creating target !", {
      position: toast.POSITION.TOP_RIGHT
    });
  }
}

export function* WatchProductsTarget() {
  yield takeLatest(
    createProductsTarget().type,
    productTargetSagaAsync
  );
}
