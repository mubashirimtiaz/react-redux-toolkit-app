import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increament: (state) => {
      state.count++;
    },
    decreament: (state) => {
      state.count--;
    },
    increamentByValue: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const {
  increament,
  decreament,
  increamentByValue,
} = counterSlice.actions;
export default counterSlice.reducer;
