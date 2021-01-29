import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "../../redux/todos/todoSlice";

import "./todo.css";
const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todoList }) => todoList.todos);
  return (
    <div>
      {!todos.length ? (
        <p>There is no task</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li
              onClick={() =>
                dispatch(updateStatus({ id: todo.id, status: todo.completed }))
              }
              key={todo.id}
              className={`${todo.completed ? "done" : "undone"}`}
            >
              {todo.task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
