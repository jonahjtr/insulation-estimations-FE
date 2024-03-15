import React from "react";
import { Link } from "react-router-dom";

const heroLink = ({ heroLink }) => {
  return (
    <Link to={heroLink.link}>
      <div className="  text-white h-[80px] md:h-[300px] flex md:flex-col md:pt-2 bg-opacity-80 bg-gray-700	 md:w-[200px] m-6">
        <div className=" h-full w-[80px] md:w-[150px] flex justify-center items-center md:h-[150px] mx-auto">
          <img
            className="w-full   mx-auto"
            src={heroLink.image}
            alt={heroLink.title}
          />
        </div>
        <div className="w-full flex flex-col justify-center">
          <h1 className=" font-bold md:pt-2 text-center text-xl mx-auto ">
            {heroLink.title}
          </h1>
          <p className="text-center text-xs md:text-md  ">
            {heroLink.description}
          </p>
          <button
            type="button"
            className=" hidden md:inline text-white w-[80%] mt-2 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
