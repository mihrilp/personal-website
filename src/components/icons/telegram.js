import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      height={40}
      viewBox="0 0 32 32"
      width={40}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26 32H6a6 6 0 01-6-6V6a6 6 0 016-6h20a6 6 0 016 6v20a6 6 0 01-6 6z"
        fill="#fff9dd"
      />
      <path
        d="M14.278 18.121l-.264 3.723c.379 0 .542-.163.739-.358l1.775-1.697 3.679 2.694c.674.376 1.15.178 1.332-.621l2.415-11.314.001-.001c.214-.997-.36-1.387-1.018-1.142L8.743 14.838c-.968.376-.954.916-.165 1.161l3.628 1.129 8.429-5.274c.397-.263.757-.117.461.145z"
        fill="#ffd200"
      />
    </svg>
  );
}

export default SvgComponent;
