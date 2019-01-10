import React, { Component } from "react"
import styled from "styled-components"
import { createStore } from "redux"
import { Provider } from "react-redux"

import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const StyledApp = styled.div`
  padding: 10px;
  margin: 10px;
  border: 2px solid green;
`

const initialStore = {
  text: "",
  latestId: 0,
  todos: []
}

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case "CHANGE_TEXT": {
      return {
        ...store,
        text: action.payload.text
      }
    }

    case "CLEAR_TEXT": {
      return {
        ...store,
        text: ""
      }
    }

    case "SUBMIT_TEXT": {
      return {
        ...store,
        latestId: store.latestId + 1,
        todos: store.todos.concat({
          id: store.latestId,
          text: store.text
        })
      }
    }

    default:
      return store
  }
}

const reduxStore = createStore(
  reducer,
  // Add Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class FastTodoApp extends Component {
  render() {
    return (
      <StyledApp>
        <Provider store={reduxStore}>
          <h1>Fast Todo App</h1>
          <TodoForm />
          <TodoList />
        </Provider>
      </StyledApp>
    )
  }
}

export default FastTodoApp
