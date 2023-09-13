import React from "react";
import { PiSquare, PiCheckSquareDuotone } from "react-icons/pi";
import { CheckBoxProps } from "./CheckBox.props";

const CheckBox: React.FC<CheckBoxProps> = ({ item, onCompleted }) => {
  return (
    <div>
      {item.isDone ? (
        <button type="button" onClick={() => onCompleted(item)}>
          <PiCheckSquareDuotone
            className="inline mr-4 text-sky-500"
            size={28}
          />
        </button>
      ) : (
        <button type="button" onClick={() => onCompleted(item)}>
          <PiSquare className="inline mr-4 " size={28} />
        </button>
      )}
    </div>
  );
};
export default CheckBox;
