import { all, fork } from "redux-saga/effects";
import {
  watchIncomeStreamSagaAsync,
  WatchIncomeStreamSagaTarget
} from "./IncomeStreams";

function* rootSaga() {
  yield all([
    fork(watchIncomeStreamSagaAsync),
    fork(WatchIncomeStreamSagaTarget)
  ]);
}

export default rootSaga;
