import React, { Component } from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { devToolsEnhancer } from "redux-devtools-extension"

import Counter from "./Counter"

const initialStore = {
  counter: 0
}

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER": {
      return {
        counter: store.counter + 1
      }
    }

    default:
      return store
  }
}

const reduxStore = createStore(
  reducer,
  devToolsEnhancer({
    name: "Simple Redux"
  })
)

class SimpleRedux extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <div
          style={{
            padding: "10px",
            margin: "10px",
            border: "2px solid black"
          }}
        >
          <h1>Simple Redux</h1>
          <Counter />
        </div>
      </Provider>
    )
  }
}

export default SimpleRedux
