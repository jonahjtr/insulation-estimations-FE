import { Link } from "react-router-dom";
import heroPic from "../assets/images/HDplant.jpg";
import HeroLinks from "../components/heroLinks/HeroLinks";
import NavBar from "../components/Nav/NavBar";
import { heroLinkList } from "../assets/lists";
const Home = () => {
  return (
    <div className="w-[calc(100dvw)] h-[calc(100dvh)] md:h-screen bg-gray-500    overflow-y-hidden	">
      <NavBar />
      <div
        className=" w-screen  md:overflow-hidden bg-cover w-full max-w-[3000px] h-full max-h-screen flex justify-center md:items-center	"
        style={{ backgroundImage: `url(${heroPic})` }}
      >
        <div className="h-fit w-full sm:w-[80vw] my-auto py-10 overflow-y-auto flex justify-center items-center  backdrop-blur-xl  sm:min-h-[70vh]  max-w-[1400px] md:max-h-[1000px]">
          <HeroLinks heroLinkList={heroLinkList} />
        </div>
      </div>
    </div>
  );
};

export default Home;
