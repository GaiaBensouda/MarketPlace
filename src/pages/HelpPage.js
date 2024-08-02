
import React from 'react';
import './HelpPage.css';

const HelpPage = () => {
  return (
    <div className="help-page">
      <h1 className="help-page__title">Get the Assistance You Need</h1>
      <p className="help-page__description">
        Describe your issue, and we'll help you find the best solution. Whether it's a problem with buying, selling, or account management, we're here to assist you.
      </p>
      <input type="text" className="help-page__input" placeholder="E.g., I'm having trouble listing an item" />
      <div className="help-page__sections">
        <div className="help-page__section">
          <h2>Manage Your Account</h2>
          <p>Get help with account settings, password recovery, and more.</p>
          <a href="#account" className="help-page__link">Manage Account</a>
        </div>
        <div className="help-page__section">
          <h2>Buying and Selling</h2>
          <p>Find answers to questions about buying or selling items on our platform.</p>
          <a href="#buy-sell" className="help-page__link">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
