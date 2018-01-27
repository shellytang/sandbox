import React from 'react';

const GroceryItem = ({item, deleteItem, index}) => {
  return (
    <li>
      <input type="checkbox" name="item"/>
      <label>{item}</label>
      <button onClick={() => deleteItem(index)}>Delete</button>
    </li>
  )
}

export default GroceryItem;