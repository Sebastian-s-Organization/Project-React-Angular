import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Importación de tus componentes
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import StackTecnologias from "./components/StackTecnologias";
import CabeceraCV from "./components/CabeceraCV"; // ← NUEVO

function App() {
  const [count, setCount] = useState(0);

  // --------------------------------------
  // DATOS DEL CV (PROPUESTOS PARA EV07)
  // --------------------------------------

  const datosPersonales = {
    nombre: "Zack",
    cargo: "Desarrollador Junior",
    ciudad: "Medellín, Colombia",
    contacto: "zack@example.com",
  };

  const resumenPerfil =
    "Aprendiz de ADS enfocado en desarrollo Front-End, React y buenas prácticas.";

  const experiencias = [
    {
      cargo: "Proyecto Académico",
      empresa: "SENA",
      periodo: "2024",
      descripcion: "Creación de aplicaciones básicas con React.",
    },
    {
      cargo: "Proyecto Personal",
      empresa: "Independiente",
      periodo: "2023",
      descripcion: "Portafolio personal con HTML, CSS y JS.",
    },
  ];

  const estudios = [
    {
      titulo: "Tecnólogo en ADS",
      institucion: "SENA",
      periodo: "2024 - Actualidad",
    },
    {
      titulo: "Curso de React",
      institucion: "Udemy",
      periodo: "2023",
    },
  ];

  const tecnologias = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Tailwind",
  ];

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
          Edita <code>src/App.jsx</code> y guarda para probar HMR.
        </p>
      </div>

      <p className="read-the-docs">Haz clic en los logos para aprender más</p>

      {/* -------------------------------------- */}
      {/*        SECCIÓN DEL CV CON PROPS         */}
      {/* -------------------------------------- */}

      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <Perfil resumen={resumenPerfil} />

      <Experiencia experiencias={experiencias} />

      <Educacion estudios={estudios} />

      <StackTecnologias tecnologias={tecnologias} />

      {/* -------------------------------------- */}
    </>
  );
}

export default App;
