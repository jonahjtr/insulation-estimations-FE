import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EstimateBands from "./pages/EstimateBands";
import EstimateMineralWool from "./pages/EstimateMineralWool";
import EstimateMetal from "./pages/EstimateMetal";
import InsulationLanding from "./pages/InsulationLanding";
import EstimateFormedinsulation from "./pages/EstimateFormedinsulation";
import EstimateSheetInsulation from "./pages/EstimateSheetInsulation";
import SpecificMaterialLanding from "./pages/SpecificMaterialLanding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estimate-bands" element={<EstimateBands />} />
      <Route path="/estimate-metal" element={<EstimateMetal />} />
      <Route path="/insulation-landing" element={<InsulationLanding />} />
      <Route
        path="/specific-material-landing"
        element={<SpecificMaterialLanding />}
      />
      <Route path="/estimate-mineral-wool" element={<EstimateMineralWool />} />
      <Route
        path="/estimate-formed-insulation"
        element={<EstimateFormedinsulation />}
      />
      <Route
        path="/estimate-sheet-insulation"
        element={<EstimateSheetInsulation />}
      />
    </Routes>
  );
}

export default App;
