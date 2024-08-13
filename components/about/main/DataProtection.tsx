import React from "react";

const DataProtection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start px-10">
      <div className="pt-72 md:pl-20 md:pt-32 md:w-[70%]">
        <div className="border-l-2 pl-2 md:max-w-[450px] border-r-gray-600">
          <h1 className="text-3xl text-white">
            DATA PROTECTION AND CYBERSECURITY
          </h1>
          <p className="text-xl text-gray-400 my-5">
            In today's digital landscape, ensuring the security and privacy of
            data is crucial for any organization. At Net-Trix Solutions Limited,
            we are committed to providing robust data protection and
            cybersecurity services to safeguard your business's most valuable
            assets.
          </p>
        </div>
        <div
          className="pt-52 pb-5 pr-5 md:text-right flex flex-col items-end"
          id="services"
        >
          <h1 className="text-6xl font-thin mb-6">01.</h1>
          <h1 className="text-5xl text-white">Our Data Protection Services</h1>
          <p className="text-xl text-gray-400 my-5 md:max-w-[550px]">
            Our comprehensive data protection services are designed to help you
            secure your data from unauthorized access, breaches, and other cyber
            threats. We offer:
          </p>
        </div>
      </div>
      <div className="w-[30%] hidden md:block">
        <div className="w-[100px] h-screen pr-20 bg-gradient-to-b from-purple-500 to-cyan-500 mt-44"></div>
      </div>
    </div>
  );
};

export default DataProtection;
