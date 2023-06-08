import * as React from "react";
import { SVGProps } from "react";

const SvgExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M48 26.46a3 3 0 0 0-3 3V51a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V18a3 3 0 0 1 3-3h21.54a3 3 0 0 0 0-6H9a9 9 0 0 0-9 9v33a9 9 0 0 0 9 9h33a9 9 0 0 0 9-9V29.46a3 3 0 0 0-3-3Zm11.76-24.6A3 3 0 0 0 58.14.24 3 3 0 0 0 57 0H39a3 3 0 0 0 0 6h10.77l-30.9 30.87a3 3 0 0 0 0 4.26 3 3 0 0 0 4.26 0L54 10.23V21a3 3 0 0 0 6 0V3a3 3 0 0 0-.24-1.14Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgExternalLink;
