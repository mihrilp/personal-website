import React from "react";
import { ExternalLink } from "./icons";
import { Github } from "./icons/social";
import Title from "./Title";

type Props = {
  name: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
};

function Project({ name, description, githubLink, liveLink }: Props) {
  return (
    <div className="group border border-gray border-opacity-80 flex-1 flex flex-col justify-between rounded-md p-6 h-1/3 ">
      <div className="flex flex-col justify-cente items-center space-y-4">
        <Title text={name} />
        <p className="text-justify text-sm text-lightgray leading-6">
          {description}
        </p>
      </div>
      <div className="flex flex-row justify-center w-full mt-4 space-x-3">
        <a className="text-lightgray hover:text-white" href={githubLink}>
          <Github height={20} />
        </a>
        <a className="text-lightgray  hover:text-white" href={liveLink}>
          <ExternalLink height={20} />
        </a>
      </div>
    </div>
  );
}

export default Project;
