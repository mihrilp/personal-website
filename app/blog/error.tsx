"use client";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center h-2/3">
      <Image src="/astronaut.svg" width={100} height={100} alt="astronaut" />
      <p className="text-3xl font-bold my-5">Houston, We Have a Problem!</p>
      <p className="text-xl mb-2">
        - Our space communication system is experiencing interference.
      </p>
      <div>
        <span className="text-xl mr-2"> Please</span>
        <button className="text-xl text-purple" onClick={() => reset()}>
          Launch Again
        </button>
      </div>
    </div>
  );
}
