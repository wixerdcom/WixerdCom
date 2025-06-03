import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logos/LogoMain.webp";
import robo from "../../../Assets/Windroid/sorryWindroid.webp";

const ErrorPage = () => {
  return (
    <div className="bg-base-300 flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-3xl sm:text-5xl font-bold pb-20">404 ERROR!</h1>

      <div className=" relative gap-10">
        
        <div className=" sm:relative">
        <img src={robo} alt="" className="absolute sm:-left-44 sm:top-10 text-white w-48 transform animate-bounce" />
        </div>
        <div className="text-left ml-10 sm:mt-0 mt-60">
          <img src={logo} alt="wixerd" className="w-44" />
          <p className="text-lg font-bold my-6">Apologies, this page is missing </p>
          <p className="text-lg font-bold mb-6">
          We are working our best to fix it!
          </p>
        </div>
      </div>

      <Link
        to="/"
        className="bg-white border border-red-900 px-6 py-2 rounded-2xl shadow hover:bg-gray-200 transition"
      >
        <span className="flex items-center gap-4 text-lg font-bold text-red-900 ">
          <div className="bg-red-900 p-1 rounded-full  ">
            <IoIosArrowBack className="text-white text-3xl" />
          </div>
          Let's go back
        </span>
      </Link>
    </div>
  );
};

export default ErrorPage;
