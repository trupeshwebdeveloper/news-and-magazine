import { useEffect } from "react";
import { useState } from "react";
import { TodoProvider } from "../../context/";
import { ToDoFrom } from "../../components/ToDoTask/ToDoForm";
import { ToDoItem } from "../../components/ToDoTask/ToDoItem";

export const ToDoLists = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (Task) => {
    setTodos((prev) => [{ key: Date.now(), ...Task }, ...prev]);
  };

  const editTask = (key, Task) => {
    setTodos((prev) =>
      prev.map((prevTask) => (prevTask.key === key ? Task : prevTask))
    );
  };

  const deleteTask = (key) => {
    setTodos((prev) => prev.filter((Task) => Task.key !== key));
  };

  const completedTask = (key) => {
    setTodos((prev) =>
      prev.map((prevTask) =>
        prevTask.key === key
          ? { ...prevTask, completed: !prevTask.completed }
          : prevTask
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("ToDoLists"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ToDoLists", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTask,
        editTask,
        deleteTask,
        completedTask,
      }}
    >
      <div className="">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <ToDoFrom />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((task) => (
              <div key={task.key} className="w-full">
                <ToDoItem task={task} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};
