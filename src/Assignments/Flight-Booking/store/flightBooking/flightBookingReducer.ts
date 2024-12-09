import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

const initialState = {
  bookings: [],
};

const flightBookingReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case ADD_BOOKING: {
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    }
    case DELETE_BOOKING: {
      const currentBookings = state.bookings; // copy the current bookings array
      const updatedBookings = currentBookings.filter(
        (booking, index) => index !== action.payload
      ); // filter out the booking with the given index
      return {
        ...state,
        bookings: updatedBookings, // update the bookings
      };
    }
    default:
      return state;
  }
};

export default flightBookingReducer;

// const updatedBookings = currentBookings.filter((booking, index) => index !== action.payload);
// explanation:
// when index does not match the action.payload, keep the booking in the array
// when index matches the action.payload, remove the booking from the array
