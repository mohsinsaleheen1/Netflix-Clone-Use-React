import React from "react";
import img1 from "../Images/mobile.jpg";
import img2 from "../Images/Ditem.png";
import img3 from "../Images/icon.gif";
function DownloadSection() {
  return (
    <div className="bg-black text-white">
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 justify-center items-center">
          {/* Photo section */}
          <div className="flex order-2 md:order-1 justify-center pb-10">
            <div className="relative">
              <img src={img1} className="w-[500px] h-[400px]" />
              <div className="flex gap-4  absolute top-0 bg-black w-[400px] border-2 border-gray-400 p-3 items-center justify-around rounded-xl mx-auto transform translate-y-[255px] translate-x-[40px]">
                <img src={img2} className="w-[70px] h-[80px]" />
                <div>
                  <p>Stranger Things</p>
                  <span>Downloading...</span>
                </div>
                <img src={img3} className="w-[50px] h-[50px]" />
              </div>
            </div>
          </div>
          {/* Content section */}
          <div className="flex flex-col text-center md:text-left order-1 md:order-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Download your shows to watch offline
            </h1>
            <p className="text-lg sm:text-2xl py-5 font-normal text:center md:text-justify">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-500"></div>
    </div>
  );
}

export default DownloadSection;
