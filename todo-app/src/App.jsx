import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Registro from "./pages/Registro";
import Usuarios from "./pages/Usuarios"; // ⬅️ NUEVO

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/usuarios" element={<Usuarios />} /> {/* ⬅️ NUEVO */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
