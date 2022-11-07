import React from "react";
import { Github, ExternalLink } from "./icons";

type Props = {
  name: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
};

function Project({ name, description, githubLink, liveLink }: Props) {
  return (
    <a
      className="group bg-gray flex-1 flex flex-col justify-between rounded p-4 cursor-pointer transition-all duration-300 hover:-translate-y-2"
      href={liveLink}
    >
      <div className="flex flex-col justify-cente items-center space-y-4">
        <h2 className="text-xl font-semibold font-roboto group-hover:text-blue ">
          {name}
        </h2>
        <p className="text-justify text-sm text-light leading-6">
          {description}
        </p>
      </div>
      <div className="flex flex-row justify-center w-full mt-4 space-x-3">
        <a href={githubLink}>
          <Github height={20} color="#f8f9fa" />
        </a>
        <a href={liveLink}>
          <ExternalLink height={20} color="#f8f9fa" />
        </a>
      </div>
    </a>
  );
}

export default Project;
