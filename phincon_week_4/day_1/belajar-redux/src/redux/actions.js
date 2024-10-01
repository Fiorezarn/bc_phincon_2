// src/actions.js
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const SET_FILTER = "SET_FILTER";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_THEME = "TOGGLE_THEME";

export const addTodo = (text, completed) => ({
  type: ADD_TODO,
  payload: [text, completed], // Kirim sebagai array [text, completed]
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  payload: index,
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: index,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
