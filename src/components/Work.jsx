import React from "react";
import Purchasing from "../assets/MyWorkPurchasing.png";
import AUPay from "../assets/AUPay.png";
import Telemed from "../assets/telemed.jpeg";
const Work = () => {
  return (
    // <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
    //   <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
    //     <div className="pb-8">
    //       <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
    //         Work
    //       </p>
    //     </div>
    //     {/* Container */}
    //     <div className="grid grid-cols-6 gap-4 sm:grid-cols-2 md:grid-cols-2 gap-6">
    //       {/* Grid Item */}
    //       <div className="col-start-1 col-end-4 group container rounded-md flex justify-center items-center mx-auto">
    //         <div className="cotainer mx-auto">
    //           <img classname="object-fill" src={Purchasing} />
    //           <p className="text-3xl font-bold text-center">
    //             Purchasing System - Frontend
    //           </p>
    //         </div>
    //         <div className="container mx-auto">
    //           <img classname="object-fill" src={Telemed} />
    //           <p className="text-3xl font-bold text-center">
    //             Telemedicine Web Application - Full Stack
    //           </p>
    //         </div>
    //       </div>
    //       <div className="col-start-1 col-end-2 group container rounded-md flex justify-center items-center mx-auto"></div>
    //     </div>
    //   </div>
    // </div>
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid Item */}
          <div className="group container rounded-md flex justify-center items-center mx-auto">
            <img src={Purchasing} className="w-full h-full" />
          </div>
          <div className="group container rounded-md flex items-center mx-auto">
            <div>
              <h1 className="text-2xl font-bold">Purchasing System</h1>
              <p>A purchasing system made with Angular and MongoDB.</p>
              <a
                href="https://daps-ps.netlify.app/"
                class="font-medium hover:underline"
              >
                View Demo
              </a>
            </div>
          </div>
          <div className="group container rounded-md flex items-center mx-auto">
            <img src={Telemed} className="w-full h-full" />
          </div>
          <div className="group container rounded-md flex items-center mx-auto">
            <div>
              <h1 className="text-2xl font-bold">Telemedicine</h1>
              <p>
                A telemedicine web application made using ReactJS (MUI),
                MongoDB, Express, and NodeJS.
              </p>
              <a
                href="https://telemed.adventistmed.org/"
                class="font-medium hover:underline"
              >
                View Demo
              </a>
            </div>
          </div>
          <div className="group container rounded-md flex items-center mx-auto">
            <img src={AUPay} className="w-full h-full" />
          </div>
          <div className="group container rounded-md flex justify-center items-center mx-auto">
            <div>
              <h1 className="text-2xl font-bold">RFID Payment System</h1>
              <p>
                A desktop application payment system created using Python 3.10,
                MongoDB, and QT5.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
