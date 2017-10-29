import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import GroceryItem from './components/GroceryItem.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      description: '',
      quantity: '',
      currentId: 1
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleMinus(foodObject) {
    let newList = this.state.list.slice();

    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === foodObject.id) {
        let newQuantity = parseInt(newList[i].quantity) - 1;
        newList[i].quantity = newQuantity.toString();
      }
    }

    this.setState({
      list: newList
    });
  }

  handleAdd(foodObject) {
    let newList = this.state.list.slice();

    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === foodObject.id) {
        let newQuantity = parseInt(newList[i].quantity) + 1;
        newList[i].quantity = newQuantity.toString();
      }
    }

    this.setState({
      list: newList
    });
  }

 

  handleChange(e) {
    let text = e.target.value;
    let id = e.target.id;
    
    if (id === 'description') {
      this.setState({
        description: text
      });
    } else if (id === 'quantity') {
      this.setState({
        quantity: text
      });
    }
  }

  handleClick(e) {
    console.log('click');
    let newFood = {};
    newFood.id = this.state.currentId;
    newFood.quantity = this.state.quantity;
    newFood.description = this.state.description;

    let newList = this.state.list.slice();
    newList.push(newFood);

    this.setState({
      list: newList,
      description: '',
      quantity: '',
      currentId: this.state.currentId + 1
    });
  }

  handleDelete(foodObject) {
    let newList = this.state.list.slice();
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === foodObject.id) {
        newList.splice(i, 1);
      } 
    }

    this.setState({
      list: newList
    });
  }
  
  render () {
    return (
      <div>
        <h1>Grocery List</h1>
        <h2>Made by Kirk</h2>
        <h6>Edited by Brandon</h6>
        <h2>For Kirk</h2>
        <AddGrocery description={ this.state.description } quantity={ this.state.quantity } changeCallback={ this.handleChange } handleClick={ this.handleClick }/>
        <GroceryList addCallback={ this.handleAdd } minusCallback={ this.handleMinus } deleteCallback={ this.handleDelete } allFood={ this.state.list }/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
