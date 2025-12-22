function Home() {
    return (
        <main className="conteudo">
            <input type="text" id="search" placeholder="🔍 Buscar dashboard..."/>

            <div className="cards">
                <div className="card">
                    <h3>Dashboard 1</h3>
                    <p>Anáçises gerais do mês</p>
                </div>
                <div className="card">
                    <h3>Dashboard 2</h3>
                    <p>Desempenho das vendas</p>
                </div>
                <div className="card">
                    <h3>Dashboard 3</h3>
                    <p>Indicadores financeiros</p>
                </div>
            </div>
        </main>
    )
}

export default Home;
