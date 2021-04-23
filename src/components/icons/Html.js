import * as React from "react";

function SvgHtml(props) {
  return (
    <svg
      viewBox="-30 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      {...props}
    >
      <path
        d="M0 0l31.8 448.102L226.2 512l194.398-63.898L452.398 0zm0 0"
        fill="#5b5c63"
      />
      <path d="M452.398 0l-31.8 448.102L226.199 512V0zm0 0" fill="#5b5c63" />
      <path
        d="M367.5 136H145.2l5.398 75h211.504l-12.903 181.598-123 41.101-123-41.101L99 332h60l1.2 16.5 66 21.898 66-21.898 5.398-77.5H94.5L80.7 76h291zm0 0"
        fill="#000000"
      />
      <g fill="#000000">
        <path d="M362.102 211l-12.903 181.598-123 41.101v-63.3l66-21.899 5.399-77.5h-71.399v-60zm0 0M371.7 76l-4.2 60H226.2V76zm0 0" />
      </g>
    </svg>
  );
}

export default SvgHtml;
