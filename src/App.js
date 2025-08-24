import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home";
import Create from "./components/create";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: tasks.length + 1,
      createdOn: new Date().toISOString().split("T")[0],
    };
    setTasks([...tasks, newTask]);
    console.log("Tasks after add:", [...tasks, newTask]);
  };

  const updateTask = (id, updatedFields) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updatedFields } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-grey-600 text-lg">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                tasks={tasks}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            }
          />
          {/* Create task route */}
          <Route exact path="/create" element={<Create addTask={addTask} />} />
          <Route
            path="/edit/:id"
            element={
              <Create tasks={tasks} updateTask={updateTask} editMode={true} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
