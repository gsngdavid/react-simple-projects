import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todos",
  initialState: [],
  reducers: {
    add(state, action) {
      const todo = { id: new Date().toLocaleString(), task: action.payload, done: false };
      state.push(todo);
    },

    delete(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },

    changeTaskStatus(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      todo.done = !todo.done;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
