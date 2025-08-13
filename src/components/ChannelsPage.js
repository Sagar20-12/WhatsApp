import React from 'react';
import './ChannelsPage.css';

const ChannelsPage = () => {
  return (
    <div className="channels-page">
      <div className="channels-header">
        <h2>Channels</h2>
        <div className="channels-actions">
          <span className="channels-action-icon" title="New channel">➕</span>
        </div>
      </div>
      
      <div className="channels-content">
        <div className="channels-section">
          <div className="channels-section-title">Followed</div>
          <div className="channel-item">
            <div className="channel-avatar">📰</div>
            <div className="channel-info">
              <div className="channel-name">Tech News</div>
              <div className="channel-description">Latest technology updates</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelsPage;
