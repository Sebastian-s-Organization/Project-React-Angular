import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos desde API:", data);
        setTodos(data);
      });
  }, []);

  return (
    <div>
      <h1>Página de Todos</h1>

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
