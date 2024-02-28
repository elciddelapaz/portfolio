import React from "react";
const age = () => {
  const currentDate = new Date();
  let age = currentDate.getFullYear() - 2000;
  const birthdate = new Date("08-31-2000");
  let monthDiff = currentDate.getMonth() - birthdate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthdate.getDate())
  ) {
    age--;
  }
  return age;
};
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
              I am currently {age()} years old residing in Philippines. I am a
              BSIT graduate that is aspiring to be a web developer. I am
              passionate about learning things that is related to programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
