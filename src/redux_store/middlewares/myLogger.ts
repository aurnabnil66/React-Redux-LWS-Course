import rootReducer from "../rootReducer";

// Creating a custom logger
const myLogger = (store: any) => (next: any) => (action: any) => {
  console.log(`Action: ${JSON.stringify(action)}`);

  console.log(`Before: ${JSON.stringify(store.getState())}`);

  // if we do not call next after this, the action will not be dispatched
  // there will be no change in action
  // so, we need to call next and return the result

  const upComingState = [action].reduce(rootReducer, store.getState());

  console.log(`Upcoming State: ${JSON.stringify(upComingState)}`);

  const result = next(action); // Proceed with the action

  console.log(`After: ${JSON.stringify(store.getState())}`);

  return result;
};

export default myLogger;
