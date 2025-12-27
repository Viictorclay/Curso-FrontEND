import { useState } from "react";
import "../assets/css/adicionarDashboard/styler.css";

function AdicionarDashboard() {
  const [imagePreview, setImagePreview] = useState(null);

  const [dashboard, setDashboard] = useState({
    nome: "",
    descricao: "",
    link: "",
    data: ""
  });

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) {
      setImagePreview(null);
      return;
    }
    setImagePreview(URL.createObjectURL(file));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const dashboardsSalvos =
      JSON.parse(localStorage.getItem("dashboards")) || [];

    dashboardsSalvos.push({
      ...dashboard,
      imagem: imagePreview
    });

    localStorage.setItem(
      "dashboards",
      JSON.stringify(dashboardsSalvos)
    );

    alert("Dashboard adicionado com sucesso! 🚀");

    // Limpar formulário
    setDashboard({
      nome: "",
      descricao: "",
      link: "",
      data: ""
    });
    setImagePreview(null);
  }

  return (
    <div className="conteudo">
      <h2>Adicionar Dashboard</h2>
      <p>Adicione um novo dashboard preenchendo o formulário abaixo.</p>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Dashboard</legend>

          <div>
            <label>Nome:</label>
            <input
              type="text"
              value={dashboard.nome}
              onChange={(e) =>
                setDashboard({ ...dashboard, nome: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label>Imagem do Dashboard (opcional):</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            {imagePreview && (
              <img
                src={imagePreview}
                alt="preview"
                style={{
                  maxWidth: "100%",
                  marginTop: 8,
                  borderRadius: 8
                }}
              />
            )}
          </div>

          <div>
            <label>Descrição:</label>
            <input
              type="text"
              value={dashboard.descricao}
              onChange={(e) =>
                setDashboard({
                  ...dashboard,
                  descricao: e.target.value
                })
              }
            />
          </div>

          <div>
            <label>Link:</label>
            <input
              type="text"
              value={dashboard.link}
              onChange={(e) =>
                setDashboard({ ...dashboard, link: e.target.value })
              }
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Informações Adicionais</legend>

          <div>
            <label>Data:</label>
            <input
              type="date"
              value={dashboard.data}
              onChange={(e) =>
                setDashboard({ ...dashboard, data: e.target.value })
              }
            />
          </div>
        </fieldset>

        <button className="B-send" type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default AdicionarDashboard;
