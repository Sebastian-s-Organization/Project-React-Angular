function Experiencia() {
  // Array de experiencias (10 elementos)
  const experiencias = [
    {
      cargo: "Desarrollador Frontend Jr",
      empresa: "TechWorld",
      año: 2023,
      descripcion: "Maquetación de interfaces y consumo de APIs REST.",
    },
    {
      cargo: "Practicante de Desarrollo",
      empresa: "SoftFuture",
      año: 2022,
      descripcion:
        "Soporte en tareas de desarrollo y actualización de módulos.",
    },
    {
      cargo: "Proyecto Personal",
      empresa: "Portafolio Web",
      año: 2024,
      descripcion: "Sitio web personal con React.",
    },
    {
      cargo: "Proyecto Académico",
      empresa: "SENA",
      año: 2024,
      descripcion: "API con Node.js y Express.",
    },
    {
      cargo: "Diseñador UI",
      empresa: "Freelance",
      año: 2023,
      descripcion: "Diseño de interfaces con Figma.",
    },
    {
      cargo: "Landing Page",
      empresa: "Cliente Freelancer",
      año: 2023,
      descripcion: "Página estática con HTML, CSS y JS.",
    },
    {
      cargo: "Proyecto React",
      empresa: "Actividad Formativa",
      año: 2025,
      descripcion: "Construcción de componentes dinámicos.",
    },
    {
      cargo: "Aprendiz de Git",
      empresa: "GitHub",
      año: 2024,
      descripcion: "Manejo de repositorios, ramas y commits.",
    },
    {
      cargo: "App ToDo",
      empresa: "Proyecto Personal",
      año: 2022,
      descripcion: "App CRUD con JavaScript.",
    },
    {
      cargo: "Restaurante Local",
      empresa: "Mesero",
      año: 2021,
      descripcion: "Trabajo previo antes de iniciar en tecnología.",
    },
  ];

  return (
    <section>
      <h2>Experiencia y Proyectos</h2>

      {experiencias.map((exp, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <h3>
            {exp.cargo} — {exp.empresa}
          </h3>
          <p>
            <strong>Año:</strong> {exp.año}
          </p>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
}

export default Experiencia;
