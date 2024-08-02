import React from 'react';
import './ValuesSection.css';

const ValuesSection = () => {
  return (
    <div className="values-section">
      <h2 className="values-title">Our Values</h2>
      <p className="values-intro">
        Give an easy way for departing students to sell the items they can't bring with them to incoming or existing students. Help out Bachelors in their daily necessities.
      </p>
      <div className="values-list">
        <div className="value-item">
          <span className="value-icon">🚀</span>
          <div className="value-content">
            <h3 className="value-title">Be world-class.</h3>
            <p className="value-description">
              Strive to create a world-class platform that connects students and empowers them to learn and grow from each other.
            </p>
          </div>
        </div>
        <div className="value-item">
          <span className="value-icon">👥</span>
          <div className="value-content">
            <h3 className="value-title">Be supportive.</h3>
            <p className="value-description">
              Provide resources and tools to help users succeed, and encourage positive interactions through user reviews and feedback.
            </p>
          </div>
        </div>
        <div className="value-item">
          <span className="value-icon">✨</span>
          <div className="value-content">
            <h3 className="value-title">Share everything you know.</h3>
            <p className="value-description">
              Facilitate conversations and connections between students who can learn from each other, creating a platform where everyone has the opportunity to contribute and benefit.
            </p>
          </div>
        </div>
        <div className="value-item">
          <span className="value-icon">✋</span>
          <div className="value-content">
            <h3 className="value-title">Take responsibility.</h3>
            <p className="value-description">
              Take responsibility for creating a safe and secure marketplace that protects the interests of both buyers and sellers.
            </p>
          </div>
        </div>
        <div className="value-item">
          <span className="value-icon">🎓</span>
          <div className="value-content">
            <h3 className="value-title">Always learning.</h3>
            <p className="value-description">
              Seek out feedback from users and iterate on the platform to improve the user experience and meet the changing needs of the student community.
            </p>
          </div>
        </div>
        <div className="value-item">
          <span className="value-icon">💼</span>
          <div className="value-content">
            <h3 className="value-title">Enjoy downtime.</h3>
            <p className="value-description">
              Create a platform that allows students to buy and sell goods and services in a way that fits their schedule and lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
