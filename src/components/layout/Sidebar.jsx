import React from 'react';
import { FaComments, FaStar, FaCog } from 'react-icons/fa';
import ReactLogo from '../../assets/react.svg'; 

const Sidebar = () => {
  return (
    <div className="w-20 bg-gray-800 flex flex-col items-center py-4 h-screen">
      <div className="mb-8 flex flex-col items-center">
        <img src={ReactLogo} className="w-10 h-10" />
        <p className="text-xs mt-2">Alexa</p>
      </div>
      <div className="space-y-8 flex flex-col items-center">
        {/* Iconos de Navegación */}
        <button className="p-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
          <FaComments className="text-white" size={20} />
        </button>
        <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
          <FaStar className="text-white" size={20} />
        </button>
      </div>
      <div className="mt-auto flex flex-col items-center">
        <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
          <FaCog className="text-white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
