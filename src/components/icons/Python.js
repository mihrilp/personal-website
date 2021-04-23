import * as React from "react";

function SvgPython(props) {
  return (
    <svg
      width={35}
      height={35}
      viewBox="0 0 256 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M126.771 0C61.939 0 65.988 28.115 65.988 28.115l.072 29.127h61.868v8.746H41.486S0 61.283 0 126.699s36.21 63.097 36.21 63.097h21.61V159.44s-1.164-36.21 35.632-36.21h61.362s34.476.557 34.476-33.32V33.898S194.524 0 126.771 0zM92.657 19.587a11.12 11.12 0 0111.131 11.13 11.12 11.12 0 01-11.13 11.13 11.12 11.12 0 01-11.131-11.13 11.12 11.12 0 0111.13-11.13z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M128.613 254.054c64.832 0 60.783-28.115 60.783-28.115l-.072-29.127h-61.868v-8.746h86.442s41.486 4.705 41.486-60.711-36.21-63.097-36.21-63.097h-21.611v30.356s1.165 36.21-35.631 36.21H100.57s-34.476-.557-34.476 33.319v56.014s-5.234 33.897 62.519 33.897zm34.114-19.587a11.12 11.12 0 01-11.131-11.13 11.12 11.12 0 0111.131-11.131 11.12 11.12 0 0111.13 11.131 11.12 11.12 0 01-11.13 11.13z"
        fill="url(#prefix__paint1_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={24.543}
          y1={22.852}
          x2={151.102}
          y2={148.148}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5B5C63" />
          <stop offset={1} stopColor="#5B5C63" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={102.225}
          y1={103.309}
          x2={238.136}
          y2={231.789}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5B5C63" />
          <stop offset={1} stopColor="#5B5C63" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgPython;
