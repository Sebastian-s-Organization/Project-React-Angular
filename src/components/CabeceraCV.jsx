import React from "react";

export default function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  return (
    <header style={{ background: "#007acc", color: "#fff", padding: "20px" }}>
      <h1>{nombre}</h1>
      <p>
        {cargo} | {contacto} | {ciudad}
      </p>
    </header>
  );
}
