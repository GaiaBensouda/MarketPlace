import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  return (
    <div className="stats-section">
      <div className="stat-item">
        <h2 className="stat-value">2024</h2>
        <p className="stat-description">Business was founded</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-value">4</h2>
        <p className="stat-description">People on the team</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-value">300+</h2>
        <p className="stat-description">Users on the platform</p>
      </div>
      <div className="stat-item">
        <h2 className="stat-value">$0</h2>
        <p className="stat-description">Paid out to creators</p>
      </div>
    </div>
  );
};

export default StatsSection;
