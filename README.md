# WhatsApp UI Clone

A React-based WhatsApp desktop UI clone that replicates the look and feel of WhatsApp for Windows.

## Features

- **Exact WhatsApp UI**: Replicates the exact layout and design of WhatsApp desktop
- **Interactive Elements**: All icons and buttons are clickable
- **Chat Data**: Uses real chat data from payload files
- **Responsive Design**: Maintains WhatsApp's responsive layout
- **Search Functionality**: Search through chats
- **Message Display**: Shows actual conversations from the payload data

## Chat Data

The app displays chat conversations based on the payload files:
- **Ravi Kumar**: Service inquiry conversation
- **Neha Joshi**: Home decor inquiry conversation
- **Other chats**: Various other conversations with different message statuses

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Left navigation sidebar
│   ├── ChatList.js         # Chat list with search
│   ├── MainContent.js      # Main content area
│   ├── WelcomeScreen.js    # Welcome screen
│   └── ChatWindow.js       # Chat conversation window
├── data/
│   └── chatData.js         # Chat data from payloads
├── App.js                  # Main app component
└── index.js               # App entry point
```

## Features Implemented

- ✅ Three-column layout (Sidebar, Chat List, Main Content)
- ✅ WhatsApp green color scheme
- ✅ Interactive sidebar with navigation icons
- ✅ Chat list with search functionality
- ✅ Message status indicators (✓, ✓✓)
- ✅ Unread message badges
- ✅ Welcome screen with WhatsApp branding
- ✅ Chat window with message bubbles
- ✅ Real chat data from payload files
- ✅ Responsive design
- ✅ Hover effects and transitions

## Technologies Used

- React 18
- CSS3 with Flexbox
- Modern JavaScript (ES6+)
- WhatsApp Web Design System

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is for educational purposes only.
