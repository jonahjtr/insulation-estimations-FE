import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EstimateMaterial from "./pages/EstimateMaterial";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estimate-material" element={<EstimateMaterial />} />
    </Routes>
  );
}

export default App;
