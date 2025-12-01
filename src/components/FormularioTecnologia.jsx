import { useState } from "react";

export default function FormularioTecnologia({ onAgregar }) {
  const [nuevaTec, setNuevaTec] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (nuevaTec.trim() === "") return;

    onAgregar(nuevaTec);
    setNuevaTec("");
  };

  return (
    <form onSubmit={manejarSubmit} style={{ margin: "20px" }}>
      <h3>Agregar nueva tecnología</h3>

      <input
        type="text"
        placeholder="Ej: TypeScript"
        value={nuevaTec}
        onChange={(e) => setNuevaTec(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}
