import React from "react";

// Recibimos la prop 'resumen'
export default function Perfil({ resumen }) {
  return (
    <section style={{ padding: "20px" }}>
      <h2>Perfil Estudiantil</h2>

      {/* Inserto la prop resumen ANTES de tu contenido original */}
      <p>{resumen}</p>

      {/* Tu contenido original sigue intacto */}
      <p>
        Soy un desarrollador en formación con interés en la programación,
        construcción de interfaces y comprensión de la lógica detrás del
        software. Me caracterizo por mi dedicación, capacidad de aprendizaje
        rápido y responsabilidad en los proyectos que realizo.
      </p>

      <h3>Habilidades</h3>
      <ul>
        <li>Trabajo en equipo</li>
        <li>Resolución de problemas</li>
        <li>HTML, CSS, JavaScript</li>
        <li>React básico</li>
      </ul>
    </section>
  );
}
