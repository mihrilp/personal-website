import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      height={40}
      viewBox="0 0 32 32"
      width={40}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26 32H6a6 6 0 01-6-6V6a6 6 0 016-6h20a6 6 0 016 6v20a6 6 0 01-6 6z"
        fill="#ffe6e2"
      />
      <path
        d="M23.996 24l.004-.001v-5.868c0-2.871-.618-5.082-3.974-5.082-1.613 0-2.696.885-3.138 1.725h-.046v-1.457H13.66v10.682h3.314V18.71c0-1.393.264-2.739 1.989-2.739 1.699 0 1.725 1.589 1.725 2.829V24z"
        fill="#fd907e"
      />
      <g fill="#fc573b">
        <path d="M8.264 13.318h3.317V24H8.264zM9.921 8C8.861 8 8 8.861 8 9.921c0 1.061.861 1.939 1.921 1.939s1.921-.878 1.921-1.939c0-1.06-.861-1.921-1.921-1.921z" />
      </g>
    </svg>
  );
}

export default SvgComponent;
