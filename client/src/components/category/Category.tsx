import React from "react";
import { CategoryProps } from "./Category.props";

const Button: React.FC<CategoryProps> = ({ filterCategory }) => {
  return (
    <ul className="flex items-center mt-10">
      <li>
        <button
          className="inline-flex items-center rounded-full bg-sky-200 px-4 py-1 mr-3
           hover:bg-sky-500 hover:text-white"
          onClick={() => filterCategory("all")}
        >
          All
        </button>
      </li>
      <li>
        <button
          className="inline-flex items-center rounded-full bg-sky-200 px-4 py-1 mr-3
           hover:bg-sky-500 hover:text-white"
          onClick={() => filterCategory("active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className="inline-flex items-center rounded-full bg-sky-200 px-4 py-1
           hover:bg-sky-500 hover:text-white"
          onClick={() => filterCategory("completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};
export default Button;
