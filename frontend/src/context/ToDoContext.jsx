import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      key: 1,
      Task: "msg",
      completed: true,
    },
  ],
  addTask: (Task) => {},
  editTask: (key, Task) => {},
  deleteTask: (key) => {},
  completedTask: (key) => {},
});

export const useTodo = () => {
  return useContext(ToDoContext);
};

export const TodoProvider = ToDoContext.Provider;
