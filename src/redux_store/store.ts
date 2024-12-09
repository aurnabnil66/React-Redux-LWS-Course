import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";

// Setting up the store with configureStore
const store = configureStore({
  reducer: rootReducer, // root reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myLogger, logger), // Adding custom middleware
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

export default store;
