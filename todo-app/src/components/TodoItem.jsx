function TodoItem({ item, onToggle, onDelete }) {
  return (
    <li>
      {item.title} {item.completed ? "✔️" : "❌"}
      <button onClick={() => onToggle(item.id)}>Cambiar estado</button>
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;
