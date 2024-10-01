// src/reducer.js
import {
  TOGGLE_THEME,
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED,
  SET_FILTER,
  REMOVE_TODO,
} from "./actions";

const initialState = {
  todos: [
    { text: "Complete online JavaScript course", completed: true },
    { text: "Jog around the park 3x", completed: false },
    { text: "10 minutes meditation", completed: false },
    { text: "Read for 1 hour", completed: false },
    { text: "Pick up groceries", completed: false },
    { text: "Complete Todo App on Frontend Mentor", completed: false },
  ],
  filter: "All",
  isDarkMode: localStorage.getItem("isDarkMode") === "true",
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const newTheme = !state.isDarkMode;
      localStorage.setItem("isDarkMode", newTheme);
      return {
        ...state,
        isDarkMode: newTheme,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload[0], completed: action.payload[1] }, // payload berupa array [text, completed]
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, idx) => idx !== action.payload),
      };
    default:
      return state;
  }
};
