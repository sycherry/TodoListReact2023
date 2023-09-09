import { Todo } from "../../models/Todo";

export interface ItemProps {
  todoItem: Todo;
  onEditCompleted: (item: Todo) => void;
  deleteItem: (id: string) => void;
}
