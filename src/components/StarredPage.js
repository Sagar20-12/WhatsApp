import React from 'react';
import './StarredPage.css';

const StarredPage = () => {
  return (
    <div className="starred-page">
      <div className="starred-header">
        <h2>Starred Messages</h2>
      </div>
      
      <div className="starred-content">
        <div className="starred-message">
          <div className="starred-avatar">R</div>
          <div className="starred-info">
            <div className="starred-name">Ravi Kumar</div>
            <div className="starred-text">Hi, I'd like to know more about your services.</div>
            <div className="starred-time">Today, 12:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarredPage;
