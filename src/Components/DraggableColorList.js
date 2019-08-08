import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

 const DraggableColorList = ({colors, handleDeleteColor}) => {
  return (
    <div style={{height: "100%"}}>
      {colors.map((c ,i) => (
        <DraggableColorBox
          key={c.color}
          color={c.color}
          name={c.name}
          handleDeleteColor={handleDeleteColor}
          index={i}
        />
      ))}
    </div>
  );
};

export default SortableContainer(DraggableColorList);