import { all, fork } from "redux-saga/effects";
import {
  watchIncomeStreamSagaAsync,
  WatchIncomeStreamSagaTarget, 
  watchFilteredIncomestreampass
} from "./IncomeStreams";
import { watchGetValueCenterPass, watchFilteredValueCenterpass } from "./ValueCenter";
import {watchGetProductPass} from './Products'

function* rootSaga() {
  yield all([
    fork(watchIncomeStreamSagaAsync),
    fork(WatchIncomeStreamSagaTarget),
    fork(watchGetValueCenterPass),
    fork(watchFilteredValueCenterpass),
    fork(watchGetProductPass),
    fork(watchFilteredIncomestreampass)
  ]);
}

export default rootSaga;
