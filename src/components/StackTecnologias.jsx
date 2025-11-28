function StackTecnologias() {
  const tecnologias = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Git",
    "GitHub",
    "Tailwind",
    "SQLite",
  ];

  // función para asignar color según la tecnología
  const getColor = (tech) => {
    switch (tech) {
      case "JavaScript":
        return "#F7E017"; // amarillo
      case "React":
        return "#61DBFB"; // celeste
      case "Node.js":
        return "#8CC84B"; // verde
      case "Python":
        return "#3572A5"; // azul
      case "Git":
        return "#F34F29"; // naranja
      case "GitHub":
        return "#000000"; // negro
      case "Tailwind":
        return "#38BDF8"; // azul tailwind
      default:
        return "#888"; // gris por defecto
    }
  };

  return (
    <section>
      <h2>Stack de Tecnologías</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tecnologias.map((tech, index) => (
          <span
            key={index}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              backgroundColor: getColor(tech),
              color: tech === "GitHub" ? "white" : "black",
              fontWeight: "bold",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export default StackTecnologias;
