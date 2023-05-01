export function TodoItem({ completed, id, title, toggleTodo, removeTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => removeTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}