import React from "react";
import * as Icons from "./icons";

function Connect() {
  return (
    <div className="flex items-center justify-between my-16 w-1/4">
      <a href="https://github.com/mihrilp" target="blank">
        <Icons.Github height={30} color="#5B5C63" />
      </a>
      <a href="https://www.linkedin.com/in/mihribanalp/" target="blank">
        <Icons.Linkedin height={30} />
      </a>
      <a href="https://twitter.com/mihriinspace" target="blank">
        <Icons.Twitter height={30} />
      </a>
      <a href="https://dev.to/mihrilp" target="blank">
        <Icons.Devto height={30} />
      </a>
      <a
        href="https://open.spotify.com/user/cl13omk222r2v8e3l70oxn6q8"
        target="blank"
      >
        <Icons.Spotify height={30} />
      </a>
    </div>
  );
}

export default Connect;
