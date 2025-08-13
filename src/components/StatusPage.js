import React from 'react';
import WhatsAppHeader from './WhatsAppHeader';
import './StatusPage.css';

const StatusPage = () => {
  return (
    <div className="status-page">
      <WhatsAppHeader title="Status" showIcons={false} />
      <div className="status-actions">
        <span className="status-action-icon" title="New status">📷</span>
      </div>
      
      <div className="status-content">
        <div className="status-section">
          <div className="status-section-title">Recent updates</div>
          <div className="status-item">
            <div className="status-avatar">R</div>
            <div className="status-info">
              <div className="status-name">Ravi Kumar</div>
              <div className="status-time">Today, 12:00</div>
            </div>
          </div>
        </div>
        
        <div className="status-section">
          <div className="status-section-title">Viewed updates</div>
          <div className="status-item">
            <div className="status-avatar">N</div>
            <div className="status-info">
              <div className="status-name">Neha Joshi</div>
              <div className="status-time">Yesterday, 15:30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
