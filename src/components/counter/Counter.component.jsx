import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decreament,
  increamentByValue,
} from "../../redux/counter/counterSlice";
const Counter = () => {
  const count = useSelector(({ counter }) => counter.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increament())}>increament</button>
      <br />
      <br />
      <button onClick={() => dispatch(decreament())}>decreament</button>
      <br />
      <br />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(increamentByValue(Number(value)));
          setValue(0);
        }}
      >
        increated by value
      </button>
    </div>
  );
};

export default Counter;
