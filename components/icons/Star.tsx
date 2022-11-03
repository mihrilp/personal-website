import * as React from "react";
import { SVGProps } from "react";

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 113 108"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#star_svg__a)">
      <path
        d="m56.66 84.234-.233-.122-.233.123-28.33 14.894a3.231 3.231 0 0 1-4.689-3.407l5.41-31.547.045-.259-.188-.183L5.522 41.39a3.232 3.232 0 0 1 1.791-5.512l31.675-4.602.26-.038.116-.235L53.53 2.3a3.23 3.23 0 0 1 5.794 0L73.49 31.004l.116.235.26.038 31.675 4.602a3.231 3.231 0 0 1 2.608 2.2 3.228 3.228 0 0 1-.817 3.312l-22.92 22.342-.189.183.045.26 5.41 31.546a3.232 3.232 0 0 1-1.285 3.16v.001a3.228 3.228 0 0 1-3.403.246L56.66 84.234ZM15.724 41.188l-1.002.146.725.707 18.91 18.434h.001a3.23 3.23 0 0 1 .929 2.86l-4.464 26.028-.171.999.896-.472L54.923 77.6a3.233 3.233 0 0 1 3.008 0l23.374 12.29.897.47-.171-.998-4.465-26.028a3.23 3.23 0 0 1 .93-2.86l-.35-.357.35.358L97.407 42.04l.726-.707-1.003-.146-26.134-3.797a3.232 3.232 0 0 1-2.433-1.768L56.876 11.941l-.448-.908-.449.908-11.687 23.682a3.232 3.232 0 0 1-2.433 1.768l-26.135 3.797Z"
        fill="#26C6DA"
        stroke="#000"
      />
    </g>
    <defs>
      <filter
        id="star_svg__a"
        x={0.046}
        y={0}
        width={112.762}
        height={108}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_433_7" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_433_7"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgStar;
