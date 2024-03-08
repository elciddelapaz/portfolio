import React from "react";
import { Link } from "react-scroll";
import pdfUrl from "../assets/RESUME.pdf";

export default function Home() {
  return (
    <div name="home" className="w-full h-screen bg-black">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-rose-300 font-semibold pl-2">Hi, I am</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-rose-50 p-2">
          Elcid Dela Paz
        </h1>
        {/* <iframe src={pdfUrl} /> */}
        <h2
          className="text-4xl sm:text-7xl font-bold text-rose-600 bg-gradient-to-l bg-clip-text text-transparent from-rose-50 via-rose-500 to-rose-900
            animate-text p-2"
        >
          Aspiring Web Developer.
        </h2>
        <p className="text-rose-50 py-4 max-w-[700px] p-2">
          I am a BSIT graduate that studied at the Adventist University of the
          Philippines. Aspiring to be a full-stack web developer in the future.
        </p>
        <div className="flex gap-4 text-rose-50">
          <Link to="work" smooth={true} duration={500}>
            <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-rose-600 hover:border-rose-600">
              View Work
            </button>
          </Link>
          <a href={pdfUrl} target="_blank">
            <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-rose-600 hover:border-rose-600">
              View Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
