import { combineReducers } from 'redux';
import { incomeStream } from './IncomeStreamReducer';

const rootReducer = combineReducers({
  incomeStream
});

export default rootReducer;
