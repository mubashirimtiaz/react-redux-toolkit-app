import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/todos/todoSlice";
const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodos(task));
      }}
    >
      <input
        type="text"
        value={task}
        name="task"
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
  );
};

export default AddTodo;
