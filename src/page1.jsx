import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function Page_one() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, time: new Date().toLocaleTimeString() }]);
      setInput('');
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className="chat-message">
              <span>{msg.time}</span>: {msg.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Page_one;
