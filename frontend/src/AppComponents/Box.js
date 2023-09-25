import React from "react";

const Box = ({ marginTop , display, gridTemplateRows, childComponents }) => {
  return (
    <div style={{ marginTop , display, gridTemplateRows }}>
      {childComponents?.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
};

export default Box;
