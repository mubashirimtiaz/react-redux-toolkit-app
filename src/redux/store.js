import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

const middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleware],
});
const persistor = persistStore(store);

export { persistor, store };
