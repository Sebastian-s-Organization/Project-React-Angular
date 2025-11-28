import React from "react";

export default function Experiencia() {
  const experiencias = [
    {
      cargo: "Proyecto Académico",
      empresa: "Análisis y Desarrollo de Software",
      año: "2024",
      descripcion: "Desarrollo de ejercicios y pequeñas aplicaciones como parte del proceso de aprendizaje."
    },
    {
      cargo: "Proyecto Personal: Página Web",
      empresa: "Proyecto Independiente",
      año: "2023",
      descripcion: "Creación de una página web básica utilizando HTML, CSS y JavaScript."
    },
    {
      cargo: "Proyecto Personal: Scripts en Python",
      empresa: "Proyecto Independiente",
      año: "2023",
      descripcion: "Automatización de tareas simples y práctica de lógica de programación."
    },
    {
      cargo: "Proyecto Personal: Mini aplicaciones React",
      empresa: "Proyecto Independiente",
      año: "2024",
      descripcion: "Práctica con componentes y estados para mejorar habilidades en desarrollo Front-End."
    }
  ];

  return (
    <section>
      <h2>Experiencia / Proyectos</h2>
      <ul>
        {experiencias.map((exp, index) => (
          <li key={index}>
            <h3>{exp.cargo}</h3>
            <p><strong>Origen:</strong> {exp.empresa}</p>
            <p><strong>Año:</strong> {exp.año}</p>
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
