import React from "react";

const Logo = ({
  background,
  backgroundRepeat,
  backgroundSize,
  backgroundPositionX,
  height,
  width,
  borderRadius,
  marginLeft
}) => {
  return (
    <div
      style={{
        background,
        backgroundRepeat,
        backgroundSize,
        backgroundPositionX,
        height,
        width,
        borderRadius,
        marginLeft
      }}
    ></div>
  );
};

export default Logo;
