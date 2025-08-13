import React, { useState } from 'react';
import './ChatWindow.css';

const ChatWindow = ({ chat, isDarkMode = false, onBack }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`chat-window ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="chat-header-main">
        {/* Back button for mobile */}
        <button 
          className="back-button" 
          onClick={onBack}
          title="Back to chats"
        >
          ←
        </button>
        
        <div className="chat-avatar">
          {chat.avatar}
        </div>
        <div className="chat-info">
          <div className="chat-name">{chat.name}</div>
          <div className="chat-status-text">online</div>
        </div>
        <div className="chat-actions">
          <span className="chat-action-icon" title="Video call">📹</span>
          <span className="chat-action-icon" title="Voice call">📞</span>
          <span className="chat-action-icon" title="Search">🔍</span>
          <span className="chat-action-icon" title="More">⋮</span>
        </div>
      </div>
      
      <div className="chat-messages">
        {chat.messages && chat.messages.length > 0 ? (
          chat.messages.map((message) => (
            <div key={message.id} className={`message ${message.type}`}>
              <div className="message-bubble">
                {message.text}
              </div>
              <div className="message-time">
                {message.timestamp}
              </div>
            </div>
          ))
        ) : (
          <div className="no-messages">
            <p>No messages yet. Start a conversation!</p>
          </div>
        )}
      </div>
      
      {/* Message Input Dock */}
      <div className="message-input-dock">
        <div className="input-container">
          <span className="input-icon" title="Emoji">😊</span>
          <span className="input-icon" title="Attach">📎</span>
          <input
            type="text"
            className="message-input"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <span className="input-icon" title="Voice message">🎤</span>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
