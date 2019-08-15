import { all, fork } from "redux-saga/effects";
import {
  watchIncomeStreamSagaAsync,
  WatchIncomeStreamSagaTarget
} from "./IncomeStreams";
import { watchGetValueCenterPass, watchFilteredValueCenterpass } from "./ValueCenter";

function* rootSaga() {
  yield all([
    fork(watchIncomeStreamSagaAsync),
    fork(WatchIncomeStreamSagaTarget),
    fork(watchGetValueCenterPass),
    fork(watchFilteredValueCenterpass)
  ]);
}

export default rootSaga;
