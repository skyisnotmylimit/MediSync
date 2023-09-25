import React from "react";
import { useState } from "react";
const CloseIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const transition1 = () => {
    setIsHovered(true);
  };
  const transition2 = () => {
    setIsHovered(false);
  };
  const styles = {
    display: isClose ? "none" : "inline",
    backgroundColor: isHovered === true ? "#bac3e630" : "#ffffff00",
    borderRadius: "20px",
    padding: "5px",
  };
  const close = () => {
    setIsClose(true);
  };
  return (
    <i
      onMouseEnter={transition1}
      onMouseLeave={transition2}
      onClick={close}
      class="ri-close-line"
      style={styles}
    ></i>
  );
};

export default CloseIcon;
