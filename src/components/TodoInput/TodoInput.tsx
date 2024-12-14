import { useState } from "react";
import "./TodoInput.scss";
import { Input } from "@nextui-org/react";

interface TodoInputProps {
  onAddTask: (title: string) => void;
}

export default function TodoInput({ onAddTask }: TodoInputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pb-3">
      <Input
        placeholder="Добавьте новую задачу"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
