import React from "react";

const Circle = ({ color }) => {
  const circleStyle = {
    backgroundColor: color,
    borderRadius: "50%",
    width: 8,
    height: 8,
  };
  return <div style={circleStyle}></div>;
};

export default Circle;
