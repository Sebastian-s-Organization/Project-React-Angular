import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para errores

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (!res.ok) {
          throw new Error("Error al obtener los datos desde la API");
        }

        const data = await res.json();
        console.log("Datos recibidos desde API:", data);
        setTodos(data);
      } catch (err) {
        console.error("Error en la petición:", err);
        setError("Ocurrió un error al cargar los TODOs");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() === "") {
      alert("El campo no puede estar vacío");
      return;
    }

    console.log("Nuevo TODO capturado:", newTodo);

    setNewTodo("");
  };

  // Función para eliminar un TODO
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

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

      {error && <p style={{ color: "red" }}>{error}</p>}

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
            <button
              style={{ marginLeft: "10px", color: "red" }}
              onClick={() => handleDelete(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
