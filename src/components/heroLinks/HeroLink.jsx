import React from "react";
import { Link } from "react-router-dom";

const heroLink = ({ heroLink }) => {
  return (
    <Link to={heroLink.link}>
      <div className="  text-white px-10 2xl:h-[500px]  h-[80px] md:h-[300px] flex md:flex-col md:pt-2 bg-opacity-80 bg-gray-700	md:min-w-[200px] 2xl:min-w-[350px] m-6 mx-0 sm:mx-6">
        <div className=" h-full md:h-[150px] 2xl:h-[400px]   w-[80px]  md:w-[150px] 2xl:w-[250px] flex justify-center items-center  mx-auto">
          <img
            className="w-full   mx-auto"
            src={heroLink.image}
            alt={heroLink.title}
          />
        </div>
        <div className="w-full flex flex-col justify-center xl:mb-2  ">
          <h1 className=" font-bold md:pt-2 text-center text-xl md:text-4xl mx-auto 2xl:mb-4  ">
            {heroLink.title}
          </h1>
          <p className="text-center text-xs md:text-xl  ">
            {heroLink.description}
          </p>
          <button
            type="button"
            className=" hidden text-sm  md:inline text-white w-[80%] mt-2 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mb-2 "
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
