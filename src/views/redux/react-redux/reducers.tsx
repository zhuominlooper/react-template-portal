import { combineReducers } from "redux";
import { increment, personReducer } from "./reducer";

const allReducer = combineReducers({
  increment,
  personReducer,
});
export default allReducer;
