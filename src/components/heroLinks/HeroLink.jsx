import React from "react";
import { Link } from "react-router-dom";

const heroLink = ({ heroLink }) => {
  return (
    <Link to={heroLink.link}>
      <div className="  h-[80px] sm:h-[300px] flex sm:flex-col sm:pt-2 bg-slate-400 bg-opacity-50	 sm:w-[200px] m-6">
        <div className=" h-full w-[80px] sm:w-[150px] flex justify-center items-center sm:h-[150px] mx-auto">
          <img
            className="w-full   mx-auto"
            src={heroLink.image}
            alt={heroLink.title}
          />
        </div>
        <div className="w-full flex flex-col justify-center">
          <h1 className=" font-bold sm:pt-2 text-center text-xl mx-auto ">
            {heroLink.title}
          </h1>
          <p className="text-center text-xs sm:text-md  ">
            {heroLink.description}
          </p>
          <button
            type="button"
            class=" hidden sm:inline text-white w-[80%] mt-2 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {" "}
            Calculate
          </button>
        </div>
      </div>
    </Link>
  );
};

export default heroLink;
