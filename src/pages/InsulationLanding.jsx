import React from "react";
import NavBar from "../components/Nav/NavBar";
import heroPic from "../assets/images/HDplant.jpg";
import HeroLinks from "../components/heroLinks/HeroLinks";
import { insulationLinkList } from "../assets/lists";

const InsulationLanding = () => {
  return (
    <div className="w-[calc(100dvw)] h-[calc(100dvh)] md:h-screen bg-gray-500 overflow-y-hidden">
      <NavBar />
      <div
        className=" w-screen  md:overflow-hidden bg-cover w-full max-w-[3000px] h-full max-h-screen flex justify-center md:items-center	"
        style={{ backgroundImage: `url(${heroPic})` }}
      >
        <div className="h-fit my-auto py-10 overflow-y-auto flex justify-center items-center  backdrop-blur-xl w-[80vw] sm:min-h-[70vh] max-w-[1000px] md:max-h-[1000px]">
          <HeroLinks
            heroLinkList={insulationLinkList}
            title={"Which  kind of insulation?"}
          />
        </div>
      </div>
    </div>
  );
};

export default InsulationLanding;
