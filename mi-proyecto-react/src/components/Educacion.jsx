import React from "react";

export default function Educacion() {
  const formacion = [
    {
      institucion: "SENA",
      curso: "Tecnólogo en Análisis y Desarrollo de Software (en formación)",
      año: "2025 - Actualidad",
    },
  ];

  return (
    <section>
      <h2>Formación Académica</h2>

      {formacion.length === 0 ? (
        <p>No cuento con estudios finalizados por el momento.</p>
      ) : (
        <ul>
          {formacion.map((item, index) => (
            <li key={index}>
              <h3>{item.curso}</h3>
              <p>
                <strong>Institución:</strong> {item.institucion}
              </p>
              <p>
                <strong>Año:</strong> {item.año}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
