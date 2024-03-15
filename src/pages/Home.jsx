import { Link } from "react-router-dom";
import heroPic from "../assets/images/HDplant.png";
import HeroLinks from "../components/heroLinks/HeroLinks";
import NavBar from "../components/Nav/NavBar";
const Home = () => {
  return (
    <div className="w-[calc(100dvw)] h-[calc(100dvh)] md:h-screen bg-gray-500  overflow-y-hidden	">
      <NavBar />
      <div
        className=" w-screen  md:overflow-hidden bg-cover w-full max-w-[3000px] h-full max-h-screen flex justify-center md:items-center	"
        style={{ backgroundImage: `url(${heroPic})` }}
      >
        <div className="h-fit my-auto py-10 overflow-y-auto flex justify-center items-center  backdrop-blur-xl w-[80vw] sm:min-h-[70vh] max-w-[2000px] md:max-h-[1000px]">
          <HeroLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
