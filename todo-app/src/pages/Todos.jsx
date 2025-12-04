import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(true); // ← Paso 6 (estado de carga)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos desde API:", data);
        setTodos(data);
        setLoading(false); // ← Cuando llegan los datos, termina carga
      })
      .catch((error) => {
        console.error("Error cargando tareas:", error);
        setLoading(false); // ← Si falla, igual dejamos de cargar
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

  // ← Mensaje de carga (PASO 6)
  if (loading) {
    return <p>Cargando tareas...</p>;
  }

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
            <button
              onClick={() => {
                setTodos(
                  todos.map((todo) =>
                    todo.id === item.id
                      ? { ...todo, completed: !todo.completed }
                      : todo
                  )
                );
              }}
            >
              Cambiar estado
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
