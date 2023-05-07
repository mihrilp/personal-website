import * as React from "react";
import { SVGProps } from "react";

const SvgBootstrap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 408"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M56.481 53.32C55.515 25.58 77.128 0 106.342 0h299.353c29.214 0 50.827 25.58 49.861 53.32-.928 26.647.277 61.165 8.964 89.31 8.715 28.232 23.411 46.077 47.48 48.37v26c-24.069 2.293-38.765 20.138-47.48 48.37-8.687 28.145-9.892 62.663-8.964 89.311.966 27.739-20.647 53.319-49.861 53.319H106.342c-29.214 0-50.827-25.58-49.86-53.319.927-26.648-.278-61.166-8.966-89.311C38.802 237.138 24.07 219.293 0 217v-26c24.069-2.293 38.802-20.138 47.516-48.37 8.688-28.145 9.893-62.663 8.965-89.31Z"
      fill="url(#bootstrap_svg__a)"
    />
    <g filter="url(#bootstrap_svg__b)">
      <path
        d="M267.103 312.457c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217h89.202Zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67v-64.814Zm0 161.961v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941h-47.605Z"
        fill="url(#bootstrap_svg__c)"
      />
      <path
        d="M267.103 312.457c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217h89.202Zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67v-64.814Zm0 161.961v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941h-47.605Z"
        stroke="#fff"
      />
    </g>
    <defs>
      <linearGradient
        id="bootstrap_svg__a"
        x1={76.079}
        y1={10.798}
        x2={523.48}
        y2={365.945}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9013FE" />
        <stop offset={1} stopColor="#6610F2" />
      </linearGradient>
      <linearGradient
        id="bootstrap_svg__c"
        x1={193.508}
        y1={109.74}
        x2={293.514}
        y2={278.872}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F1E5FC" />
      </linearGradient>
      <filter
        id="bootstrap_svg__b"
        x={161.401}
        y={82.957}
        width={198}
        height={250}
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
        <feGaussianBlur stdDeviation={8} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_810_7" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_810_7"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgBootstrap;
