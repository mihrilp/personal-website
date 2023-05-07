import React from "react";

function Title({ text }: { text: string }) {
  return (
    <h2 className="text-2xl font-semibold font-roboto group-hover:text-orange mb-5">
      {text}
    </h2>
  );
}

export default Title;
