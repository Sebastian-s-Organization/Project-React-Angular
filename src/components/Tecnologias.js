import { useState } from "react";

export default function Tecnologias() {
  const [tecnologias, setTecnologias] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  const [soloLargas, setSoloLargas] = useState(false);

  const eliminarTec = (tec) => {
    setTecnologias(tecnologias.filter((t) => t !== tec));
  };

  const tecnologiasFiltradas = soloLargas
    ? tecnologias.filter((t) => t.length > 5)
    : tecnologias;

  return (
    <div style={{ margin: "20px" }}>
      <h2>Tecnologías</h2>

      {/* Botón para filtrar */}
      <button onClick={() => setSoloLargas(!soloLargas)}>
        {soloLargas ? "Mostrar todas" : "Mostrar solo largas"}
      </button>

      <ul>
        {tecnologiasFiltradas.map((tec) => (
          <li key={tec} style={{ marginTop: "5px" }}>
            {tec}{" "}
            <button
              onClick={() => eliminarTec(tec)}
              style={{ marginLeft: "10px" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
