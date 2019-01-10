import React, { Component } from "react"

import SlowTodoApp from "./SlowTodoApp"
import SimpleRedux from "./SimpleRedux"
import FastTodoApp from "./FastTodoApp"

class App extends Component {
  render() {
    return (
      <main>
        <SlowTodoApp />
        <SimpleRedux />
        <FastTodoApp />
      </main>
    )
  }
}

export default App
