import React from "react"

const TodoList = props => (
  <ul>
    {props.todos.map(todo => {
      return <li key={todo.id}>{todo.text}</li>
    })}
  </ul>
)

export default TodoList
