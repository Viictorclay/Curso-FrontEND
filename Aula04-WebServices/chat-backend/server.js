import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("✅ Usuário conectado:", socket.id);

    // Entrar numa sala específica
    socket.on("join_room", (room) => {
        socket.join(room);
        console.log(`👤 Usuário ${socket.id} entrou na sala ${room}`);
    });

    // Receber e emitir mensagem
    socket.on("send_message", async (data) => {
        console.log("📤 Mensagem recebida no servidor:", data);

        // Lista sockets presentes na sala para debug
        try {
            const socketsNaSala = await io.in(data.room).allSockets();
            console.log(`👥 Sockets na sala ${data.room}:`, Array.from(socketsNaSala));
        } catch (err) {
            console.error('❌ Erro obtendo sockets na sala:', err);
        }

        // Emitir para todos na sala
        io.to(data.room).emit("receive_message", data);
        console.log(`📨 Emitido 'receive_message' para a sala ${data.room}`);
    });

    socket.on("disconnect", () => {
        console.log("❌ Usuário desconectado:", socket.id);
    });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
