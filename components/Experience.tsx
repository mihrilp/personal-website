import React from "react";

type Props = {
  title: string;
  company: string;
  positions: Array<{
    time: string;
    jobType: string;
  }>;
};

function Experience({ title, company, positions }: Props) {
  return (
    <div className="mb-7">
      <div className="relative mb-2">
        <div className="absolute w-2 h-2 rounded-full top-1/2 transform -translate-y-1/2 border border-purple"></div>
        <p className="text-base ml-4 font-light">
          {title} - {company}
        </p>
      </div>
      <ul className="ml-1 flex flex-row">
        {positions.map((position, index) => (
          <li key={index} className="flex flex-row items-start font-light">
            <div className="flex flex-col items-center mx-3">
              <time className="text-sm mb-1 text-white">{position.time}</time>
              <p className="text-sm text-lightgray">({position.jobType})</p>
            </div>
            {index !== positions.length - 1 && (
              <hr className="my-4 border-gray-400 w-4" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
