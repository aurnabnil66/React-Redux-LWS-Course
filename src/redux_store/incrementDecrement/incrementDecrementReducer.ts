import { INCREMENT, DECCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

const IncrementDecrementReducer = (
  state = initialState,
  action: { type: string; payload: number }
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case DECCREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

export default IncrementDecrementReducer;
