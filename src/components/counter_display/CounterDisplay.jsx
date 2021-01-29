import React from "react";
import { useSelector } from "react-redux";
const CounterDisplay = () => {
  const count = useSelector(({ counter }) => counter.count);
  return (
    <div>
      <h3>Counter Display: {count}</h3>
    </div>
  );
};

export default CounterDisplay;
