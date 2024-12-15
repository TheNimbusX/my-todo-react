import { Button } from "@nextui-org/react";
import "./DeleteButton.scss";

interface DeleteButtonProps {
  onDeleteCompleted: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDeleteCompleted }) => {
  return (
    <Button
      className="bg-gradient-to-tr from-red-700 to-pink-500 text-white shadow-lg"
      onClick={onDeleteCompleted}
      onTouchStart={onDeleteCompleted}
    >
      Удалить выполненные
    </Button>
  );
};

export default DeleteButton;
