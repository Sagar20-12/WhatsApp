import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import MainContent from './components/MainContent';
import DarkModeToggle from './components/DarkModeToggle';
import { chatData } from './data/chatData';
import './App.css';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [activeSidebarItem, setActiveSidebarItem] = useState('chats');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode class to body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  const handleSidebarItemClick = (item) => {
    setActiveSidebarItem(item);
    // Clear selected chat when switching to different sections
    if (item !== 'chats') {
      setSelectedChat(null);
    }
  };

    return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar 
        activeItem={activeSidebarItem} 
        onItemClick={handleSidebarItemClick} 
        isDarkMode={isDarkMode}
        onDarkModeToggle={handleDarkModeToggle}
      />
      <ChatList 
        chats={chatData} 
        selectedChat={selectedChat} 
        onChatSelect={handleChatSelect}
        show={true}
        isDarkMode={isDarkMode}
      />
      <MainContent 
        selectedChat={selectedChat} 
        activeSidebarItem={activeSidebarItem}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
