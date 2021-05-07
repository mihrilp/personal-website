import * as React from "react";

function SvgPython(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={30}
      height={30}
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={-133.268}
          y1={-202.91}
          x2={-133.198}
          y2={-202.84}
          gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#387eb8" />
          <stop offset={1} stopColor="#366994" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={-133.575}
          y1={-203.203}
          x2={-133.495}
          y2={-203.133}
          gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ffe052" />
          <stop offset={1} stopColor="#ffc331" />
        </linearGradient>
      </defs>
      <title>{"file_type_python"}</title>
      <path
        d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712zm-3.732 2.137a1.214 1.214 0 11-1.183 1.244v-.02a1.214 1.214 0 011.214-1.214z"
        fill="url(#prefix__a)"
      />
      <path
        d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04zm3.732-2.147A1.214 1.214 0 1121 26.519v.03a1.214 1.214 0 01-1.214 1.214h.03z"
        fill="url(#prefix__b)"
      />
    </svg>
  );
}

export default SvgPython;
