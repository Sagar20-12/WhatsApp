// Chat data based on the payload files
export const chatData = [
  {
    id: "conv1",
    name: "Ravi Kumar",
    phone: "919937320320",
    avatar: "R",
    lastMessage: "Hi, I'd like to know more about your services.",
    timestamp: "12:00",
    unreadCount: 0,
    messages: [
      {
        id: "msg1",
        text: "Hi, I'd like to know more about your services.",
        timestamp: "12:00",
        type: "received",
        from: "919937320320"
      },
      {
        id: "msg2",
        text: "Hi Ravi! Sure, I'd be happy to help you with that. Could you tell me what you're looking for?",
        timestamp: "12:00",
        type: "sent",
        from: "918329446654"
      }
    ]
  },
  {
    id: "conv2",
    name: "Neha Joshi",
    phone: "929967673820",
    avatar: "N",
    lastMessage: "Hi, I saw your ad. Can you share more details?",
    timestamp: "12:16",
    unreadCount: 0,
    messages: [
      {
        id: "msg1",
        text: "Hi, I saw your ad. Can you share more details?",
        timestamp: "12:16",
        type: "received",
        from: "929967673820"
      },
      {
        id: "msg2",
        text: "Hi Neha! Absolutely. We offer curated home decor pieces—are you looking for nameplates, wall art, or something else?",
        timestamp: "12:17",
        type: "sent",
        from: "918329446654"
      }
    ]
  }
];
