import { all, fork } from 'redux-saga/effects';
import {
  watchIncomeStreamSagaAsync,
  WatchIncomeStreamSagaTarget,
  watchFilteredIncomestreampass,
  watchGetPeriodPass,
  watchGetMetricPass
} from "./IncomeStreams";
import { watchGetValueCenterPass } from "./ValueCenter";
import {
  getRevenueStreamsWatcher,
  createRevenueStreamsTargetWatcher
} from "./RevenueStreams";
import {
  watchGetProductPass,
  watchGetFilteredProduct,
  WatchProductsTarget
} from './Products';


function* rootSaga() {
  yield all([
    fork(watchIncomeStreamSagaAsync),
    fork(WatchIncomeStreamSagaTarget),
    fork(watchGetValueCenterPass),
    fork(watchGetProductPass),
    fork(watchFilteredIncomestreampass),
    fork(watchGetPeriodPass),
    fork(watchGetMetricPass),
    fork(getRevenueStreamsWatcher),
    fork(createRevenueStreamsTargetWatcher),
    fork(watchGetFilteredProduct),
    fork(WatchProductsTarget)
  ]);
}

export default rootSaga;
