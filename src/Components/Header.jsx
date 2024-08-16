import React from "react";
import bgimg from "../Images/HeaderBanner.jpg";
import logo from "../Images/logo.png";
const BannerImage = {
  backgroundImage: `url(${bgimg})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
function Header() {
  return (
    <div style={BannerImage} className="text-white">
      <div className="bg-[rgba(0,0,0,0.5)]">
        <div className="container ">
          {/* Navbar Section */}
          <div className="flex justify-between items-center">
            <img src={logo} className="w-[220px] h-[100px]" />
            <div>
              <button className="text-sm bg-red-500 hover:bg-red-600 duration-300 text-white px-3 py-2 w-[80px] rounded-md font-medium">
                Sign In
              </button>
            </div>
          </div>
          {/* Content Section */}
          <div className="flex flex-col items-center justify-center text-center py-[150px]">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                Unlimited movies, TV shows, and more
              </h1>
              <p className="text-lg sm:text-2xl py-5 font-semibold">
                Watch anywhere. Cancel anytime.
              </p>
              <p className="text-lg sm:text-xl font-semibold">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:justify-center gap-4 py-4 mt-5 ">
              <input
                type="text"
                placeholder="Email address"
                className="px-[10px] py-[17px] w-[370px] bg-black/65 border border-white rounded-md"
              />
              <div>
                <button className="hover:bg-red-700 bg-red-600 text-xl duration-300 text-white px-4 py-4 w-[200px] rounded-md font-medium">
                  Get Started &#129122;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-500"></div>
    </div>
  );
}

export default Header;
