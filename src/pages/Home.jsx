import React, { useEffect, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { socket } from '../socket';

const Home = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('🟢 Connected to socket server:', socket.id);
    });

    socket.on('receive-message', (msg) => {
      setMessages((prev) => [...prev, { msg, self: false }]);
    });

    return () => {
      socket.off('receive-message');
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() === "") return;
    socket.emit("send-message", input);
    setMessages((prev) => [...prev, { msg: input, self: true }]);
    setInput("");
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-1/4 w-full bg-gray-800 p-4 flex flex-col items-start">
        <div className="flex items-center gap-2 mb-6">
          <FaUserCircle size={24} />
          <h3 className="text-lg font-semibold">User</h3>
        </div>
        <button className="bg-gray-200 hover:bg-gray-300 text-black w-full py-2 rounded text-sm font-medium">
          New Chat +
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col p-4">
        {/* Header */}
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md mb-2">
          <FaUserCircle size={20} />
          <h3 className="text-lg font-medium">Chat</h3>
        </div>

        {/* Messages Display */}
        <div className="flex-1 overflow-y-auto p-3 rounded mb-3 custom-scrollbar">
          {messages.map((item, i) => (
            <div key={i} className={`mb-2 ${item.self ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block px-4 py-2 rounded-xl max-w-xs break-words ${
                item.self ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'
              }`}>
                {item.msg}
              </span>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 h-12 rounded-md px-4 bg-gray-800 focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="text-3xl text-blue-400 hover:text-blue-600 transition"
          >
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
