import React from "react";
import { ExternalLink } from "./icons";
import { Github } from "./icons/social";
import Title from "./Title";

type Props = {
  name: string;
  description: string;
  code?: string;
  production?: string;
};

function Project({ name, description, code, production }: Props) {
  return (
    <div className="border border-gray border-opacity-80 flex flex-col justify-between rounded-md p-5">
      <div className="flex flex-col justify-center items-center text-center">
        <Title text={name} />
        <p className="text-justify text-sm text-lightgray leading-6">
          {description}
        </p>
      </div>
      <div className="flex flex-row justify-center w-full space-x-3 mt-4">
        <a
          className="text-lightgray hover:text-white"
          href={code}
          target="_blank"
          aria-label="go to github repo"
        >
          <Github height={20} />
        </a>
        <a
          className="text-lightgray hover:text-white"
          href={production}
          target="_blank"
          aria-label="go to production"
        >
          <ExternalLink height={20} />
        </a>
      </div>
    </div>
  );
}

export default Project;
