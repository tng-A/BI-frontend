import { combineReducers } from "redux";
import { incomeStream } from "./IncomeStreamReducer";
import getValueCentersReducer from "./ValueCenter";
import getTransactionsReducer from "./Transactions";

const rootReducer = combineReducers({
  incomeStream,
  getValueCentersReducer,
  getTransactionsReducer
});

export default rootReducer;
