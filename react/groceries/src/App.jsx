import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import GroceryList from './GroceryList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: []
    }
    this.addToList = this.addToList.bind(this);
    this.deleteFromList = this.deleteFromList.bind(this);
  }
  
  addToList(item) {
    this.setState(prevState => ({
      groceries: [...prevState.groceries, item] //immutable method
    }));
  }

  deleteFromList(itemIndex) {
    let groceryList = this.state.groceries.filter((item, index) => {
      return index !== itemIndex; 
    });
    this.setState({
      groceries: groceryList
    });
   
  }

  componentDidUpdate() {
    console.log('STATE: ', this.state.groceries);
  }

  render() {
    return (
      <div className="App">
        <Form submitForm={this.addToList}/>
        <GroceryList groceries={this.state.groceries} deleteItem={this.deleteFromList}/>
      </div>
    );
  }
}

export default App;
