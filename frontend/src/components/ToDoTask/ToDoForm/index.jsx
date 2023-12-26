import { Button, Container, Input } from "../../";
import { useState } from "react";
import { useTodo } from "../../../context/ToDoContext.jsx";

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
    setTask("");
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
        <Button variant="primary" type="submit">
          Add
        </Button>
      </form>
    </Container>
  );
};
