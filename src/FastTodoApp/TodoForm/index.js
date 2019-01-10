import React from "react"
import { connect } from "react-redux"

class TodoForm extends React.Component {
  changeText = event => {
    this.props.dispatch({
      type: "CHANGE_TEXT",
      payload: {
        text: event.target.value
      }
    })
  }

  clearText = () => {
    this.props.dispatch({ type: "CLEAR_TEXT" })
  }

  submitText = () => {
    this.props.dispatch({ type: "SUBMIT_TEXT" })
  }

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          this.submitText()
          this.clearText()
        }}
      >
        <input
          type="text"
          placeholder="What to do?"
          onChange={this.changeText}
          value={this.props.text}
        />
      </form>
    )
  }
}

const mapStateToProps = store => {
  return {
    text: store.text
  }
}

export default connect(mapStateToProps)(TodoForm)
