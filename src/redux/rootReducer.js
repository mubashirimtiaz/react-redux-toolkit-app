import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./todos/todoSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todos", "counter"],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

export default persistReducer(persistConfig, rootReducer);
