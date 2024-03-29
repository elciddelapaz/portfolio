import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Mongo from "../assets/mongo.png";
import Python from "../assets/python.png";
import Tailwind from "../assets/tailwind.png";
import Vue from "../assets/vue.png";
import Laravel from "../assets/laravel.png";
import PHP from "../assets/php.png";
import MySQL from "../assets/mysql.png";
import Git from "../assets/git.png";

export default function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-black text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-rose-600 ">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-100">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={PHP} alt="PHP icon" />
            <p className="my-4">PHP</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={Laravel} alt="Laravel icon" />
            <p className="my-4">Laravel</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={Vue} alt="Vue icon" />
            <p className="my-4">Vue</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={Git} alt="Git icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={MySQL} alt="MySQL icon" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#4c0519] hover:scale-110 duration-75">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}
