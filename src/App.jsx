import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Importación de tus componentes
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import StackTecnologias from "./components/StackTecnologias";
import CabeceraCV from "./components/CabeceraCV";
import ToggleHabilidades from "./components/ToggleHabilidades";

// Importante para el paso 7
import { tecnologiasIniciales } from "./data/cvData";

// Importar el formulario (nuevo)
import FormularioTecnologia from "./components/FormularioTecnologia";

function App() {
  const [count, setCount] = useState(0);

  // Estado dinámico de tecnologías (Paso 7)
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  // Función para agregar tecnologías (obligatoria en el paso 7)
  const agregarTecnologia = (nuevaTec) => {
    setTecnologias((prev) => [...prev, nuevaTec]);
  };

  // Paso 8: eliminar la última tecnología
  const eliminarUltimaTecnologia = () => {
    setTecnologias((prev) => prev.slice(0, -1));
  };

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

      {/* SECCIÓN CV */}
      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <Perfil resumen={resumenPerfil} />

      <Experiencia experiencias={experiencias} />

      <Educacion estudios={estudios} />

      {/* Usar el estado dinámico */}
      <StackTecnologias tecnologias={tecnologias} />

      {/* Formulario para agregar tecnologías */}
      <FormularioTecnologia onAgregar={agregarTecnologia} />

      {/* Botón para eliminar la última tecnología */}
      <button onClick={eliminarUltimaTecnologia}>
        Eliminar última tecnología
      </button>

      <ToggleHabilidades />
    </>
  );
}

export default App;
