import { HiOutlineCheck, HiOutlinePencil } from "react-icons/hi";
import { EditButtonProps } from "./EditButton.props";

const EditButton: React.FC<EditButtonProps> = ({
  item,
  onFinishedEditing,
  onEditing,
}) => {
  return (
    <>
      {!item.isDone && (
        <>
          {item.isEditing ? (
            <button type="button" onClick={() => onFinishedEditing(item)}>
              <HiOutlineCheck
                className="hover:text-gray-200"
                size={20}
              />
            </button>
          ) : (
            <button type="button" onClick={() => onEditing()}>
              <HiOutlinePencil
                className="hover:text-gray-200"
                size={20}
              />
            </button>
          )}
        </>
      )}
    </>
  );
};
export default EditButton;
