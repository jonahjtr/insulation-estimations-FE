import { Link } from "react-router-dom";
import heroPic from "../assets/images/HDplant.png";
import HeroLinks from "../components/heroLinks/HeroLinks";
const Home = () => {
  return (
    <div className="w-screen h-screen bg-gray-500  flex justify-center items-center	">
      <div
        className=" w-screen  md:overflow-hidden bg-cover w-full max-w-[3000px] h-full max-h-screen flex justify-center md:items-center	"
        style={{ backgroundImage: `url(${heroPic})` }}
      >
        <div className="h-fit my-auto py-10 overflow-y-auto flex justify-center items-center  backdrop-blur-xl w-[80vw] sm:min-h-[70vh] max-w-[1000px] md:max-h-[1000px]">
          <HeroLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;

// <div className="border ">
//         <Link to={"/estimate-bands"}>
//           {" "}
//           <p className=" text-white w-[100px] h-[100px] bg-gray-900	">
//             estimate bands
//           </p>
//         </Link>
//       </div>
//       <div className="border ">
//         <Link to={"/estimate-mineral-wool"}>
//           {" "}
//           <p className=" text-white w-[100px] h-[100px] bg-gray-900	">
//             estimate mineral wool
//           </p>
//         </Link>
//       </div>
//       <div className="border ">
//         <Link to={"/estimate-metal"}>
//           <p className=" text-white w-[100px] h-[100px] bg-gray-900	">
//             estimate metal jacketing
//           </p>
//         </Link>
//       </div>
