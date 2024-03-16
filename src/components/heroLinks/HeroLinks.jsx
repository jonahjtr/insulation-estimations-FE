import React from "react";
import HeroLink from "./HeroLink";

const Links = ({ heroLinkList, title }) => {
  return (
    <div className=" flex flex-col md:w-[90%] h-[80%]">
      {title && (
        <div className="mx-auto w-full text-center  text-5xl mb-10 text-white font-bold">
          {title}
        </div>
      )}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
        {heroLinkList.map((heroLink, index) => (
          <HeroLink heroLink={heroLink} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Links;
