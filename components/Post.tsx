import React from "react";
import { Clap, Time } from "./icons";

type Props = {
  title: string;
  date: string;
  description: string;
  reactionsCount: number;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function Post({ title, date, description, reactionsCount }: Props) {
  return (
    <a className="group flex-1 flex flex-col justify-between cursor-pointer py-7 first-of-type:pt-0">
      <h2 className="text-xl font-semibold font-roboto group-hover:text-purple mb-3">
        {title}
      </h2>
      <div className="flex flex-row items-center space-x-6 mb-2">
        <div className="flex flex-row items-center space-x-1">
          <Time height={16} />
          <p className="text-gray">{date}</p>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <Clap height={20} />
          <p className="text-gray">{reactionsCount} Reactions</p>
        </div>
      </div>
      <p className="text-justify text-m text-lightgray leading-6">
        {description}
      </p>
    </a>
  );
}

export default Post;
