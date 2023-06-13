import React from "react";
import { Click } from "./icons";

function SeeMoreButton({ link }: { link: string }) {
  return (
    <a className="flex flex-row items-center" href={link} target="blank">
      <p className="font-mono text-gray text-lg mr-1">See More</p>
      <Click width={35} height={50} />
    </a>
  );
}

export default SeeMoreButton;
