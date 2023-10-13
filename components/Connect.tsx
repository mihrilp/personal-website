import React from "react";
import * as Icons from "./icons/social";

function Connect() {
  return (
    <div className="flex items-center gap-3">
      <a
        className="text-lightgray hover:text-white"
        href="https://github.com/mihrilp"
        target="blank"
        aria-label="go to github profile"
      >
        <Icons.Github height={20} />
      </a>
      <a
        className="text-lightgray hover:text-white"
        href="https://www.linkedin.com/in/mihribanalp/"
        target="blank"
        aria-label="go to linkedin profile"
      >
        <Icons.Linkedin height={20} />
      </a>
      <a
        className="text-lightgray hover:text-white"
        href="https://dev.to/mihrilp"
        target="blank"
        aria-label="go to dev.to profile"
      >
        <Icons.Devto height={20} />
      </a>
      <a
        className="text-lightgray hover:text-white"
        href="https://twitter.com/mihriinspace"
        target="blank"
        aria-label="go to twitter profile"
      >
        <Icons.Twitter height={20} />
      </a>
      <a
        className="text-lightgray hover:text-white"
        href="https://open.spotify.com/user/cl13omk222r2v8e3l70oxn6q8"
        target="blank"
        aria-label="go to spotify profile"
      >
        <Icons.Spotify height={20} />
      </a>
    </div>
  );
}

export default Connect;
