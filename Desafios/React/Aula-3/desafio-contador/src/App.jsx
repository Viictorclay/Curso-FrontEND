import { useState, useEffect } from 'react'
export default function App() { 
  const [valor, setValor] = useState(0);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    setMensagem(`Valor mudou para: ${valor}`);
  }, [valor]);

  return (
    <div className='conteudo' >
      <div>
        <h1>Contador</h1>

        <span>{mensagem}</span>

        <div>
          <button onClick={() => setValor(valor + 1)}>+</button>
          <button onClick={() => setValor(valor - 1)}>-</button>
          <button onClick={() => setValor(0)}>Reset</button>
        </div>

      </div>

    </div>
  )
}