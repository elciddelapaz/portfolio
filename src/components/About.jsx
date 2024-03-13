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
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-rose-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid gap-8 px-4">
          <div>
            <p className="text-lg text-justify font-medium mb-4">
              Hi there! I'm a 23-year-old web developer with a keen interest in
              crafting seamless digital experiences. I hold a bachelor's degree
              in Information Technology from Adventist University of the
              Philippines, graduating in May 2023. My passion lies in creating
              minimalist designs that prioritize simplicity and functionality,
              as showcased in my portfolio. My ultimate goal is to excel as a
              full-stack developer, and I'm dedicated to continuously refining
              my skills to achieve that ambition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
