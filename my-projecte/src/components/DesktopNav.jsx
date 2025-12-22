import { Link } from "react-router-dom";

function DesktopNav() {
    return (
        <nav id="desktopNav">
            <ul>
                <li>
                    <Link to="/" className="nav-link">
                        🏠 Início
                    </Link>
                </li>
                <li>
                    <Link to="/recentes" className="nav-link">
                        📌 Recentes
                    </Link>
                </li>
                <li>
                    <Link to="/favoritos" className="nav-link">
                        ⭐ Favoritos
                    </Link>
                </li>
                <li>
                    <Link to="/adicionar" className="nav-link">
                        📊 Adicionar DashBoard
                    </Link>
                </li>
                <li>
                    <Link to="/todos" className="nav-link">
                        📁 Todos os Dashboards
                    </Link>
                </li>
                <li>
                    <Link to="/contato" className="nav-link">
                        📞 Contato
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default DesktopNav;
