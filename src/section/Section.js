import React from "react";
import "./section.scss";
import Circle from "../components/circle/Circle";

const Section = ({ title, content, color }) => {
  return (
    <div className="section">
      <div className="circles">
        <Circle color={color} />
        <Circle color={color} />
        <Circle color={color} />
      </div>
      <div className="other">
        <p className="title">{title}</p>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

export default Section;
