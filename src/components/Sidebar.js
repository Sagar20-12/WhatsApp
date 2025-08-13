import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import './Sidebar.css';

const Sidebar = ({ activeItem, onItemClick, isDarkMode = false, onDarkModeToggle }) => {
  const topSidebarItems = [
    { id: 'whatsapp', icon: '💬', label: 'WhatsApp' },
    { id: 'menu', icon: '☰', label: 'Menu' },
    { id: 'chats', icon: '💬', label: 'Chats', badge: 8 },
    { id: 'calls', icon: '📞', label: 'Calls' },
    { id: 'videocall', icon: '📹', label: 'Video Call' },
    { id: 'status', icon: '⭕', label: 'Status' },
    { id: 'channels', icon: '📢', label: 'Channels' }
  ];

  const bottomSidebarItems = [
    { id: 'starred', icon: '⭐', label: 'Starred' },
    { id: 'archive', icon: '📦', label: 'Archive' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
    { id: 'profile', icon: '👤', label: 'Profile' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        {topSidebarItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-icon ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => onItemClick(item.id)}
            title={item.label}
          >
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            {item.badge && (
              <div className="sidebar-badge">{item.badge}</div>
            )}
          </div>
        ))}
      </div>
      
      <div className="sidebar-bottom">
        {bottomSidebarItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-icon ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => onItemClick(item.id)}
            title={item.label}
          >
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
          </div>
        ))}
        
        {/* Dark Mode Toggle */}
        <div className="sidebar-dark-mode-toggle">
          <DarkModeToggle 
            isDarkMode={isDarkMode} 
            onToggle={onDarkModeToggle} 
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
