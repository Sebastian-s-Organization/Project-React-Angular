import React from "react";

// Recibimos la prop que contiene el arreglo de experiencias
export default function Experiencia({ experiencias }) {
  return (
    <section style={{ padding: "20px" }}>
      <h2>Experiencia</h2>

      {/* Recorremos el arreglo usando .map() */}
      {experiencias.map((exp, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <h3>{exp.cargo}</h3>
          <p>
            <strong>Empresa:</strong> {exp.empresa}
          </p>
          <p>
            <strong>Periodo:</strong> {exp.periodo}
          </p>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
}
