import React, { useState } from 'react';
import './ListingsPage.css';
import ListingForm from '../components/ListingForm';

const ListingsPage = () => {
  const [wtsItems, setWtsItems] = useState([]);
  const [wtbItems, setWtbItems] = useState([]);

  const addWtsItem = (item) => {
    setWtsItems([ ...wtsItems, item ]);
  };

  const addWtbItem = (item) => {
    setWtbItems([ ...wtbItems, item ]);
  };

  return (
    <div className="listings-page">
      <div className="forms-section">
        <ListingForm addListing={addWtsItem} type="sell" />
        <ListingForm addListing={addWtbItem} type="buy" />
      </div>
      <div className="wts-section">
        <h2>Want To Sell - [WTS]</h2>
        {wtsItems.map((item, index) => (
          <div className="item-card" key={index}>
            <img src={item.image} alt={item.description} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.contact}</p>
              <p>{item.description}</p>
              <div className="item-meta">
                <span className="item-category">Category: {item.category}</span>
                <span className="item-price">Price: {item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="wtb-section">
        <h2>Want To Buy - [WTB]</h2>
        {wtbItems.map((item, index) => (
          <div className="wtb-card" key={index}>
            <h3>{item.name}</h3>
            <p>{item.contact}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;
