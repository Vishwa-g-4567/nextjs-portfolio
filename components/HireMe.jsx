import React from "react";
import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-0 bottom-4 flex items-center justify-center overflow-hidden md:left-auto md:right-8 md:top-0 md:bottom-auto md:absolute sm:right-0">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light z-0"}
        />
        <Link
          href={"mailto:vishwa.g4567@gmail.com"}
          target="_blank"
          className="flex items-center justify-center font-semibold bg-dark text-light w-20 h-20 z-10 rounded-full shadow-md border border-solid border-dark hover:bg-white hover:text-dark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
