import { Container, Input } from "../../";
import { useState } from "react";
import { useTodo } from "../../../context/ToDoContext";

export const ToDoFrom = () => {
  const [task, setTask] = useState("");

  const { addTask } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!task) return;
    addTask({
      task,
      completed: false,
    });
  };

  return (
    <Container>
      <form onSubmit={add} className="flex">
        <Input
          type="text"
          parentClassName="w-full"
          placeholder="Write Todo..."
          className="form-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-dark bg-primary shrink-0"
        >
          Add
        </button>
      </form>
    </Container>
  );
};
