import { MULTIPLICATION, DIVISION } from "./actionTypes";

const initialState = {
  value: 1,
};

const MultiplyDivisionReducer = (
  state = initialState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case MULTIPLICATION:
      return {
        ...state,
        value: state.value * action.payload,
      };

    case DIVISION:
      return {
        ...state,
        value: state.value / action.payload,
      };

    default:
      return state;
  }
};

export default MultiplyDivisionReducer;
