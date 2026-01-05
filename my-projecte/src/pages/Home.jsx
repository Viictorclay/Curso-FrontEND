import { useEffect, useState } from "react";
import "../assets/css/home/HOstyler.css";

function Home() {
  const [dashboards, setDashboards] = useState([]);
  const [search, setSearch] = useState("");

  // Carrega dashboards do localStorage
  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("dashboards")) || [];
    setDashboards(dados);
  }, []);

  // Filtra pelo nome e pega os 3 últimos
  const dashboardsFiltrados = dashboards
    .filter(d =>
      d.nome.toLowerCase().includes(search.toLowerCase())
    )
    .slice(-4)
    .reverse();

  return (
    <main className="conteudo">
      {/* INPUT DE BUSCA */}
      <input
        type="text"
        id="search"
        placeholder="🔍 Buscar dashboard..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* CARDS */}
      <div className="cards">
        {dashboardsFiltrados.map((item, index) => (
          <div className="card" key={index}>

            {/* IMAGEM (controlada via CSS) */}
            {item.imagem && (
              <img
                src={item.imagem}
                alt={item.nome}
                className="card-img"
              />
            )}

            {/* INFORMAÇÕES */}
            <div className="card-info">
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>

              {item.data && (
                <small className="data">{item.data}</small>
              )}

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Abrir Dashboard
              </a>
            </div>
          </div>
        ))}

        {/* CASO NÃO TENHA DASHBOARD */}
        {dashboardsFiltrados.length === 0 && (
          <p className="vazio">Nenhum dashboard encontrado.</p>
        )}
      </div>
    </main>
  );
}

export default Home;
