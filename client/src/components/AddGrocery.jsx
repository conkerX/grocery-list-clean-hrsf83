import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
  	return (
	  	<div>
		  		Description: 
	        	<input id="description" onChange={ this.props.changeCallback } type="text" value={ this.props.description }/>
	        	<br />
	        	Quantity:
	      		<input id="quantity" onChange={ this.props.changeCallback } type="text" value={ this.props.quantity } />
	      		<button onClick={ this.props.handleClick }>Add Grocery</button>
	        
	  	</div>
  	)
  }
}

export default AddGrocery;

