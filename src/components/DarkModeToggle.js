import React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <div className="dark-mode-toggle">
      <span className="toggle-icon">☀️</span>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={onToggle}
        />
        <span className="toggle-slider"></span>
      </label>
      <span className="toggle-icon">🌙</span>
    </div>
  );
};

export default DarkModeToggle;
