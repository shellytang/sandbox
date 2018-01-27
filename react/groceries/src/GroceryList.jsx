import React from 'react';
import GroceryItem from './GroceryItem';
import './GroceryList.css';

const GroceryList = ({groceries, deleteItem}) => {
  const groceryItem = groceries.map((item, index) => {
    return (
      <GroceryItem 
        item={item}
        deleteItem={deleteItem}
        key={index}
        index={index}
      />
    );
  });

  return (
    <ul>
      {groceryItem}
    </ul>
  );
};

export default GroceryList;