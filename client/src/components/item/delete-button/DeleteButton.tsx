import { Todo } from "../../../models/Todo";
import { HiOutlineTrash } from "react-icons/hi";

interface DeleteButtonProps {
  deleteItem: (id: string) => void;
  item: Todo;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ deleteItem, item }) => {
  return (
    <>
      {!item.isEditing && (
        <button type="button" onClick={() => deleteItem(item.id)}>
          <HiOutlineTrash className="hover:text-gray-200" size={20} />
        </button>
      )}
    </>
  );
};
export default DeleteButton;
