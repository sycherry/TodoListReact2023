import { Todo } from "../../../models/Todo";

export interface EditButtonProps {
  item: Todo;
  onFinishedEditing: (item: Todo) => void;
  onEditing: () => void;
}
