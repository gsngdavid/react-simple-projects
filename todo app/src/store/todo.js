import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    add(state, action) {
      const text = action.payload.trim();
      if (text.length === 0) return;
      const todo = { id: state.length, task: text, done: false };
      state.push(todo);
    },

    delete(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },

    changeTaskStatus(state, action) {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload);
      const todo = state[todoIndex];
      state[todoIndex] = { ...todo, done: !todo.done };
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
