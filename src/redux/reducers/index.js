import { combineReducers } from "redux";
import incomeStream from "./IncomeStreamReducer";
import getValueCentersReducer from "./ValueCenter";
import getTransactionsReducer from "./Transactions";
import getProducts from "./Products";
import revenueStreamsReducer from "./RevenueStreamsReducer";

const rootReducer = combineReducers({
  incomeStream,
  getValueCentersReducer,
  getTransactionsReducer,
  getProducts,
  revenueStreamsReducer
});

export default rootReducer;
