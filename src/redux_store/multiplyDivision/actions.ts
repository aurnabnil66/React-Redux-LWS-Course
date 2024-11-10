import { MULTIPLICATION, DIVISION } from "./actionTypes";

export const multiplication = (value: number) => {
  return {
    type: MULTIPLICATION,
    payload: value,
  };
};

export const division = (value: number) => {
  return {
    type: DIVISION,
    payload: value,
  };
};
