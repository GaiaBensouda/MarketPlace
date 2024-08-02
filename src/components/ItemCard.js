// src/components/ItemCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCard.css';

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <h3 className="item-card__title">{item.name}</h3>
      <p className="item-card__description">{item.description}</p>
      <p className="item-card__price">${item.price}</p>
      <Link to={`/item/${item.id}`} className="item-card__link">View Details</Link>
    </div>
  );
}

export default ItemCard;
