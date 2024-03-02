import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EstimateMaterial from "./pages/EstimateMaterial";
import EstimateBands from "./pages/EstimateBands";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estimate-material" element={<EstimateMaterial />} />
      <Route path="/estimate-bands" element={<EstimateBands />} />
    </Routes>
  );
}

export default App;
