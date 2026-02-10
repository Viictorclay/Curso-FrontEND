import React, { useState } from "react";
import Chat from "./components/chat";
import Login from "./components/Login";

function App() {
  const [usuarioAtual, setUsuarioAtual] = useState(null);
  const [outraPessoa, setOutraPessoa] = useState(null);

  function handleLogin(user, other) {
    setUsuarioAtual(user);
    setOutraPessoa(other);
  }

  return (
    <div>
      {usuarioAtual && outraPessoa ? (
        <Chat usuarioAtual={usuarioAtual} outraPessoa={outraPessoa} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
