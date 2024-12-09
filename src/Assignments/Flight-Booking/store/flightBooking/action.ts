import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

interface Booking {
  destinationFrom: string;
  destinationTo: string;
  journeyDate: string;
  numberOfGuests: number;
  guestClass: string;
}

export const addBooking = (booking: Booking) => {
  return {
    type: ADD_BOOKING,
    payload: booking,
  };
};

export const deleteBooking = (id: number) => {
  return {
    type: DELETE_BOOKING,
    payload: id,
  };
};
