import { combineReducers } from "redux";
import incomeStream from "./IncomeStreamReducer";
import getValueCentersReducer from "./ValueCenter";
import getTransactionsReducer from "./Transactions";
import getProducts from "./Products";
import revenueStreamsReducer from "./RevenueStreamsReducer";
import navBar from "./navbar"
import authentication from './authentication'; 

const rootReducer = combineReducers({
  incomeStream,
  getValueCentersReducer,
  getTransactionsReducer,
  getProducts,
  revenueStreamsReducer, 
  navBar, 
  authentication
});

export default rootReducer;
