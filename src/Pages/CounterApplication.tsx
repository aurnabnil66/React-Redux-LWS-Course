import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "../redux_store/incrementDecrement/actions";

import {
  multiplication,
  division,
} from "../redux_store/multiplyDivision/actions";

import { RootState } from "../redux_store/store";

const CounterApplication = () => {
  const incDecCount = useSelector(
    (state: RootState) => state.incrementDecrement.value
  );
  const mulDivCount = useSelector(
    (state: RootState) => state.multiplyDivision.value
  );

  const dispatch = useDispatch();

  const incrementValue = (value: number) => {
    dispatch(increment(value));
  };

  const decrementValue = (value: number) => {
    dispatch(decrement(value));
  };

  const multiplicationValue = (value: number) => {
    dispatch(multiplication(value));
  };

  const divisionValue = (value: number) => {
    dispatch(division(value));
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      {/* <!-- header --> */}
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      {/* <!-- counters --> */}
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div className="text-2xl font-semibold">{incDecCount}</div>
          <div className="flex space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={() => incrementValue(2)}
            >
              Increment
            </button>
            <button
              className="bg-red-400 text-white px-3 py-2 rounded shadow"
              onClick={() => decrementValue(3)}
            >
              Decrement
            </button>
          </div>
        </div>

        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div className="text-2xl font-semibold">
            {mulDivCount ? mulDivCount : 0}
          </div>
          <div className="flex space-x-3">
            <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={() => multiplicationValue(5)}
            >
              Multiply
            </button>
            <button
              className="bg-red-400 text-white px-3 py-2 rounded shadow"
              onClick={() => divisionValue(2)}
            >
              Divide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterApplication;
