import { all, fork } from "redux-saga/effects";
import {
  watchIncomeStreamSagaAsync,
  WatchIncomeStreamSagaTarget
} from "./IncomeStreams";
import { watchGetValueCenterPass } from "./ValueCenter";
import { watchGetTransactionsPass } from "./Transactions";

function* rootSaga() {
  yield all([
    fork(watchIncomeStreamSagaAsync),
    fork(WatchIncomeStreamSagaTarget),
    fork(watchGetValueCenterPass),
    fork(watchGetTransactionsPass)
  ]);
}

export default rootSaga;
