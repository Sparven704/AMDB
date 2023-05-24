import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import './UserCard.css';

export const UserCard = ({ user }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/userprofile', { state: { user } });
  };

  const { name, email } = user;

  return (
    <div className="user-card-container">
      <div className="user-card-body">
        <h2 className="user-name">{name}</h2>
        <p className="user-email">{email}</p>
      </div>
      <button className="user-card-btn" onClick={handleProfileClick}>
        View Profile
      </button>
    </div>
  );
};