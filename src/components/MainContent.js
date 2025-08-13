import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import ChatWindow from './ChatWindow';
import CallsPage from './CallsPage';
import StatusPage from './StatusPage';
import ChannelsPage from './ChannelsPage';
import StarredPage from './StarredPage';
import ArchivePage from './ArchivePage';
import SettingsPage from './SettingsPage';
import ProfilePage from './ProfilePage';
import './MainContent.css';

const MainContent = ({ selectedChat, activeSidebarItem, isDarkMode = false, onBack }) => {
  const renderContent = () => {
    if (selectedChat) {
      return <ChatWindow chat={selectedChat} isDarkMode={isDarkMode} onBack={onBack} />;
    }

    switch (activeSidebarItem) {
      case 'calls':
        return <CallsPage isDarkMode={isDarkMode} onBack={onBack} />;
      case 'videocall':
        return <CallsPage isDarkMode={isDarkMode} onBack={onBack} />;
      case 'status':
        return <StatusPage isDarkMode={isDarkMode} onBack={onBack} />;
      case 'channels':
        return <ChannelsPage isDarkMode={isDarkMode} onBack={onBack} />;
      case 'starred':
        return <StarredPage isDarkMode={isDarkMode} onBack={onBack} />;
      case 'archive':
        return <ArchivePage isDarkMode={isDarkMode} onBack={onBack} />;
      case 'settings':
        return <SettingsPage isDarkMode={isDarkMode} onBack={onBack} />;
      case 'profile':
        return <ProfilePage isDarkMode={isDarkMode} onBack={onBack} />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="main-content">
      {renderContent()}
    </div>
  );
};

export default MainContent;
