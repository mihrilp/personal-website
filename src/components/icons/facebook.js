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
        d="M18.727 10.657h1.46V8.113A18.714 18.714 0 0018.06 8c-2.106 0-3.548 1.325-3.548 3.759V14h-2.324v2.844h2.324V24l2.849.001v-7.156h2.23l.354-2.844H17.36v-1.959c.001-.822.222-1.385 1.367-1.385z"
        fill="#fc573b"
      />
    </svg>
  );
}

export default SvgComponent;
