import * as React from "react";

function SvgCircle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={10}
      height={10}
      fill="#26c6da"
      {...props}
    >
      <path d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0z" />
    </svg>
  );
}

export default SvgCircle;
