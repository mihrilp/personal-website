import * as React from "react";

function SvgStar(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={20}
      height={20}
      fill="#26c6da"
      {...props}
    >
      <path
        d="M16 2l4 10h10l-8 7 3 11-9-7-9 7 3-11-8-7h10z"
        fill="none"
        stroke="#26c6da"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgStar;
