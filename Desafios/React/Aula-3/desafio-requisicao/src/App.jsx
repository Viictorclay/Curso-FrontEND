import { useEffect, useState } from 'react';

export default function App() {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((data) => {
        setDados(data);
        setErro(null)
      })
      .catch(() => {
        setErro('Não foi possível carregar os dados.');
      })
      .finally(() => {
        // Mantém o loader visível por no mínimo 2 segundos
        setTimeout(() => {
          setCarregando(false);
        }, 2000);
      });
  },[]);

  if (carregando) {
    return <p>Carregando...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <div>
      <h1>{dados.title}</h1>
      <p>{dados.body}</p>
    </div>
  );
}