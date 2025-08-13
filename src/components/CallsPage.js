import React from 'react';
import WhatsAppHeader from './WhatsAppHeader';
import './CallsPage.css';

const CallsPage = ({ isDarkMode = false, onBack }) => {
  const callHistory = [
    {
      id: 1,
      name: "Ravi Kumar",
      avatar: "R",
      type: "incoming",
      duration: "2:34",
      timestamp: "Today, 12:00",
      isVideo: false
    },
    {
      id: 2,
      name: "Neha Joshi",
      avatar: "N",
      type: "outgoing",
      duration: "1:45",
      timestamp: "Yesterday, 15:30",
      isVideo: true
    },
    {
      id: 3,
      name: "Ravi Kumar",
      avatar: "R",
      type: "missed",
      duration: "",
      timestamp: "Yesterday, 10:15",
      isVideo: false
    }
  ];

  const getCallIcon = (type, isVideo) => {
    if (type === 'missed') return '❌';
    if (isVideo) return '📹';
    return '📞';
  };

  const getCallTypeColor = (type) => {
    switch (type) {
      case 'incoming': return '#00a884';
      case 'outgoing': return '#00a884';
      case 'missed': return '#f15c6d';
      default: return '#667781';
    }
  };

  return (
    <div className={`calls-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="calls-header">
        {/* Back button for mobile */}
        <button 
          className="back-button" 
          onClick={onBack}
          title="Back to main"
        >
          ←
        </button>
        
        <div className="calls-header-content">
          <h2>Calls</h2>
          <div className="calls-actions">
            <span className="calls-action-icon" title="Create call link">🔗</span>
            <span className="calls-action-icon" title="New call">📞</span>
          </div>
        </div>
      </div>
      
      <div className="calls-list">
        {callHistory.map((call) => (
          <div key={call.id} className="call-item">
            <div className="call-avatar">
              {call.avatar}
            </div>
            <div className="call-content">
              <div className="call-name">{call.name}</div>
              <div className="call-details">
                <span 
                  className="call-icon" 
                  style={{ color: getCallTypeColor(call.type) }}
                >
                  {getCallIcon(call.type, call.isVideo)}
                </span>
                <span className="call-info">
                  {call.type === 'missed' ? 'Missed call' : call.duration}
                </span>
                <span className="call-timestamp">• {call.timestamp}</span>
              </div>
            </div>
            <div className="call-actions">
              <span className="call-action-icon" title="Call">📞</span>
              <span className="call-action-icon" title="Video call">📹</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallsPage;
