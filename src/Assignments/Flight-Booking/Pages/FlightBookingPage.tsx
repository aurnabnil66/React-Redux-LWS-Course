import { RiMapPinLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import moment from "moment";
import { addBooking, deleteBooking } from "../store/flightBooking/action";

const FligthBookingPage = () => {
  const dispatch = useDispatch();

  const bookingsArray = useSelector(
    (state: RootState) => state.flightBookingFeature.bookings
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBooking = {
      destinationFrom: e.currentTarget.from.value,
      destinationTo: e.currentTarget.to.value,
      journeyDate: e.currentTarget.date.value,
      numberOfGuests: Number(e.currentTarget.guests.value), // Convert guests to a number
      guestClass: e.currentTarget.ticketClass.value,
    };

    dispatch(addBooking(newBooking));

    e.currentTarget.reset();
  };

  const handleDelete = (index: number) => {
    dispatch(deleteBooking(index));
  };

  return (
    <section className="flex flex-col items-center justify-center mt-[160px] mx-4">
      <div className="bg-slate-800 rounded-lg max-w-6xl w-full">
        <form className="flex flex-row gap-4 p-4" onSubmit={handleSubmit}>
          {/* Destination From */}
          <div className="flex-1">
            <label
              htmlFor="lws-from"
              className="block text-sm font-semibold mb-1 text-blue-500"
            >
              Destination From
            </label>
            <div className="flex items-center gap-2">
              <RiMapPinLine className="text-blue-500 text-3xl" />
              <select
                className="outline-none px-2 py-2 w-full bg-slate-800 border border-slate-600 rounded-md bg-inherit text-white"
                name="from"
                id="lws-from"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* Destination To */}
          <div className="flex-1">
            <label
              htmlFor="lws-to"
              className="block text-sm font-semibold mb-1 text-red-500"
            >
              Destination To
            </label>
            <div className="flex items-center gap-2">
              <RiMapPinLine className="text-red-500 text-3xl" />
              <select
                className="outline-none px-2 py-2 w-full bg-slate-800 border border-slate-600 rounded-md bg-inherit text-white"
                name="to"
                id="lws-to"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* Journey Date */}
          <div className="flex-1">
            <label
              htmlFor="lws-date"
              className="block text-sm font-semibold mb-1 text-lime-500"
            >
              Journey Date
            </label>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full border border-slate-600 rounded-md bg-inherit text-white"
              name="date"
              id="lws-date"
              required
            />
          </div>

          {/* Guests */}
          <div className="flex-1">
            <label
              htmlFor="lws-guests"
              className="block text-sm font-semibold mb-1 text-yellow-500"
            >
              Guests
            </label>
            <div className="flex items-center gap-2">
              <AiOutlineUser className="text-yellow-500 text-3xl" />
              <select
                className="outline-none px-2 py-2 w-full bg-slate-800 border border-slate-600 rounded-md bg-inherit text-white"
                name="guests"
                id="lws-guests"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* Class */}
          <div className="flex-1">
            <label
              htmlFor="lws-ticketClass"
              className="block text-sm font-semibold mb-1 text-fuchsia-600"
            >
              Class
            </label>
            <div className="flex items-center gap-2">
              <IoBagHandleOutline className="text-fuchsia-600 text-3xl" />
              <select
                className="outline-none px-2 py-2 w-full bg-slate-800 border border-slate-600 rounded-md bg-inherit text-white"
                name="ticketClass"
                id="lws-ticketClass"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-end mb-1">
            <button
              className="addCity flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              type="submit"
              id="lws-addCity"
            >
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </div>
        </form>
      </div>

      {/* Preview Data */}
      <div className="table-container overflow-x-auto rounded-lg border border-gray-700 shadow-lg mt-10">
        <table className="booking-table w-full text-sm text-left text-gray-400">
          <thead className="bg-gray-800 text-gray-300 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-6 py-3">Destination From</th>
              <th className="px-6 py-3">Destination To</th>
              <th className="px-6 py-3 text-center">Journey Date</th>
              <th className="px-6 py-3 text-center">Guests</th>
              <th className="px-6 py-3 text-center">Class</th>
              <th className="px-6 py-3 text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 bg-gray-900">
            {bookingsArray.map((booking, index) => (
              <tr key={index} className="hover:bg-gray-700 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <p className="text-gray-100">{booking.destinationFrom}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-100">{booking.destinationTo}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <p className="text-gray-100">
                    {moment(booking.journeyDate).format("MM/DD/YYYY")}
                  </p>
                </td>
                <td className="px-6 py-4 text-center">
                  <p className="text-gray-100">{booking.numberOfGuests}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <p className="text-blue-500">{booking.guestClass}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-600 transition"
                      aria-label="Delete booking"
                    >
                      <MdDeleteOutline className="text-2xl" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FligthBookingPage;
