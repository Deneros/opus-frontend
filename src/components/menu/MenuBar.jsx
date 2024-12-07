import React from 'react';
import { FaSearch, FaEdit } from 'react-icons/fa';

const MenuBar = ({ contact }) => {
  return (
    <div className="flex items-center p-4 bg-gray-800 shadow-md">
      {/* Sección del Buscador de Mensajes (tamaño correspondiente a ContactList) */}
      <div className="w-1/3 flex items-center gap-4">
        <FaSearch className="text-white text-xl cursor-pointer" />
        <input
          type="text"
          placeholder="Buscar en tus mensajes"
          className="flex-1 p-2 rounded-lg bg-gray-700 border-none outline-none text-white placeholder-gray-400"
        />
      </div>

      {/* Sección de Información del Contacto Seleccionado (tamaño correspondiente a Chat) */}
      <div className="w-2/3 flex items-center justify-between ml-6">
        {contact ? (
          <div className="flex items-center gap-4">
            <img
              src={contact.avatar}
              alt="contact-avatar"
              className="rounded-full w-10 h-10"
            />
            <div>
              <h2 className="font-bold text-lg text-white">{contact.name}</h2>
              <p className="text-sm text-green-400">{contact.status}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-400">Selecciona un contacto para comenzar a chatear</p>
        )}

        {/* Icono de Acción (Editar) */}
        {contact && (
          <FaEdit className="text-white text-xl cursor-pointer hover:text-gray-400" />
        )}
      </div>
    </div>
  );
};

export default MenuBar;
