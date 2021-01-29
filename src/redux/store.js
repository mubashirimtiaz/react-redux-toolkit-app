import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./todos/todoSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoReducer,
  },
});

export default store;
