import React, { useState, useEffect } from 'react';
import Bubble from "../bubble/Bubble";
import connectWebSocket from '../../services/WebSocketClient';

const Chat = ({ contact }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [client, setClient] = useState(null);
  const [messages, setMessages] = useState([
    {
      message: 'Hola, ¿cómo estás?',
      name: 'Carlos',
      time: new Date().toISOString(),
      type: 'text',
      isUser: false,
    },
    {
      message: '¡Hola! Estoy bien, ¿y tú?',
      name: 'Usuario',
      time: new Date().toISOString(),
      type: 'text',
      isUser: true,
    },
    {
      message: 'Te adjunto el documento para la revisión.',
      name: 'Carlos',
      time: new Date().toISOString(),
      type: 'document',
      isUser: false,
    },
    {
      message: 'Gracias, lo revisaré.',
      name: 'Usuario',
      time: new Date().toISOString(),
      type: 'text',
      isUser: true,
    },
  ]);

  useEffect(() => {
      if (contact) {
          const stompClient = connectWebSocket(contact.chatId, (newMessage) => {
              setMessages((prevMessages) => [...prevMessages, newMessage]);
          });

          setClient(stompClient);

          return () => stompClient.deactivate();
      }
  }, [contact]);

  const handleSendMessage = () => {
    if (client && inputMessage) {
        const messageData = {
            sender: 'Usuario',
            content: inputMessage,
            timestamp: new Date().toISOString(),
        };

        client.publish({
            destination: `/app/chat.sendMessage/${contact.chatId}`,
            body: JSON.stringify(messageData),
        });

        setMessages((prevMessages) => [...prevMessages, messageData]);
        setInputMessage('');
    }
};

  if (!contact) {
    return (
      <div className="flex-1 p-6 flex items-center justify-center text-gray-400">
        <p>Selecciona un contacto para comenzar a chatear.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full">

      {/* Área de Mensajes */}
      <div className="flex-1 p-4 mb-4 overflow-y-auto rounded-lg">
        {messages.map((msg, index) => (
          <Bubble
            key={index}
            message={msg.message}
            name={msg.name}
            time={msg.time}
            type={msg.type}
            isUser={msg.isUser}
          />
        ))}
      </div>

      {/* Input de Mensajes */}
      <div className="p-4 shadow-inner rounded-t-lg flex items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 p-2 rounded-lg bg-gray-700 border-none outline-none text-white placeholder-gray-400 mr-4"
        />
        <button
          onClick={handleSendMessage}
          className="p-3 bg-blue-500 rounded-full hover:bg-blue-600"
        >
          <i className="fas fa-paper-plane text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;
