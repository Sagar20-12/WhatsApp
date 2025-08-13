import React from 'react';
import './ArchivePage.css';

const ArchivePage = () => {
  return (
    <div className="archive-page">
      <div className="archive-header">
        <h2>Archived</h2>
      </div>
      
      <div className="archive-content">
        <div className="archive-chat">
          <div className="archive-avatar">A</div>
          <div className="archive-info">
            <div className="archive-name">Archived Chat</div>
            <div className="archive-message">Last message from archived chat</div>
            <div className="archive-time">Yesterday</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;
