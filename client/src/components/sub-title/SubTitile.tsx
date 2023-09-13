import React from "react";
import { SubTitleProps } from "./SubTItle.props";

const SubTitle: React.FC<SubTitleProps> = ({ filteredItems }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-medium text-gray-500">Remaining Tasks</h2>
      <p className="text-sm text-gray-500">
        {filteredItems.length} item{filteredItems.length > 1 && "s"}
      </p>
    </div>
  );
};
export default SubTitle;
