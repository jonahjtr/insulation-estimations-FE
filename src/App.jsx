import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EstimateBands from "./pages/EstimateBands";
import EstimateMineralWool from "./pages/EstimateMineralWool";
import EstimateMetal from "./pages/EstimateMetal";
function App() {
  // document.title = "Industrial Insulation";

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estimate-bands" element={<EstimateBands />} />
      <Route path="/estimate-mineral-wool" element={<EstimateMineralWool />} />
      <Route path="/estimate-metal" element={<EstimateMetal />} />
    </Routes>
  );
}

export default App;
