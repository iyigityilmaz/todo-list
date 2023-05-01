import { useState } from "react"

export function TodoForm({ onSubmit }) {
  const [newTodo, setNewTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newTodo === "") return

    onSubmit(newTodo)

    setNewTodo("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-todo-form">
      <div>
        <input 
          className="todo-input"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          type="text"
          id="item"
          placeholder="Add a New Task..."
        />
        <button className="btn">Add</button>
      </div>
    </form>
  )
}