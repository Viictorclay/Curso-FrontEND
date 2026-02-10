import { Server } from "socket.io";

const io = new Server(3001, {
  cors: {
    origin: "*",
  },
});

console.log("✅ Servidor Socket.IO rodando na porta 3001");

io.on("connection", (socket) => {
    console.log("🟢 Usuário conectado:", socket.id);

    socket.on("mensagem", (msg) => {
        console.log("📩 Mensagem recebida:", msg);

        // Envia a mensagem para todos os clientes conectados
        io.emit("mensagem", msg);
    });

    socket.on("disconnect", () => {
        console.log("🔴 Usuário desconectado:", socket.id);
    });
});