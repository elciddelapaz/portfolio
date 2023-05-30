import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
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
            <p>
              I am currently 22 years old residing in Philippines. I am a BSIT
              fresh graduate that is aspiring to be a web developer. I am
              passionate about learning things that is related to programming
              especially back end side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
