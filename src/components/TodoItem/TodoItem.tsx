import { useState } from "react";
import "./TodoItem.scss";
import { Checkbox } from "@nextui-org/react";

interface TodoItemProps {
  title: string;
  isDone: boolean;
  onToggleTask: () => void;
  onDeleteTask: () => void;
}

export default function TodoItem({
  title,
  isDone,
  onToggleTask,
  onDeleteTask,
}: TodoItemProps) {
  const [deleteBtn] = useState(true);
  const [isDoneTask, setDoneTask] = useState(isDone);

  const handleToggleTask = () => {
    setDoneTask((prev) => !prev);
    onToggleTask();
  };

  if (deleteBtn) {
    return (
      <div className={`todo-item flex gap-3 ${isDoneTask ? "taskDone" : ""}`}>
        <p className="todo-text flex items-center">{title}</p>
        <div className="control-btns flex gap-2">
          <button className="delete-item" onClick={onDeleteTask}></button>
          <Checkbox
            color="warning"
            onClick={handleToggleTask}
            isSelected={isDoneTask}
          />
        </div>
      </div>
    );
  }

  return null;
}
