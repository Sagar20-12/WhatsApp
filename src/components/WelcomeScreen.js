import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <div className="welcome-icon">
        <span style={{ fontSize: '250px', color: '#8696a0' }}>💬</span>
      </div>
      <h1 className="welcome-title">WhatsApp for Windows</h1>
      <p className="welcome-description">
        Send and receive messages without keeping your phone online. Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
      </p>
      <div className="security-info">
        <span className="security-icon">🔒</span>
        <span>End-to-end encrypted</span>
      </div>
    </div>
  );
};

export default WelcomeScreen;
