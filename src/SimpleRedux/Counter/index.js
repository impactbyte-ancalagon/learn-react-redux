import React from "react"
import { connect } from "react-redux"

const Counter = props => {
  const increment = () => {
    props.dispatch({ type: "INCREMENT_COUNTER" })
  }

  return (
    <div>
      <p>{props.counter} clicks</p>
      <p>
        <button onClick={increment}>INCREMENT</button>
      </p>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    counter: store.counter
  }
}

export default connect(mapStateToProps)(Counter)
