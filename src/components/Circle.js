import React from 'react';

const Circle = ({color}) => {
    const circleStyle = {
        backgroundColor: color,
        borderRadius: "50%",
        width:10,
        height:10,
      };
    return (
        <div style={circleStyle}>
        </div>
    );
}

export default Circle;