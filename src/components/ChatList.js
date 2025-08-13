import React, { useState } from 'react';
import WhatsAppHeader from './WhatsAppHeader';
import './ChatList.css';

const ChatList = ({ chats, selectedChat, onChatSelect, show, isDarkMode = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewContactModal, setShowNewContactModal] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', phone: '' });

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (message) => {
    if (message.includes('✓✓')) return '✓✓';
    if (message.includes('✓')) return '✓';
    return '';
  };

  const getMessagePreview = (message) => {
    return message.replace('✓✓ ', '').replace('✓ ', '');
  };

  const handleNewContact = () => {
    setShowNewContactModal(true);
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      // Here you would typically add the contact to your data
      console.log('Adding new contact:', newContact);
      setNewContact({ name: '', phone: '' });
      setShowNewContactModal(false);
    }
  };

  const handleCancelContact = () => {
    setNewContact({ name: '', phone: '' });
    setShowNewContactModal(false);
  };

  // Always show chat list
  if (!show) return null;
  
     return (
     <div className="chat-list">
       <WhatsAppHeader 
         title="Chats"
         onNewContact={handleNewContact}
         onFilter={() => console.log('Filter clicked')}
         isDarkMode={isDarkMode}
       />
      
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search or start a new chat"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="chat-items">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${selectedChat?.id === chat.id ? 'active' : ''}`}
            onClick={() => onChatSelect(chat)}
          >
            <div className="chat-avatar">
              {chat.avatar}
            </div>
            
            <div className="chat-content">
              <div className="chat-name">{chat.name}</div>
              <div className="chat-message">
                {getStatusIcon(chat.lastMessage)}
                {getMessagePreview(chat.lastMessage)}
              </div>
            </div>
            
            <div className="chat-right">
              <div className="chat-time">{chat.timestamp}</div>
              <div className="chat-status">
                {chat.unreadCount > 0 && (
                  <div className="unread-badge">{chat.unreadCount}</div>
                )}
              </div>
            </div>
          </div>
                 ))}
       </div>
       
       {/* New Contact Modal */}
       {showNewContactModal && (
         <div className="modal-overlay">
           <div className="modal-content">
             <div className="modal-header">
               <h3>New Contact</h3>
               <span 
                 className="modal-close" 
                 onClick={handleCancelContact}
               >
                 ✕
               </span>
             </div>
             <div className="modal-body">
               <div className="form-group">
                 <label>Name:</label>
                 <input
                   type="text"
                   value={newContact.name}
                   onChange={(e) => setNewContact({...newContact, name: e.target.value})}
                   placeholder="Enter contact name"
                   className="form-input"
                 />
               </div>
               <div className="form-group">
                 <label>Phone Number:</label>
                 <input
                   type="tel"
                   value={newContact.phone}
                   onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                   placeholder="Enter phone number"
                   className="form-input"
                 />
               </div>
             </div>
             <div className="modal-footer">
               <button 
                 className="btn btn-cancel" 
                 onClick={handleCancelContact}
               >
                 Cancel
               </button>
               <button 
                 className="btn btn-add" 
                 onClick={handleAddContact}
               >
                 Add Contact
               </button>
             </div>
           </div>
         </div>
       )}
     </div>
   );
 };

export default ChatList;
