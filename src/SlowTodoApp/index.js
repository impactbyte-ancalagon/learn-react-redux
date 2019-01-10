import React, { Component } from "react"
import styled from "styled-components"

import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const StyledApp = styled.div`
  padding: 10px;
  margin: 10px;
  border: 2px solid red;
`

class SlowTodoApp extends Component {
  state = {
    latestId: 2,
    todos: [
      {
        id: 0,
        text: "Sample A"
      },
      {
        id: 1,
        text: "Sample B"
      }
    ]
  }

  handleSubmit = newText => {
    const newTodos = this.state.todos.concat({
      id: this.state.latestId,
      text: newText
    })

    this.setState({
      latestId: this.state.latestId + 1,
      todos: newTodos
    })
  }

  render() {
    return (
      <StyledApp>
        <h1>Slow Todo App</h1>
        <TodoForm handleSubmit={this.handleSubmit} />
        <TodoList todos={this.state.todos} />
      </StyledApp>
    )
  }
}

export default SlowTodoApp
