import React from 'react';
import './GroceryItem.css';

const GroceryItem = ({item, deleteItem, index}) => {
  return (
    <li className="container">
      <label className="listItem">{item}
        <input 
          type="checkbox" 
          name="item" 
          className="checkBox" 
          check="checked" 
        />
        <span className="checkMark"></span>
      </label>
      <button className="deleteButton" onClick={() => deleteItem(index)}>Delete</button>
    </li>
  )
}

export default GroceryItem;