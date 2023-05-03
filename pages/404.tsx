import Link from "next/link";
import React from "react";
import BlackHole from "../components/icons/BlackHole";

function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-gray">
      <h1 className="font-roboto font-bold text-blue text-5xl uppercase mb-4">
        404: Page not found
      </h1>
      <p className="text-xl mb-4 text-white">
        This page may have been swallowed by a black hole.
      </p>
      <p className="text-xl mb-7 text-white">
        But don&apos;t worry you are safe!{" "}
        <Link href="/">
          <a className="text-yellow">Go back home</a>
        </Link>{" "}
      </p>
      <BlackHole width={250} />
    </div>
  );
}

export default Custom404;
