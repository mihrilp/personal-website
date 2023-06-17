import React from "react";
import { Clap, Time } from "./icons";
import Title from "./Title";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  date: string;
  description: string;
  reactionsCount: number;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function Post({ id, title, date, description, reactionsCount }: Props) {
  return (
    <Link
      className="group flex-1 flex flex-col justify-between cursor-pointer py-7 first-of-type:pt-0"
      href={`/blog/${id}`}
      aria-label="go to post"
    >
      <Title text={title} />
      <div className="flex flex-row items-center space-x-6 mb-4">
        <div className="flex flex-row items-center space-x-1">
          <Time height={16} />
          <p className="text-gray">{date}</p>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <Clap height={20} />
          <p className="text-gray">{reactionsCount} Reactions</p>
        </div>
      </div>
      <p className="text-justify text-lightgray leading-6">{description}</p>
    </Link>
  );
}

export default Post;
