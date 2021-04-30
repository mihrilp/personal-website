import * as React from "react";

function SvgJavascript(props) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 440 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40.823 449.4L0 0l439.794.172-40.48 448.885-179.76 50.771L40.824 449.4zm325.386-24.529l34.134-384.905H220.24l1.372 424.528 144.597-39.623zM203.431 96.398h-43.74l-.514 230.36-84.906-23.156.171 52.659 128.989 34.82V96.398z"
        fill="#5B5C63"
      />
      <path
        opacity={0.986}
        d="M74.442 356.261l-.171-52.659s54.202 15.266 84.906 23.156l.514-230.188h43.739v294.51L74.442 356.261z"
        fill="#0f141a"
        fillOpacity={0.922}
      />
      <path
        d="M220.24 39.794h180.103L366.209 424.7 220.24 464.322V39.794zm136.707 320.412l11.835-143.911-87.478 9.777v-76.844l93.31-.343 3.774-52.487-140.824.686 1.887 191.081 85.077-14.58-1.2 42.538-85.764 22.813.858 52.145 118.525-30.875z"
        fill="#5B5C63"
      />
    </svg>
  );
}

export default SvgJavascript;
