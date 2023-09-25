import React from "react";
import { useState } from "react";

const TextButton = ({
  position,
  padding,
  margin,
  backgroundColor,
  color,
  text,
}) => {
  const [isHovered , setIsHovered] = useState(false);
  const transition1 = () => {
    setIsHovered(true);
  };
  const transition2 = () => {
    setIsHovered(false);
  };

  return (
    <div
      id="text-button"
      style={{
        backgroundColor: isHovered?"#0955b5a8": backgroundColor,
        position,
        padding: "5px",
        margin,
        color,
        borderRadius: "5px",
      }}
      onMouseEnter={transition1}
      onMouseLeave={transition2}
    >
      {text}
    </div>
  );
};

export default TextButton;
