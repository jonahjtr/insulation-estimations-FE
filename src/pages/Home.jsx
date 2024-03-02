import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-gray-500	">
      <div className="border ">
        <Link to={"/estimate-material"}>
          {" "}
          <p className=" text-white w-[100px] h-[100px] bg-gray-900	">
            estimating material
          </p>
        </Link>
      </div>
      <div className="border ">
        <Link to={"/estimate-bands"}>
          {" "}
          <p className=" text-white w-[100px] h-[100px] bg-gray-900	">
            estimate bands
          </p>
        </Link>
      </div>
      <div>hello 3</div>
    </div>
  );
};

export default Home;
