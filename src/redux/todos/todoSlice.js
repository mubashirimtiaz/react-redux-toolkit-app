import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1, task: "Walking", completed: false }],
  },
  reducers: {
    addTodos: (state, action) => {
      console.log(action.payload);
      state.todos = [
        ...state.todos,
        {
          id: uuid(),
          task: action.payload,
          completed: false,
        },
      ];
    },
    updateStatus: (state, { payload }) => {
      const indx = state.todos.findIndex((todo) => todo.id === payload.id);
      if (indx >= 0) {
        state.todos[indx] = {
          ...state.todos[indx],
          completed: !payload.status,
        };
        state.todos = [...state.todos];
      } else {
        state.todos = [...state.todos];
      }
    },
  },
});

export const { addTodos, updateStatus } = todoSlice.actions;
export default todoSlice.reducer;
