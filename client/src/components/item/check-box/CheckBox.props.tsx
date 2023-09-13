import { Todo } from "../../../models/Todo";

export interface CheckBoxProps {
  item: Todo;
  onCompleted: (item: Todo) => void;
}
