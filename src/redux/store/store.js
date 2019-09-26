import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../middleware';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();
const tool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = tool;
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware, logger));
const store = createStore(rootReducer, middleware);

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

sagaMiddleware.run(rootSaga);

export default store;
