import React from "react";
import Time from "./icons/Time";

type Props = {
  title: string;
  date: string;
  content: string;
};

function Post({ title, date, content }: Props) {
  return (
    <a className="group flex-1 flex flex-col justify-between cursor-pointer py-7">
      <h2 className="text-2xl font-semibold font-roboto group-hover:text-blue mb-3">
        {title}
      </h2>
      <div className="flex flex-row">
        <Time />
        <p>{date}</p>
      </div>
      <p className="text-justify text-m text-light leading-6">{content}</p>
    </a>
  );
}

export default Post;
