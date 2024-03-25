import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EstimateBands from "./pages/EstimateBands";
import EstimateMineralWool from "./pages/EstimateMineralWool";
import EstimateMetal from "./pages/EstimateMetal";
import InsulationLanding from "./pages/InsulationLanding";
import EstimateFormedinsulation from "./pages/EstimateFormedinsulation";
import EstimateAll from "./pages/EstimateAll";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estimate-bands" element={<EstimateBands />} />
      <Route path="/estimate-metal" element={<EstimateMetal />} />
      <Route path="/insulation-landing" element={<InsulationLanding />} />
      <Route path="/estimate-mineral-wool" element={<EstimateMineralWool />} />
      <Route
        path="/estimate-formed-insulation"
        element={<EstimateFormedinsulation />}
      />
      <Route path="/estimate-all" element={<EstimateAll />} />
    </Routes>
  );
}

export default App;
