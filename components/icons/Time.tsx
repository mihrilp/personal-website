import * as React from "react";
import { SVGProps } from "react";

const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27 52c13.807 0 25-11.193 25-25S40.807 2 27 2 2 13.193 2 27s11.193 25 25 25Z"
      stroke="#5B5C63"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27 9.5V27l10 10"
      stroke="#5B5C63"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgTime;
