import React from "react";
import HeroLink from "./HeroLink";
import { heroLinkList } from "../../assets/lists";

const Links = () => {
  return (
    <div className=" flex flex-col md:flex-row md:flex-wrap md:justify-center md:w-[90%] h-[80%]">
      {heroLinkList.map((heroLink, index) => (
        <HeroLink heroLink={heroLink} key={index} />
      ))}
    </div>
  );
};

export default Links;
