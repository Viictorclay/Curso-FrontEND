import { useEffect, useState } from "react";
import "../assets/css/favoritos/styler.css";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("dashboards")) || [];
    const apenasFavoritos = dados.filter(
      (item) => item.favorito === true
    );
    setFavoritos(apenasFavoritos);
  }, []);

  function removerFavorito(index) {
    const dashboards =
      JSON.parse(localStorage.getItem("dashboards")) || [];

    const dashboardRemovido = favoritos[index];

    const dashboardsAtualizados = dashboards.map((item) =>
      item === dashboardRemovido
        ? { ...item, favorito: false }
        : item
    );

    localStorage.setItem(
      "dashboards",
      JSON.stringify(dashboardsAtualizados)
    );

    setFavoritos(
      favoritos.filter((_, i) => i !== index)
    );
  }

  return (
    <div className="conteudo">
      <h2>⭐ Favoritos</h2>
      <p>Seus dashboards favoritos aparecem aqui.</p>

      {favoritos.length === 0 && (
        <p className="vazio">Nenhum dashboard favoritado.</p>
      )}

      {favoritos.map((item, index) => (
        <div key={index} className="dashboard-card">
          {item.imagem && (
            <img
              src={item.imagem}
              alt={item.nome}
              className="dashboard-img"
            />
          )}

          <div className="dashboard-header">
            <h3>{item.nome}</h3>

            <span
              className="estrela ativa"
              onClick={() => removerFavorito(index)}
              title="Remover dos favoritos"
            >
              ★
            </span>
          </div>

          <p>{item.descricao}</p>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Acessar Dashboard
          </a>

          {item.data && (
            <small className="dataFAV"> {item.data}</small>
          )}
        </div>
      ))}
    </div>
  );
}

export default Favoritos;
