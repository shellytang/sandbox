import React from 'react';

const GroceryList = ({groceries, deleteItem}) => {

  const groceryItem = groceries.map((item, index) => {
    return (
      <li key={index} item={item}>
        <input type="checkbox" name="item" />
        <label>{item}</label>
        <button onClick={() => deleteItem(index)}>Delete</button>
      </li>
    );
  });

  return (
    <ul>
      {groceryItem}
    </ul>
  );
};

export default GroceryList;