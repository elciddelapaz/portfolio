import React from "react";
import Purchasing from "../assets/MyWorkPurchasing.png";
import AUPay from "../assets/AUPay.png";
import Telemed from "../assets/telemed.jpeg";
export default function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-rose-50 bg-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-rose-600">
            Work
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Grid Item */}
          <div className="">
            <div className="group container rounded-md flex justify-center items-center mx-auto ">
              <img src={Purchasing} className="w-full h-full" />
            </div>
            <div className="group container rounded-md flex items-center mx-auto">
              <div className="grid gap-2 mt-2 grow">
                <h1 className="text-2xl font-bold">Purchasing System</h1>
                <p>A purchasing system made using Angular and MongoDB. </p>
                <button className="bg-rose-600 hover:bg-rose-400 text-white font-bold py-2 px-4 border-b-4 border-rose-700 hover:border-rose-500 rounded">
                  <a href="https://daps-ps.netlify.app/" target="_blank">
                    View Demo
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="group container rounded-md flex items-center mx-auto">
              <img src={AUPay} className="w-full h-full" />
            </div>
            <div className="group container rounded-md flex justify-center items-center mx-auto">
              <div>
                <div className="grid gap-2 mt-2 grow">
                  <h1 className="text-2xl font-bold">RFID Payment System</h1>
                  <p>
                    A desktop application payment system created using Python
                    3.10, MongoDB, and QT5.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="group container rounded-md flex items-center mx-auto">
              <img src={Telemed} className="w-full h-full" />
            </div>
            <div className="group container rounded-md flex items-center mx-auto">
              <div className="grid gap-2 mt-2 grow">
                <h1 className="text-2xl font-bold">Telemedicine</h1>
                <p>
                  A telemedicine web application made using ReactJS (MUI),
                  MongoDB, Express, and NodeJS.
                </p>
                <button className="bg-rose-600 hover:bg-rose-400 text-white font-bold py-2 px-4 border-b-4 border-rose-700 hover:border-rose-500 rounded">
                  <a href="https://telemed.adventistmed.org/" target="_blank">
                    View Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
