import React from 'react';
import WhatsAppHeader from './WhatsAppHeader';
import './ProfilePage.css';

const ProfilePage = () => {
  const profileData = {
    name: "Sagar Singh Raghav",
    phone: "+91 98765 43210",
    avatar: "S",
    about: "Hey there! I'm using WhatsApp.",
    joined: "January 2020"
  };

  return (
    <div className="profile-page">
      <WhatsAppHeader title="Profile" showIcons={false} />
      
      <div className="profile-content">
        <div className="profile-avatar-section">
          <div className="profile-avatar-large">
            {profileData.avatar}
          </div>
          <div className="profile-name">{profileData.name}</div>
          <div className="profile-phone">{profileData.phone}</div>
        </div>
        
        <div className="profile-details">
          <div className="profile-section">
            <div className="profile-section-title">About</div>
            <div className="profile-section-content">
              {profileData.about}
            </div>
          </div>
          
          <div className="profile-section">
            <div className="profile-section-title">Joined</div>
            <div className="profile-section-content">
              {profileData.joined}
            </div>
          </div>
        </div>
        
        <div className="profile-actions">
          <div className="profile-action-item">
            <span className="profile-action-icon">📝</span>
            <span className="profile-action-text">Edit profile</span>
          </div>
          <div className="profile-action-item">
            <span className="profile-action-icon">🔒</span>
            <span className="profile-action-text">Privacy</span>
          </div>
          <div className="profile-action-item">
            <span className="profile-action-icon">💬</span>
            <span className="profile-action-text">Chats</span>
          </div>
          <div className="profile-action-item">
            <span className="profile-action-icon">📞</span>
            <span className="profile-action-text">Calls</span>
          </div>
          <div className="profile-action-item">
            <span className="profile-action-icon">📱</span>
            <span className="profile-action-text">Devices</span>
          </div>
          <div className="profile-action-item">
            <span className="profile-action-icon">🔐</span>
            <span className="profile-action-text">Two-step verification</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
