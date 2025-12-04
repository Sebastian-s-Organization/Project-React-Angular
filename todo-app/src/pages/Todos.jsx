import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos desde API:", data);
        setTodos(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() === "") {
      alert("El campo no puede estar vacío");
      return;
    }

    console.log("Nuevo TODO capturado:", newTodo);

    setNewTodo(""); // limpiar input
  };

  return (
    <div>
      <h1>Página de Todos</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un nuevo TODO"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.title} {item.completed ? "✔️" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
