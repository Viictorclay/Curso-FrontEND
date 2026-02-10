import { useState, useEffect, useRef } from "react";
import socket from "../services/socket";
import favicon96x96 from "../assets/imgs/favicon-96x96.png";

function Chat({ usuarioAtual, outraPessoa }) {
  const [mensagens, setMensagens] = useState([]);
  const [texto, setTexto] = useState("");

  const nomesOrdenados = [usuarioAtual, outraPessoa].sort();
  const room = `chat-${nomesOrdenados[0]}-${nomesOrdenados[1]}`;

  const chatEndRef = useRef(null); // 🔥 referência para scroll automático

  // Scroll automático sempre que mensagens mudarem
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensagens]);

  // Conecta à sala e escuta mensagens
  useEffect(() => {
    console.log(`✅ Tentando entrar na sala: ${room}`);
    socket.emit("join_room", room);

    socket.on("receive_message", (data) => {
      console.log("📨 Mensagem recebida:", data);
      setMensagens((prev) => [...prev, data]);
    });

    socket.on("connect", () => {
      console.log("🔌 Socket conectado:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket desconectado");
    });

    return () => {
      socket.off("receive_message");
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [room]);

  function enviarMensagem() {
    if (texto.trim() === "") return;

    const novaMensagem = {
      autor: usuarioAtual,
      texto,
      hora: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      room,
    };

    console.log("📤 Enviando mensagem:", novaMensagem);
    socket.emit("send_message", novaMensagem);
    setTexto("");
  }

  return (
    <div style={styles.wrapper}>
      <img src={favicon96x96} alt="favicon" style={styles.icon} />

      <div style={styles.container}>
        <h2 style={styles.salaID}>{outraPessoa}</h2>

        {/* Caixa do chat */}
        <div style={styles.chatBox}>
          {mensagens.map((msg, i) => {
            const isMine = msg.autor === usuarioAtual;

            return (
              <div key={i} style={styles.message(isMine)}>
                {msg.texto}
                <div style={styles.time}>{msg.hora}</div>
              </div>
            );
          })}

          {/* 🔽 Marca final do scroll */}
          <div ref={chatEndRef} />
        </div>

        {/* Input + botão lado a lado */}
        <div style={styles.messageRow}>
          <input
            style={styles.messageInput}
            placeholder="Digite sua mensagem..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
          />

          <button style={styles.sendButton} onClick={enviarMensagem}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  icon: {
    width: "96px",
    height: "96px",
  },

  container: {
    width: "300px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },

  salaID: {
    fontSize: "16px",
    marginBottom: "10px",
  },

  chatBox: {
    height: "300px",
    overflowY: "auto",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    background: "#f9f9f9",
    marginBottom: "15px",

    display: "flex",
    flexDirection: "column",
  },

  message: (isMine) => ({
    background: isMine ? "#d1ffd6" : "#e3e3ff",
    padding: "8px 12px",
    marginBottom: "6px",
    borderRadius: "8px",
    maxWidth: "80%",
    alignSelf: isMine ? "flex-end" : "flex-start",
    textAlign: isMine ? "right" : "left",
  }),

  time: {
    fontSize: "10px",
    opacity: 0.6,
    marginTop: "3px",
  },

  messageRow: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    marginTop: "10px",
  },

  messageInput: {
    flex: 1,
    borderRadius: "8px",
    border: "1px solid #aaa",
    padding: "10px",
    boxSizing: "border-box",
  },

  sendButton: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
};

export default Chat;
