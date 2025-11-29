import React from "react";

export default function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  return (
    <React.Fragment>
      <header style={{ background: "#007acc", color: "#fff", padding: "20px" }}>
        {" "}
        <h1>{nombre || "Sebastian Castro Grajales"}</h1>{" "}
        <p>
          {cargo || "Análisis y desarrollo de Software"} |{" "}
          {contacto || "[sebastiancastro4848@gmail.com)"} |{" "}
          {ciudad || "Medellín, Colombia"}{" "}
        </p>{" "}
      </header>
    </React.Fragment>
  );
}
