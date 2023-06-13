import React from "react";

function Title({ text }: { text: string }) {
  return <h2 className="text-2xl font-semibold font-mono mb-5">{text}</h2>;
}

export default Title;
