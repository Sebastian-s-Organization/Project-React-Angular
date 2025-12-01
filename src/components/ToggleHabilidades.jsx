// src/components/ToggleHabilidades.jsx
import React from "react";

export default function ToggleHabilidades({ visible, onToggle }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={onToggle}
        style={{
          padding: "10px 20px",
          background: "#007acc",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {visible ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>
    </div>
  );
}
