import { useEffect, useState } from "react";
import "../assets/css/todosDashboards/TDstyler.css";

// converte a data apenas se vier no formato ISO (YYYY-MM-DD)
function formatarDataSeNecessario(data) {
  if (!data) return "";

  // se já estiver no formato brasileiro
  if (data.includes("/")) return data;

  // se vier ISO
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

function TodosDashboards() {
  const [dashboards, setDashboards] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    nome: "",
    descricao: "",
    link: ""
  });

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("dashboards")) || [];
    setDashboards(dados);
  }, []);

  function excluirDashboard(index) {
    if (!window.confirm("Deseja excluir este dashboard?")) return;

    const novosDashboards = dashboards.filter((_, i) => i !== index);

    localStorage.setItem(
      "dashboards",
      JSON.stringify(novosDashboards)
    );
    setDashboards(novosDashboards);
  }

  function iniciarEdicao(index) {
    setEditIndex(index);
    setEditData(dashboards[index]);
  }

  function salvarEdicao(index) {
    const novosDashboards = dashboards.map((item, i) =>
      i === index ? { ...item, ...editData } : item
    );

    localStorage.setItem(
      "dashboards",
      JSON.stringify(novosDashboards)
    );

    setDashboards(novosDashboards);
    setEditIndex(null);
  }

  function toggleFavorito(index) {
    const novosDashboards = dashboards.map((item, i) =>
      i === index
        ? { ...item, favorito: !item.favorito }
        : item
    );

    localStorage.setItem(
      "dashboards",
      JSON.stringify(novosDashboards)
    );

    setDashboards(novosDashboards);
  }

  return (
    <div className="conteudo">
      <h2>📁 Todos os Dashboards</h2>

      {dashboards.length === 0 && (
        <p className="vazio">Nenhum dashboard cadastrado.</p>
      )}

      {dashboards.map((item, index) => (
        <div key={index} className="dashboard-card">
          {item.imagem && (
            <img
              src={item.imagem}
              alt={item.nome}
              className="dashboard-img"
            />
          )}

          {editIndex === index ? (
            <div className="edicao">
              <input
                type="text"
                value={editData.nome}
                onChange={(e) =>
                  setEditData({ ...editData, nome: e.target.value })
                }
              />

              <input
                type="text"
                value={editData.descricao}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    descricao: e.target.value
                  })
                }
              />

              <input
                type="text"
                value={editData.link}
                onChange={(e) =>
                  setEditData({ ...editData, link: e.target.value })
                }
              />

              <div className="acoes">
                <button onClick={() => salvarEdicao(index)}>
                  💾 Salvar
                </button>
                <button onClick={() => setEditIndex(null)}>
                  ❌ Cancelar
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="dashboard-header">
                <h3>{item.nome}</h3>

                <span
                  className={`estrela ${item.favorito ? "ativa" : ""}`}
                  onClick={() => toggleFavorito(index)}
                  title="Favoritar"
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
                <small className="data">
                  {formatarDataSeNecessario(item.data)}
                </small>
              )}

              <div className="acoes">
                <button 
                  className="btn-editar"
                  onClick={() => iniciarEdicao(index)}
                  >
                  ✏️ Editar
                </button>

                <button
                  className="btn-excluir"
                  onClick={() => excluirDashboard(index)}
                >
                  🗑 Excluir
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodosDashboards;
