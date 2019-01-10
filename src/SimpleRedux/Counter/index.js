import React from "react"
import { connect } from "react-redux"

const Counter = props => (
  <div>
    <p>{props.counter} clicks</p>
    <p>
      <button>INCREMENT</button>
    </p>
  </div>
)

const mapStateToProps = store => {
  return {
    counter: store.counter
  }
}

export default connect(mapStateToProps)(Counter)
