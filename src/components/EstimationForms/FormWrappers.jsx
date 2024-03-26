import React from "react";

const FormWrappers = ({ title, children, subtext }) => {
  const childCount = React.Children.count(children);

  return (
    <>
      <h2
        className={`text-center text-white text-[2rem] lg:text-[3rem] font-bold ${
          subtext ? "mb-1" : "mb-10"
        }`}
      >
        {title}
      </h2>
      {subtext && (
        <h1 className="text-center text-slate-300 text-[1rem] px-2 sm:text-[1.5rem] mb-14">
          {subtext}
        </h1>
      )}
      <div
        className={`grid ${
          childCount === 1 ? "place-items-center" : "md:grid-cols-2 md:gap-6"
        } mx-4`}
      >
        {children}
      </div>
    </>
  );
};

export default FormWrappers;
