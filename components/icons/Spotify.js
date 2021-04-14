import * as React from "react";

function SvgSpotify(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M128 256c70.656 0 128-57.344 128-128S198.656 0 128 0 0 57.344 0 128s57.344 128 128 128zm51.968-67.664c-8.608.016-35.808-30.16-112.208-14.496-2.016.512-4.64 1.344-6.144 1.344-9.76 0-11.632-14.592-1.136-16.832 42.272-9.344 85.472-8.512 122.32 13.52 8.784 5.616 5.056 16.464-2.832 16.464zm13.904-33.856c-1.2-.32-.848.736-6.368-2.176-32.256-19.088-80.352-26.784-123.152-15.168-2.48.672-3.824 1.344-6.144 1.344-11.424 0-14.464-17.184-2-20.688 50.304-14.128 104.256-5.888 141.824 16.464 4.192 2.48 5.84 5.68 5.84 10.16-.048 5.568-4.384 10.064-10 10.064zM48.512 74.64c48.24-14.128 121.264-9.664 166.656 16.832 11.648 6.704 7.056 23.68-5.312 23.68l-.016-.016c-2.688 0-4.336-.672-6.656-2.016-36.736-21.936-102.448-27.2-144.976-15.328-1.856.512-4.192 1.344-6.656 1.344-6.816 0-12.016-5.312-12.016-12.176 0-7.008 4.336-10.976 8.976-12.32z"
        fill="#FC573B"
      />
    </svg>
  );
}

export default SvgSpotify;
