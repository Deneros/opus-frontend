// WebSocketClient.js
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const connectWebSocket = (chatId, onMessageReceived) => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL; 
    const client = new Client({
        webSocketFactory: () => new SockJS(`${BASE_URL}/chat`), 
        debug: (str) => console.log(str), 
        onConnect: () => {
            console.log('Connected to WebSocket');
            client.subscribe(`/topic/chat/${chatId}`, (message) => {
                onMessageReceived(JSON.parse(message.body));
                console.log('Mensaje recibido:', JSON.parse(message.body));
            });
        },
        onStompError: (frame) => {
            console.error('Broker reported error: ' + frame.headers['message']);
            console.error('Additional details: ' + frame.body);
        },
    });

    client.activate(); 
    return client;
};

export default connectWebSocket;
