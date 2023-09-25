import React from "react";

const Subtitle = ({ color, title, text }) => {
  return (
    <>
      <h2 style={{ color }} className={title}>
        {text}
      </h2>
    </>
  );
};

export default Subtitle;
