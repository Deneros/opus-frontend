import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import Chat from '../../components/chat/Chat';
import MenuBar from '../../components/menu/MenuBar';


const SocialPage = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL; 
  const [contacts, setContacts] = useState([
    { id: 1, chatId: "abcd1234", name: 'Jennifer Listy', status: 'Active Now', avatar: 'https://via.placeholder.com/40' },
    { id: 2, chatId: "abcd4312", name: 'Helen Pool', status: 'Offline', avatar: 'https://via.placeholder.com/40' },
    { id: 3, chatId: "1234abcd", name: 'Marcel Rubio', status: 'Just Now', avatar: 'https://via.placeholder.com/40' },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     const response = await fetch('http://localhost:8080/contacts'); // Cambiar por tu API Gateway URL
  //     const data = await response.json();
  //     setContacts(data);
  //   };

  //   fetchContacts();
  // }, []);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
  };



  return (
    <div className="flex flex-col w-full h-full bg-gray-900 text-white">
      {/* MenuBar en la parte superior */}
      <MenuBar contact={selectedContact} />

      <div className="flex flex-1">
        {/* Lista de Contactos */}
        <div className="w-1/3 h-full p-6 overflow-y-auto">
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => handleSelectContact(contact)}
                className={`p-4 rounded-lg cursor-pointer transition flex items-center gap-4 ${
                  selectedContact && selectedContact.id === contact.id
                    ? 'bg-purple-700'
                    : 'bg-gray-800 hover:bg-purple-700'
                }`}
              >
                <img
                  src={contact.avatar}
                  alt="contact-avatar"
                  className="rounded-full w-12 h-12"
                />
                <div className="flex-1">
                  <h3 className="font-bold">{contact.name}</h3>
                  <p className="text-sm text-gray-400">{contact.status}</p>
                </div>
                <FaCircle
                  className={`text-xs ${contact.status === 'Active Now' ? 'text-green-500' : 'text-gray-500'}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Caja del Chat */}
        <div className="w-2/3 h-full flex flex-col">
          <Chat contact={selectedContact} />
        </div>
      </div>
    </div>
  );
};

export default SocialPage;