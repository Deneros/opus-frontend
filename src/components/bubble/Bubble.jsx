import React from 'react';
import PdfIcon from '../../assets/pdf.png';

function Bubble({ message, name, time, type, isUser }) {
    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    const renderMessage = () => {
        if (type === 'document') {
            return (
                <div className="flex flex-col items-center">
                    <img src={PdfIcon} alt="PDF icon" className="w-10 h-10 mb-2" />
                    <p className="text-center">{message}</p>
                </div>
            );
        }
        return <p>{message}</p>;
    };

    return (
        <div className={`p-4 w-3/4 max-w-xl rounded-lg text-gray-800 flex gap-4 mb-4 ${isUser ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'} ${isUser ? 'ml-auto' : 'mr-auto'}`}>
            <div className="flex-1">
                <h4 className="font-bold">{name}</h4>
                {renderMessage()}
            </div>
            <div className="flex items-end">
                <p className="text-sm">{formatTime(new Date(time))}</p>
            </div>
        </div>
    );
}

export default Bubble;
