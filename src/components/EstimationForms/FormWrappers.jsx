import React from "react";

const FormWrappers = ({ title, children, subtext }) => {
  return (
    <>
      <h2
        className={`text-center text-white  text-2xl  sm:text-8xl font-bold  ${
          subtext ? "mb-1" : "mb-10"
        }`}
      >
        {title}
      </h2>
      {subtext && (
        <h1 className="text-center text-slate-300	  sm:text-xl  mb-14">
          {subtext}
        </h1>
      )}
      <div className="grid md:grid-cols-2 md:gap-6 mx-4">{children}</div>
    </>
  );
};

export default FormWrappers;
