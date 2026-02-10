import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

// Logs úteis para debug da conexão socket no cliente
socket.on('connect', () => {
	console.log('🔌 Socket cliente conectado:', socket.id);
});

socket.on('connect_error', (err) => {
	console.error('⚠️ Erro ao conectar socket:', err);
});

socket.on('disconnect', (reason) => {
	console.log('❌ Socket cliente desconectado:', reason);
});

export default socket;