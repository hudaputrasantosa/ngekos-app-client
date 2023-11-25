import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Kos from "./pages/kos/Kos";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/koses" element={<List />} />
        <Route path="/kos/:id" element={<Kos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
