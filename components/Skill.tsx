import React from "react";

type Props = {
  name: string;
  icon: React.ReactElement;
};

function Skill({ name, icon }: Props) {
  return (
    <div className="flex items-center justify-center border border-gray/75 rounded-md p-4">
      <div className="w-6 h-6">{icon}</div>
      <p className="ml-2 text-sm">{name}</p>
    </div>
  );
}

export default Skill;
