import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="border ">
        <Link to={"/estimate-material"}>
          {" "}
          <p>hello 1</p>
        </Link>
      </div>
      <div>hello 2</div>
      <div>hello 3</div>
    </div>
  );
};

export default Home;
