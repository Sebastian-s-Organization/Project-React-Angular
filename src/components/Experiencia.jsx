function Educacion() {
  const educacion = [
    {
      institucion: "SENA",
      curso: "Tecnólogo en Análisis y Desarrollo de Software",
      año: 2025,
    },
    {
      institucion: "SENA",
      curso: "Curso: Fundamentos de Programación",
      año: 2023,
    },
    {
      institucion: "Udemy",
      curso: "Curso de React desde cero",
      año: 2024,
    },
    {
      institucion: "Platzi",
      curso: "Curso Profesional de JavaScript",
      año: 2023,
    },
    {
      institucion: "Google",
      curso: "Fundamentos de UX/UI",
      año: 2024,
    },
    {
      institucion: "FreeCodeCamp",
      curso: "Responsive Web Design",
      año: 2022,
    },
    {
      institucion: "Cisco Networking Academy",
      curso: "Introducción a Internet de las Cosas",
      año: 2024,
    },
    {
      institucion: "Microsoft Learn",
      curso: "Introducción a Azure",
      año: 2023,
    },
    {
      institucion: "Alura",
      curso: "Lógica de Programación",
      año: 2022,
    },
    {
      institucion: "Coursera",
      curso: "Curso de Machine Learning básico",
      año: 2024,
    },
  ];

  return (
    <section>
      <h2>Formación Académica</h2>

      {educacion.map((item, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <h3>{item.curso}</h3>
          <p>
            <strong>Institución:</strong> {item.institucion}
          </p>
          <p>
            <strong>Año:</strong> {item.año}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Educacion;
