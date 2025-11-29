import React from "react";

export default function Educacion({ estudios }) {
  return (
    <section style={{ padding: "20px" }}>
      <h2>Educación</h2>

      {/* Recorremos el arreglo usando .map() */}
      {estudios.map((item, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <h3>{item.titulo}</h3>
          <p>
            <strong>Institución:</strong> {item.institucion}
          </p>
          <p>
            <strong>Periodo:</strong> {item.periodo}
          </p>
        </div>
      ))}
    </section>
  );
}
