import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  toggleTodo,
  clearCompleted,
  setFilter,
  removeTodo,
  toggleTheme,
} from "./redux/actions"; // Pastikan import ini benar
import bgLight from "./assets/images/bg-desktop-light.jpg";
import bgDark from "./assets/images/bg-desktop-dark.jpg";
import moonIcon from "./assets/images/icon-moon.svg";
import sunIcon from "./assets/images/icon-sun.svg";
import crossIcon from "./assets/images/icon-cross.svg";

function App() {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && newTodo.trim()) {
      dispatch(addTodo(newTodo, isCompleted)); // Menggunakan addTodo
      setNewTodo("");
      setIsCompleted(false);
    }
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
    setActiveIndex(null);
  };

  return (
    <div className="relative flex justify-center items-center lg:h-screen p-6">
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
        style={{
          backgroundImage: isDarkMode ? `url(${bgDark})` : `url(${bgLight})`,
        }}
      ></div>

      <div className="relative rounded-lg z-10 mt-16">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-sans font-bold text-3xl text-white tracking-[20px]">
            TODO
          </h1>
          <img
            src={isDarkMode ? sunIcon : moonIcon}
            onClick={toggleThemeHandler}
            alt="theme-icon"
            className="h-6 w-6 cursor-pointer"
          />
        </div>

        <div
          className={`mb-4 p-6 rounded-lg flex items-center gap-2 ${
            isDarkMode ? "bg-gray-700" : "bg-white"
          }`}
        >
          <input
            className="form-checkbox text-blue-600 rounded-full"
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full p-2 rounded-md focus:outline-none border-none font-josefin font-normal"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={handleAddTodo}
          />
        </div>

        <ul
          className={`p-6 rounded-lg ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          {filteredTodos.map((todo, index) => (
            <li
              key={index}
              className={`flex gap-4 items-center mb-3 p-2 rounded-md border-b-2 ${
                todo.completed
                  ? `line-through opacity-50 ${
                      isDarkMode
                        ? "text-gray-400 bg-gray-700"
                        : "text-gray-500 bg-gray-200"
                    }`
                  : `${isDarkMode ? "text-white" : "text-black"}`
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(index))}
                className="form-checkbox text-blue-600  rounded-full"
              />
              <span
                className={`font-josefin font-normal${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {todo.text}
              </span>
              {activeIndex === index && (
                <button
                  onClick={() => handleRemoveTodo(index)}
                  className="ml-auto text-red-500 hover:text-red-700"
                >
                  <img src={crossIcon} alt="cross-icon" />
                </button>
              )}
            </li>
          ))}
          <div className=" flex justify-between gap-6">
            <span className="text-gray-600">
              {todos.filter((todo) => !todo.completed).length} items left
            </span>
            <button
              className={`mx-2 hidden lg:block  ${
                filter === "All" ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => dispatch(setFilter("All"))}
            >
              All
            </button>
            <button
              className={`mx-2 hidden lg:block ${
                filter === "Active" ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => dispatch(setFilter("Active"))}
            >
              Active
            </button>
            <button
              className={`mx-2 hidden lg:block ${
                filter === "Completed" ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => dispatch(setFilter("Completed"))}
            >
              Completed
            </button>
            <button
              onClick={() => dispatch(clearCompleted())}
              className="text-red-600"
            >
              Clear Completed
            </button>
          </div>
        </ul>
        <div className="text-center lg:hidden font-josefin mt-4 justify-center flex p-6 rounded-lg bg-white">
          <div className="flex gap-4">
            <button
              className={`mx-2  ${
                filter === "All" ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => dispatch(setFilter("All"))}
            >
              All
            </button>
            <button
              className={`mx-2  ${
                filter === "Active" ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => dispatch(setFilter("Active"))}
            >
              Active
            </button>
            <button
              className={`mx-2  ${
                filter === "Completed" ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => dispatch(setFilter("Completed"))}
            >
              Completed
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-200"
        }`}
      ></div>
    </div>
  );
}

export default App;
