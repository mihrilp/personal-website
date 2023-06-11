import * as React from "react";
import { SVGProps } from "react";

const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m16 8-8 8m0-8 8 8"
      stroke="#5b5c63"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCross;
