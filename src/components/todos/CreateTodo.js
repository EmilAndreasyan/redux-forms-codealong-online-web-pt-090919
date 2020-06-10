import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  
  handleChange(event) {
    this.setState({text: event.target.value})
  }
  render() {
    return(
      <div>
        <form>
        <p>
        <label>add to do</label>
        <input type="text" onChange={(event) => this.handleChange(event)}/>
        <input type="submit" />
        </p>
        </form>
      </div>
    )
  }
}

export default CreateTodo;
