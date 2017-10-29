import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (
	<div className="grocery-list">
		{props.allFood.map( (food, index) => 
			<GroceryItem addCallback={ props.addCallback } minusCallback={ props.minusCallback } deleteCallback={ props.deleteCallback } food={food} key={index} />
		)}
	</div>
);

export default GroceryList;




