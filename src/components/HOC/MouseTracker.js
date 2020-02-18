import React, { useState } from "react";

const MouseTracker = ({ render }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <div
      onMouseMove={e => {
        setX(e.clientX);
        setY(e.clientY);
      }}
    >
      {render({ x, y })}
    </div>
  );
};

export default MouseTracker;
