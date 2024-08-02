import React from 'react';
import './HomePage.css';
import logo from '../assets/logo.png';
import StatsSection from '../components/StatsSection';
import ValuesSection from '../components/ValuesSection';
import TeamSection from '../components/TeamSection';

function HomePage() {
  return (
    <div className="home">
      <h2 className="home__title">Welcome to BX Marketplace</h2>
      <p className="home__description">
        Buy and sell items with other students! Browse our listings or list your own items for sale.
      </p>
      <img src={logo} alt="BX Marketplace Logo" className="home__logo" />
      <StatsSection />
      <ValuesSection />
      <TeamSection /> {/* Add TeamSection here */}
    </div>
  );
}

export default HomePage;
