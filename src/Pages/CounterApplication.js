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

const CounterApplication = () => {
  const incDecCount = useSelector((state) => state.incrementDecrement.value);
  const mulDivCount = useSelector((state) => state.multiplyDivision.value);

  const dispatch = useDispatch();

  const incrementValue = (value) => {
    dispatch(increment(value));
  };

  const decrementValue = (value) => {
    dispatch(decrement(value));
  };

  const multiplicationValue = (value) => {
    dispatch(multiplication(value));
  };

  const divisionValue = (value) => {
    dispatch(division(value));
  };

  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      {/* <!-- header --> */}
      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      {/* <!-- counters --> */}
      <div class="max-w-md mx-auto mt-10 space-y-5">
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div class="text-2xl font-semibold">{incDecCount}</div>
          <div class="flex space-x-3">
            <button
              class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={() => incrementValue(2)}
            >
              Increment
            </button>
            <button
              class="bg-red-400 text-white px-3 py-2 rounded shadow"
              onClick={() => decrementValue(3)}
            >
              Decrement
            </button>
          </div>
        </div>

        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div class="text-2xl font-semibold">
            {mulDivCount ? mulDivCount : 0}
          </div>
          <div class="flex space-x-3">
            <button
              class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={() => multiplicationValue(5)}
            >
              Multiply
            </button>
            <button
              class="bg-red-400 text-white px-3 py-2 rounded shadow"
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
