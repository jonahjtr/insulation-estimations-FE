import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import SpecificMaterialLanding from "./pages/SpecificMaterialLanding";
import EstimateEverythingLanding from "./pages/EstimateEverythingLanding";

import EstimateBands from "./pages/EstimateBands";
import EstimateMineralWool from "./pages/EstimateMineralWool";
import EstimateMetal from "./pages/EstimateMetal";
import InsulationLanding from "./pages/InsulationLanding";
import EstimateFormedinsulation from "./pages/EstimateFormedinsulation";

import EstimateEverythingSheetInsulation from "./pages/EstimateEverythingSheetInsulation";
import EstimateEverythingFormedInsulation from "./pages/EstimateEverytingFormedInsulation";

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
        path="/estimate-everything-landing"
        element={<EstimateEverythingLanding />}
      />
      <Route
        path="/estimate-everything-formed-insulation"
        element={<EstimateEverythingFormedInsulation />}
      />
      <Route
        path="/estimate-everything-sheet-insulation"
        element={<EstimateEverythingSheetInsulation />}
      />
    </Routes>
  );
}

export default App;
