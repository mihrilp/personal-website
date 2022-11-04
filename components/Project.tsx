import React from "react";
import Image from "next/image";
import { Github, ExternalLink } from "./icons";

type Props = {
  imgPath: string;
  description: string;
  githubLink?: string;
};

function Project({ imgPath, description }: Props) {
  return (
    <div className="bg-gray flex-1 flex flex-col justify-between rounded p-4">
      <div className="flex flex-col justify-center space-y-2">
        <Image
          src={`/images/${imgPath}`}
          alt="project-image"
          width={154}
          height={58}
        />
        <p className="text-justify text-primary">{description}</p>
      </div>
      <div className="flex flex-row justify-center w-full mt-2 space-x-2">
        <Github height={20} color="#ebebec" />
        <ExternalLink height={20} color="#ebebec" />
      </div>
    </div>
  );
}

export default Project;
