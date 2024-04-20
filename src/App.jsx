import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import SpecificMaterialLanding from "./pages/SpecificMaterialLanding";
import EstimateEverythingLanding from "./pages/EstimateEverythingLanding";

import EstimateBands from "./pages/EstimateBands";
import EstimateMineralWool from "./pages/EstimateMineralWool";
import EstimateMetal from "./pages/EstimateMetal";
import InsulationLanding from "./pages/InsulationLanding";
import EstimateFormedinsulation from "./pages/EstimateFormedinsulation";
import ChooseTypeOfProject from "./pages/ChooseTypeOfProject";

import EstimateEverythingSheetInsulation from "./pages/EstimateEverythingSheetInsulation";
import EstimateEverythingFormedInsulation from "./pages/EstimateEverytingFormedInsulation";
import { pathNames } from "./assets/lists";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={pathNames.estimateBands} element={<EstimateBands />} />
      <Route path={pathNames.estimateMetal} element={<EstimateMetal />} />
      <Route
        path={pathNames.insulationLanding}
        element={<InsulationLanding />}
      />
      <Route
        path={pathNames.specificMaterialLanding}
        element={<SpecificMaterialLanding />}
      />
      <Route
        path={pathNames.estimateMineralWool}
        element={<EstimateMineralWool />}
      />
      <Route
        path={pathNames.estimateFormedInsulation}
        element={<EstimateFormedinsulation />}
      />
      <Route
        path={pathNames.chooseProjectType}
        element={<ChooseTypeOfProject />}
      />

      <Route
        path={pathNames.estimateAllPipeMaterialLanding}
        element={<EstimateEverythingLanding />}
      />
      <Route
        path={pathNames.estimateAllPipeFormedInsulation}
        element={<EstimateEverythingFormedInsulation />}
      />
      <Route
        path={pathNames.estimateAllPipeSheetInsulation}
        element={<EstimateEverythingSheetInsulation />}
      />
    </Routes>
  );
}

export default App;
