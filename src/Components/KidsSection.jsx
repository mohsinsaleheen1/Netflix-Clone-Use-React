import React from "react";
import imgk from "../Images/Kids.png";
function KidsSection() {
  return (
    <div className="bg-black text-white">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          {/* Content section */}
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Create profiles for kids
            </h1>
            <p className="text-lg sm:text-2xl py-5 font-normal text:center md:text-justify">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
          {/* Photo section */}
          <div className="flex justify-center">
            <img src={imgk} className="w-[500px] h-[400px]" />
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-500"></div>
    </div>
  );
}

export default KidsSection;
