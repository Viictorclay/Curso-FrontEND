import { useState } from "react";
import favicon96x96  from "../assets/imgs/favicon-96x96.png";

function Login({ onLogin }) {
    const [usuarioAtual, setUsuarioAtual] = useState("");
    const [outraPessoa, setOutraPessoa] = useState("");

    function entrarNoChat() {
        if (!usuarioAtual.trim() || !outraPessoa.trim()) {
            alert("Preencha os dois nomes!");
            return;
        }

        onLogin(usuarioAtual, outraPessoa);
    }

    return (
        <div style={styles.wrapper}>
            
            <img 
            src={favicon96x96} 
            alt="favicon" 
            style={styles.icon}
            />

            <div style={styles.container}>
            <h2>Entrar no Chat</h2>

            <input
                style={styles.input}
                type="text"
                placeholder="Seu nome"
                value={usuarioAtual}
                onChange={(e) => setUsuarioAtual(e.target.value)}
            />

            <input
                style={styles.input}
                type="text"
                placeholder="Nome da outra pessoa"
                value={outraPessoa}
                onChange={(e) => setOutraPessoa(e.target.value)}
            />

            <button style={styles.button} onClick={entrarNoChat}>
                Entrar
            </button>

            </div>
        </div>
    );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px"
  },

  icon: {
    width: "96px",
    height: "96px",
    marginBottom: "20px",
  },

  container: {
    width: "300px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },

  input: {
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #aaa",
    padding: "10px",
    width: "100%",
    boxSizing: "border-box"
  },

  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },
};

export default Login;
