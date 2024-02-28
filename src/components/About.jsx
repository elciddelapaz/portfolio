import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-black flex justify-center items-center text-rose-50"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-rose-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Elcid!</p>
          </div>
          <div>
            <p className="text-justify">
              I am currently 22 years old residing in Philippines. I am a BSIT
              graduate that is aspiring to be a web developer. I am passionate
              about learning things that is related to programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
