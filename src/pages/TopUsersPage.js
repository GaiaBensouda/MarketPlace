import React from 'react';
import './TopUsersPage.css';

const topUsers = [
  {
    name: 'Jane Doe',
    role: 'Top Seller',
    rating: 4.9,
    avatar: 'path_to_jane_avatar', 
    description: 'Top-rated seller of the month with a 99% satisfaction rate.',
  },
  {
    name: 'John Smith',
    role: 'Top Buyer',
    rating: 4.8,
    avatar: 'path_to_john_avatar', 
    description: 'Highly trusted buyer known for quick payments and good communication.',
  },
  // Add more top users as needed
];

const TopUsersPage = () => {
  return (
    <div className="top-users-page">
      <h2 className="top-users-title">Top Users of the Month</h2>
      <div className="top-users-list">
        {topUsers.map((user, index) => (
          <div className="top-user-card" key={index}>
            <img src={user.avatar} alt={`${user.name} Avatar`} className="top-user-avatar" />
            <h3 className="top-user-name">{user.name}</h3>
            <p className="top-user-role">{user.role}</p>
            <p className="top-user-rating">Rating: {user.rating}</p>
            <p className="top-user-description">{user.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsersPage;
