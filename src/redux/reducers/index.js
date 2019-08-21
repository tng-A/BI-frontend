import { combineReducers } from "redux";
import incomeStream from "./IncomeStreamReducer";
import getValueCentersReducer from "./ValueCenter";
import getTransactionsReducer from "./Transactions";
import getProducts from './Products'

const rootReducer = combineReducers({
  incomeStream,
  getValueCentersReducer,
  getTransactionsReducer,
  getProducts
})

export default rootReducer;
