import { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import "./TodoItem.scss";

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
            data-focus-visible="false"
          />
        </div>
      </div>
    );
  }

  return null;
}
