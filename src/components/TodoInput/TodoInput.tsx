import { useState } from "react";
import { Input } from "@nextui-org/react";
import "./TodoInput.scss";

interface TodoInputProps {
  onAddTask: (title: string) => void;
}

export default function TodoInput({ onAddTask }: TodoInputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter" && inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  const handleClickAdd = () => {
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex w-full flex-wrap flex-nowrap gap-4 pb-3">
      <Input
        placeholder="Добавьте новую задачу"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input"
      />

      <button
        className="add-item"
        value={inputValue}
        onClick={handleClickAdd}
      ></button>
    </div>
  );
}
