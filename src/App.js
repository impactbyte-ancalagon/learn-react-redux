import React, { Component } from "react"

import SlowTodoApp from "./SlowTodoApp"
import FastTodoApp from "./FastTodoApp"

class App extends Component {
  render() {
    return (
      <main>
        <SlowTodoApp />
        <FastTodoApp />
      </main>
    )
  }
}

export default App
