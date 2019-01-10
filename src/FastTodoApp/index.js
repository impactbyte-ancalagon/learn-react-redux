import React, { Component } from "react"

import styled from "styled-components"

const StyledApp = styled.div`
  padding: 10px;
  margin: 10px;
  border: 2px solid green;
`

class FastTodoApp extends Component {
  render() {
    return (
      <StyledApp>
        <h1>Fast Todo App</h1>
      </StyledApp>
    )
  }
}

export default FastTodoApp
