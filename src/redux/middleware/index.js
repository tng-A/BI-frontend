import { all, fork } from "redux-saga/effects";
import {
  watchIncomeStreamSagaAsync,
  WatchIncomeStreamSagaTarget,
  watchFilteredIncomestreampass,
  watchGetPeriodPass,
  watchGetMetricPass
} from "./IncomeStreams";
import { watchGetValueCenterPass } from "./ValueCenter";
import { watchGetProductPass } from "./Products";
import {
  getRevenueStreamsWatcher,
  createRevenueStreamsTargetWatcher
} from "./RevenueStreams";

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
    fork(createRevenueStreamsTargetWatcher)
  ]);
}

export default rootSaga;
