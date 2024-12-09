import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer, // root reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Adding custom middleware
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;
