import { Todo } from "../../models/model";

export interface TodoListProps {
  todos: Todo[];
  deleteItem: (id: string) => void;
  onChange: (items: Todo[]) => void;
}
