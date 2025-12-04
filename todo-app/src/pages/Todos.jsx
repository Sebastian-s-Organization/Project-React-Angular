import { useEffect } from "react";

function Todos() {
  useEffect(() => {
    // Fetch inicial según la guía
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos desde API:", data);
      })
      .catch((err) => {
        console.error("Error al obtener los datos:", err);
      });
  }, []);

  return (
    <div>
      <h1>Página Todos</h1>
      <p>Realizando fetch inicial... revisa la consola</p>
    </div>
  );
}

export default Todos;
