import { combineReducers } from "redux";
import { incomeStream } from "./IncomeStreamReducer";
import getValueCentersReducer from "./ValueCenter";

const rootReducer = combineReducers({
  incomeStream,
  getValueCentersReducer
});

export default rootReducer;
