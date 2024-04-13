import { Link } from "react-router-dom";
import { mainBackground } from "../assets/images";
import HeroLinks from "../components/heroLinks/HeroLinks";
import NavBar from "../components/Nav/NavBar";
import { estimateEverythingList } from "../assets/lists";
const EstimateEverythingLanding = () => {
  return (
    <div className="w-[calc(100dvw)] h-[calc(100dvh)] md:h-screen bg-gray-500    overflow-y-hidden	">
      <NavBar />
      <div
        className=" w-screen  md:overflow-hidden bg-cover w-full max-w-[3000px] h-full max-h-screen flex justify-center md:items-center	"
        style={{ backgroundImage: `url(${mainBackground})` }}
      >
        <div className="h-fit w-full sm:w-[80vw] my-auto py-10 overflow-y-auto flex justify-center items-center  backdrop-blur-xl  sm:min-h-[70vh]  max-w-[1400px] md:max-h-[1000px]">
          <HeroLinks heroLinkList={estimateEverythingList} />
        </div>
      </div>
    </div>
  );
};

export default EstimateEverythingLanding;
