import React from "react"
import { connect } from "react-redux"

const TodoList = props => (
  <ul>
    {props.todos.map(todo => {
      return <li key={todo.id}>{todo.text}</li>
    })}
  </ul>
)

const mapStateToProps = store => {
  return {
    todos: store.todos
  }
}

export default connect(mapStateToProps)(TodoList)
