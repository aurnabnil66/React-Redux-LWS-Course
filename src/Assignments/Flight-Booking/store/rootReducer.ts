import { combineReducers } from "redux";

import flightBookingReducer from "./flightBooking/flightBookingReducer";

const rootReducer = combineReducers({
  flightBookingFeature: flightBookingReducer,
});

export default rootReducer;
