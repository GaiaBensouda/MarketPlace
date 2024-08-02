import React from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';

const mockItems = [
  { id: 1, name: 'Math Textbook', price: 20, description: 'Advanced Algebra' },
  { id: 2, name: 'Laptop', price: 500, description: 'Gaming laptop, good condition' },
];

function ItemList() {
  return (
    <div className="item-list">
      {mockItems.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
