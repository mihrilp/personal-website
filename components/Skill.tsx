import React from "react";

type Props = {
  name: string;
  icon: React.ReactElement;
};

function Skill({ name, icon }: Props) {
  return (
    <div className="flex w-1/6 mb-4">
      {icon}
      <p className="ml-2 text-sm">{name}</p>
    </div>
  );
}

export default Skill;
