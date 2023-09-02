import { Todo } from "./model";

export interface TodoListProps {
  todos: Todo[];
  deleteItem: (id: string) => void;
  onChange: (items: Todo[]) => void;
}
