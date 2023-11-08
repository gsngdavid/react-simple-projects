import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todo",
  initialState: [
    {
      id: "0",
      task: "IAmHere",
      done: false,
    },
  ],
  reducers: {
    add(state, action) {
        const text = action.payload
        const todo = { id: state.length, text, done: false}
        state.push(todo)
    },

    delete(state, action) {
        state.filter(todo => todo.id !== action.payload)
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
