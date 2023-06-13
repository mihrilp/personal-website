import React from "react";

function Title({ text }: { text: string }) {
  return (
    <h2 className="text-xl font-semibold font-mono group-hover:text-purple mb-5">
      {text}
    </h2>
  );
}

export default Title;
