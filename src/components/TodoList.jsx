import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "There is no tasks avaible."}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        )
      })}
    </ul>
  )
}