import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Importación de tus componentes
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion"; // ← NUEVO

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mi Primer CV con React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guarda para probar HMR
        </p>
      </div>
      <p className="read-the-docs">Haz clic en los logos para aprender más</p>
      {/* -------------------------------------- */}
      {/* Sección del CV */}
      {/* -------------------------------------- */}
      <Perfil />
      <Experiencia />
      <Educacion /> {/* ← NUEVO */}
      {/* -------------------------------------- */}
    </>
  );
}

export default App;
