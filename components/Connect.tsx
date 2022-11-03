import React from "react";
import * as Icons from "./icons";

function Connect() {
  return (
    <div className="flex items-center justify-between my-10 w-1/4">
      <a href="https://github.com/mihrilp" target="blank">
        <Icons.Github />
      </a>
      <a href="https://www.linkedin.com/in/mihribanalp/" target="blank">
        <Icons.Linkedin />
      </a>
      <a href="https://twitter.com/mihriinspace" target="blank">
        <Icons.Twitter />
      </a>
      <a href="https://dev.to/mihrilp" target="blank">
        <Icons.Devto />
      </a>
      <a
        href="https://open.spotify.com/user/cl13omk222r2v8e3l70oxn6q8"
        target="blank"
      >
        <Icons.Spotify />
      </a>
    </div>
  );
}

export default Connect;
