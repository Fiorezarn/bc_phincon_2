import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedList = localStorage.getItem("listTask");
    const themeNow = localStorage.getItem("theme");

    if (storedList || themeNow) {
      setListTask(JSON.parse(storedList));
      setTheme(themeNow);
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const addTask = () => {
    const updatedList = [...listTask, task];
    setListTask(updatedList);
    localStorage.setItem("listTask", JSON.stringify(updatedList));
    setTask("");
  };

  const deleteTask = (index) => {
    const newListTask = [...listTask];
    newListTask.splice(index, 1);
    setListTask(newListTask);
    localStorage.setItem("listTask", JSON.stringify(newListTask));
  };

  return (
    <div className="app">
      <Header />
      <div className="h-screen flex justify-center items-center ">
        <div
          className={`rounded-md px-20 py-6 ${
            theme === "light" ? "bg-slate-400 " : " bg-black"
          }`}
        >
          <h1 className="text-3xl mb-10 text-white text-center">To-Do List</h1>
          <div className="grid gap-6">
            <button
              className="bg-blue-600 p-4 rounded-md text-white font-bold"
              onClick={changeTheme}
            >
              Switch to {theme === "light" ? "dark" : "light"} Theme
            </button>
            <div className="flex gap-4">
              <input
                className="p-6 rounded-lg"
                type="text"
                placeholder="Add a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button
                className="bg-blue-600 p-4 rounded-md text-white font-bold"
                onClick={addTask}
              >
                Add Task
              </button>
            </div>
            <div className="grid gap-4" id="listTask">
              {listTask.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl text-left flex items-center justify-between"
                >
                  <h1 className="font-bold text-xl">{item}</h1>
                  <button
                    className="bg-red-600 p-4 rounded-md text-white"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
