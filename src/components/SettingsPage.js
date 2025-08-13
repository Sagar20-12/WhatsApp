import React from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <div className="settings-header">
        <h2>Settings</h2>
      </div>
      
      <div className="settings-content">
        <div className="settings-section">
          <div className="settings-item">
            <span className="settings-icon">🔔</span>
            <span className="settings-text">Notifications</span>
          </div>
          <div className="settings-item">
            <span className="settings-icon">🔒</span>
            <span className="settings-text">Privacy</span>
          </div>
          <div className="settings-item">
            <span className="settings-icon">💬</span>
            <span className="settings-text">Chats</span>
          </div>
          <div className="settings-item">
            <span className="settings-icon">📞</span>
            <span className="settings-text">Calls</span>
          </div>
          <div className="settings-item">
            <span className="settings-icon">💾</span>
            <span className="settings-text">Storage and data</span>
          </div>
          <div className="settings-item">
            <span className="settings-icon">🎨</span>
            <span className="settings-text">App theme</span>
          </div>
          <div className="settings-item">
            <span className="settings-icon">🌐</span>
            <span className="settings-text">Language</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
