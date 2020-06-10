import React, { Component } from 'react'

class CreateTodo extends Component {
  render() {
    return(
      <div>
        <form>
        <p>
        <label>add to do</label>
        <input type="text" />
        <input type="submit" />
        </p>
        </form>
      </div>
    )
  }
}

export default CreateTodo;
