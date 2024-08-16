import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-black text-zinc-400">
      <div className="container pb-20 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <ul className="flex flex-col gap-4">
            <li className="fontbold text-lg underline">
              <a href="#">Questions?Contact Us</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">FAQ</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Investor Relation</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Privacy</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Speed Test</a>
            </li>
            <li>
              <button className="w-[140px] bg-zinc-800 border border-white flex rounded-md justify-between items-center px-2 py-[8px]">
                <span className="text-white">English</span>
                <IoMdArrowDropdown className="text-white" />
              </button>
            </li>
            <li className="fontbold text-lg">Netflix Pakistan</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="fontbold text-lg underline">
              <br />
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Help Center</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Jobs</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Cookie Preferences</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Legal Notices</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="fontbold text-lg underline">
              <br />
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Account</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Ways to Watch</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Corporate Information</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Only on Netflix</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="fontbold text-lg underline">
              <br />
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Media Center</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Terms of Use</a>
            </li>
            <li className="fontbold text-lg underline">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
