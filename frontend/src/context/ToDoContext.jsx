import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [],
  addTask: (task) => {},
  editTask: (key, Task) => {},
  deleteTask: (key) => {},
  completedTask: (key) => {},
});

export const useTodo = () => {
  return useContext(ToDoContext);
};

export const TodoProvider = ToDoContext.Provider;
