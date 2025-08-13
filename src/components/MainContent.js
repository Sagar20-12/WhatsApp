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
        return <CallsPage isDarkMode={isDarkMode} />;
      case 'videocall':
        return <CallsPage isDarkMode={isDarkMode} />;
      case 'status':
        return <StatusPage isDarkMode={isDarkMode} />;
      case 'channels':
        return <ChannelsPage isDarkMode={isDarkMode} />;
      case 'starred':
        return <StarredPage isDarkMode={isDarkMode} />;
      case 'archive':
        return <ArchivePage isDarkMode={isDarkMode} />;
      case 'settings':
        return <SettingsPage isDarkMode={isDarkMode} />;
      case 'profile':
        return <ProfilePage isDarkMode={isDarkMode} />;
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
