import { combineReducers } from "redux";
import IncrementDecrementReducer from "./incrementDecrement/incrementDecrementReducer";
import MultiplyDivisionReducer from "./multiplyDivision/multiplyDivisionReducer";

const rootReducer = combineReducers({
  incrementDecrement: IncrementDecrementReducer,
  multiplyDivision: MultiplyDivisionReducer,
});

export default rootReducer;
