import { INCREMENT, DECCREMENT } from "./actionTypes";

export const increment = (value: number) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

export const decrement = (value: number) => {
  return {
    type: DECCREMENT,
    payload: value,
  };
};
