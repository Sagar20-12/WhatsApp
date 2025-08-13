import React from 'react';
import './WhatsAppHeader.css';

const WhatsAppHeader = ({ title = "Chats", showIcons = true, onNewContact, onFilter, isDarkMode = false }) => {
  return (
    <div className={`whatsapp-header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="whatsapp-header-left">
        <div className="whatsapp-title">WhatsApp</div>
        {title && <h2>{title}</h2>}
      </div>
      {showIcons && (
        <div className="whatsapp-header-icons">
          {onNewContact && (
            <span 
              className="whatsapp-header-icon" 
              title="New contact" 
              onClick={onNewContact}
            >
              ✏️
            </span>
          )}
          {onFilter && (
            <span 
              className="whatsapp-header-icon" 
              title="Filter"
              onClick={onFilter}
            >
              ☰
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default WhatsAppHeader;
