import { Todo } from "../../models/Todo";

export interface TodoListProps {
  todos: Todo[];
  deleteItem: (id: string) => void;
  onChange: (items: Todo[]) => void;
}
