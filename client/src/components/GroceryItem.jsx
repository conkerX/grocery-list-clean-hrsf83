import React from 'react';


const GroceryItem = (props) => (
  <div className="grocery-item">
  	<input id="checkBox" type="checkbox" />
  	<span>{props.food.description}</span>
  	<button onClick={ (e) => {props.minusCallback(props.food)} }>-</button>
 	{props.food.quantity}
 	<button onClick={ (e) => {props.addCallback(props.food)} }>+</button>
 	<button onClick={ (e) => {props.deleteCallback(props.food)} }>Remove</button>
  </div>
)

export default GroceryItem;