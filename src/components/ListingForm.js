// src/components/ListingForm.js

import React, { useState } from 'react';
import './ListingForm.css';

const ListingForm = ({ addListing, type }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addListing({ name, contact, description, price, category, image });
    setName('');
    setContact('');
    setDescription('');
    setPrice('');
    setCategory('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="listing-form">
      <h3>{type === 'sell' ? 'Sell an Item' : 'Request an Item'}</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Contact Information"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      {type === 'sell' && (
        <>
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <div className="file-input-wrapper">
            <input type="file" onChange={handleFileChange} />
            <div className="file-input-button">Select a file </div>
          </div>
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ListingForm;
