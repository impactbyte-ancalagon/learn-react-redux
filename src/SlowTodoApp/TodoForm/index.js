import React, { Component } from "react"

class TodoForm extends Component {
  state = {
    text: ""
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  clearText = () => {
    this.setState({ text: "" })
  }

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          this.clearText()
          this.props.handleSubmit(this.state.text)
        }}
      >
        <input
          type="text"
          placeholder="What to do?"
          onChange={this.handleChange}
          value={this.state.text}
        />
      </form>
    )
  }
}

export default TodoForm
