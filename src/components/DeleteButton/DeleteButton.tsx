import { Button } from "@nextui-org/react";
import "./DeleteButton.scss";

interface DeleteButtonProps {
  onDeleteCompleted: () => void; // Функция обратного вызова для удаления выполненных задач
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDeleteCompleted }) => {
  return (
    <Button
      className="bg-gradient-to-tr from-red-700 to-pink-500 text-white shadow-lg"
      onClick={onDeleteCompleted}
    >
      Удалить выполненные
    </Button>
  );
};

export default DeleteButton;
