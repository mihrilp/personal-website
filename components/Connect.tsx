import React from "react";
import * as Icons from "./icons";

function Connect() {
  return (
    <div className="flex items-center justify-between mt-16 w-1/5">
      <a
        className="text-lightgray hover:text-white"
        href="https://github.com/mihrilp"
        target="blank"
      >
        <Icons.Github height={25} />
      </a>
      <a
        className="text-lightgray hover:text-white"
        href="https://www.linkedin.com/in/mihribanalp/"
        target="blank"
      >
        <Icons.Linkedin height={25} />
      </a>
      <a
        className="text-lightgray hover:text-white"
        href="https://dev.to/mihrilp"
        target="blank"
      >
        <Icons.Devto height={25} />
      </a>
      <a
        className="text-lightgray hover:text-white"
        href="https://twitter.com/mihriinspace"
        target="blank"
      >
        <Icons.Twitter height={25} />
      </a>
      <a
        className="text-lightgray hover:text-white"
        href="https://open.spotify.com/user/cl13omk222r2v8e3l70oxn6q8"
        target="blank"
      >
        <Icons.Spotify height={25} />
      </a>
    </div>
  );
}

export default Connect;
