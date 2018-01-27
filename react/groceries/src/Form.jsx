import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let item = e.target.value;
    this.setState({
      item
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.item !== '') {
      this.props.submitForm(this.state.item);
      this.setState({
        item: ''
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input type="text" name="item" 
          value={this.state.item} 
          placeholder="Add to groceries list" 
          onChange={this.handleChange}
          className="addInput"
        />
        <button className="addButton">Add Item</button>
      </form>
    )
  }
}

export default Form;