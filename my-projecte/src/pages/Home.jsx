import { useEffect, useState } from "react";
import "../assets/css/home/HOstyler.css";

// converte SOMENTE se vier em formato ISO
function formatarDataSeNecessario(data) {
  if (!data) return "";

  // se já estiver no formato BR
  if (data.includes("/")) return data;

  // se vier ISO: YYYY-MM-DD
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

function Home() {
  const [dashboards, setDashboards] = useState([]);
  const [search, setSearch] = useState("");

  // Carrega dashboards do localStorage
  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("dashboards")) || [];
    setDashboards(dados);
  }, []);

  // Filtra pelo nome e pega os 4 últimos
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

            {item.imagem && (
              <img
                src={item.imagem}
                alt={item.nome}
                className="card-img"
              />
            )}

            <div className="card-info">
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>

              {item.data && (
                <small className="data">
                  {formatarDataSeNecessario(item.data)}
                </small>
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

        {dashboardsFiltrados.length === 0 && (
          <p className="vazio">Nenhum dashboard encontrado.</p>
        )}
      </div>
    </main>
  );
}

export default Home;
