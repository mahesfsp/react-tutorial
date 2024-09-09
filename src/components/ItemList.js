import React from 'react';

function ItemList() {
  // Sample data array
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <ul>
      {items.map((item, index) => (
        // Each child in a list should have a unique "key" prop
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ItemList;
