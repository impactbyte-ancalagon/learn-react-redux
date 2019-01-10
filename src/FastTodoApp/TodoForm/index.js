import React from "react"
import { connect } from "react-redux"

const TodoForm = props => {
  const changeText = event => {
    props.dispatch({
      type: "CHANGE_TEXT",
      payload: {
        text: event.target.value
      }
    })
  }

  const clearText = () => {
    props.dispatch({ type: "CLEAR_TEXT" })
  }

  const submitText = () => {
    props.dispatch({ type: "SUBMIT_TEXT" })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        submitText()
        clearText()
      }}
    >
      <input
        type="text"
        placeholder="What to do?"
        onChange={changeText}
        value={props.text}
      />
    </form>
  )
}

const mapStateToProps = store => {
  return {
    text: store.text
  }
}

export default connect(mapStateToProps)(TodoForm)
