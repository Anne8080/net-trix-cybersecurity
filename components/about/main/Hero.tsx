import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-cover h-screen w-full bg-[url('/aboutbg.jpg')] z-[5] border-b-[#5c3c63] border-b-4 pt-56 px-20">
      <div className="text-right text-gray-500 h-[80px]">
        <h1 className="text-transparent bg-clip-text right-2 bg-gradient-to-r from-purple-500 to-cyan-500 font-bold border-r-[20px] border-r-[#5c3c63] text-6xl h-[80px]">
          Net-Trix CyberSecurity
        </h1>
      </div>
      
    </div>
  );
};

export default Hero;
