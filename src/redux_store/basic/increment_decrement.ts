import { createStore } from "redux";

// initial state
const initialState = {
  value: 0,
  properties: {
    a: 5,
    b: 6,
  },
};

// create reducer function
export const CounterReducer = (
  state = initialState,
  action: { type: string; payload: number }
) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else if (action.type === "IMMUTABILITY") {
    const updatedState = {
      ...state,
      properties: {
        ...state.properties, // copied upto the primitives
        a: state.properties.a + 2,
        b: state.properties.b + 1,
      },
    };
    return updatedState;
  } else {
    return state;
  }
};

// create store
//export const store = createStore(CounterReducer);
