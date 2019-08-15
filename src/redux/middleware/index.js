import { all, fork } from "redux-saga/effects";
import {
  watchIncomeStreamSagaAsync,
  WatchIncomeStreamSagaTarget
} from "./IncomeStreams";
import { watchGetValueCenterPass } from "./ValueCenter";

function* rootSaga() {
  yield all([
    fork(watchIncomeStreamSagaAsync),
    fork(WatchIncomeStreamSagaTarget),
    fork(watchGetValueCenterPass)
  ]);
}

export default rootSaga;
