import { Button } from "../../";
import { useState } from "react";
import { useTodo } from "../../../context/ToDoContext";

export const ToDoItem = ({ task }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [taskMsg, setTaskMsg] = useState(task.task);
  const { editTask, completedTask, deleteTask } = useTodo();

  const newTask = () => {
    editTask(task.key, { ...task, task: taskMsg });
    setIsEditable(false);
  };

  const toggleTask = () => {
    completedTask(task.key);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        task.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={task.completed}
        onChange={toggleTask}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg
        ${isEditable ? "border-black/10 px-2" : "border-transparent"}
        ${task.completed ? "line-through" : ""} 
        `}
        value={taskMsg}
        onChange={(e) => setTaskMsg(e.target.value)}
        readOnly={!isEditable}
      />
      {/* Edit, Save Button */}
      <Button
        variant="secondary"
        handleChange={() => {
          if (task.completed) return;

          if (isEditable) {
            newTask();
          } else setIsEditable((prev) => !prev);
        }}
        disabled={task.completed}
      >
        {isEditable ? "📁" : "✏️"}
      </Button>
      {/* Delete Todo Button */}
      <Button variant="secondary" handleChange={() => deleteTask(task.key)}>
        ❌
      </Button>
    </div>
  );
};
