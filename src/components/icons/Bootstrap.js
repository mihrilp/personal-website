import * as React from "react";

function SvgBootstrap(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={35}
      height={35}
      {...props}
    >
      <path
        fill="#5b5c63"
        d="M42 37a5 5 0 01-5 5H11a5 5 0 01-5-5V11a5 5 0 015-5h26a5 5 0 015 5v26z"
      />
      <path
        fill="#0f141a"
        d="M33.03 25.6c-.65-.9-1.59-1.52-2.8-1.85 0 0 1.02-.37 1.94-1.75.55-.88.83-1.94.83-3.18 0-2.15-.78-3.8-2.34-4.93C29.1 12.76 27.34 12 24.35 12H15v24h10.43c2.83-.02 4.96-.63 6.41-1.8 1.44-1.19 2.16-2.95 2.16-5.3 0-1.3-.32-2.4-.97-3.3zM21 16h4.25c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75H21V16zm5 16h-5v-6h5c1.66 0 3 1.34 3 3s-1.34 3-3 3z"
      />
    </svg>
  );
}

export default SvgBootstrap;
