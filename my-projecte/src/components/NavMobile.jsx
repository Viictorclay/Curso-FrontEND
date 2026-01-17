import { Link } from "react-router-dom";

function Nav({ open, onOpenMenu }) {
    return (
        <>
            <nav id="sideMenu" className={open ? "open" : ""}>
                <button id="closeMenu" onClick={onOpenMenu}>
                    ✖
                </button>

                <h2>Menu</h2>
                <ul>
                    <li>
                        <Link to="/" onClick={onOpenMenu} className="nav-link">
                            🏠 Início
                        </Link>
                    </li>
                    <li>
                        <Link to="/favoritos" onClick={onOpenMenu} className="nav-link">
                            ⭐ Favoritos
                        </Link>
                    </li>
                    <li>
                        <Link to="/adicionar" onClick={onOpenMenu} className="nav-link">
                            📊 Adicionar DashBoard
                        </Link>
                    </li>
                    <li>
                        <Link to="/todos" onClick={onOpenMenu} className="nav-link">
                            📁 Todos os Dashboards
                        </Link>
                    </li>
                    <li>
                        <Link to="/contato" onClick={onOpenMenu} className="nav-link">
                            📞 Contato
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Clique fora para fechar */}
            {open && <div className="overlay" onClick={onOpenMenu} />}
        </>
    );
}

export default Nav;
