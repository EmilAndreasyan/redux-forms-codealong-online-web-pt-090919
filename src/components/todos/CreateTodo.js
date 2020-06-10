import React, { Component } from 'react';
import {connect} from 'react-redux';

class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  
  handleChange = event => {
    this.setState({text: event.target.value})
  }
  
  render() {
    return(
      <div>
        <form>
        <p>
        <label>add to do</label>
        <input type="text" onChange={this.handleChange} value={this.state.text}/>
        <input type="submit" />
        </p>
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {addTodo: formData => dispatch()}
}

export default connect(null, mapDispatchToProps)(CreateTodo);
