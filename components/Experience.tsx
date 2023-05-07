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
      <div className="relative">
        <div className="absolute w-2 h-2 rounded-full top-1/2 transform -translate-y-1/2 border border-orange"></div>
        <p className="text-lg text-orange mb-4 ml-4">
          {title} - {company}
        </p>
      </div>
      <ul className="ml-1 flex flex-row">
        {positions.map((position, index) => (
          <li key={index} className="flex flex-row items-start">
            <div className="flex flex-col items-center mx-3">
              <time className="mb-1 text-white">{position.time}</time>
              <p className="text-sm text-lightgray">({position.jobType})</p>
            </div>
            {index !== positions.length - 1 && (
              <hr className="my-4 border-gray-400 w-16" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
