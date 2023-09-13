import React from "react";
import { Todo } from "../../../models/Todo";

export interface TodoInputProps {
  item: Todo;
  setItem: React.Dispatch<React.SetStateAction<Todo>>;
}
