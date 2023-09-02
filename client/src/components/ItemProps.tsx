import { Todo } from "./model";

export interface ItemProps {
  todoItem: Todo;
  onEditCompleted: (item: Todo) => void;
  deleteItem: (id: string) => void;
}
