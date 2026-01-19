import Nav from "./NavDesktop"; // ajuste o caminho se necessário
import logo from "../assets/imgs/iconDashboard.png"; // ajuste o caminho se necessário

function Header({ onOpenMenu, theme, onToggleTheme }) {
    return (
        <header className="header">
            {/* ESQUERDA: Logo + texto */}
            <div className="logo-container">
                <img
                    id="imgICON"
                    src={logo}
                    alt="Logo"
                />

                <div className="logo-texto">
                    <h1>Dashboards Line</h1>
                </div>
            </div>

            {/* 🔥 NAV reutilizado aqui */}
            <Nav />

            {/* DIREITA: botões */}
            <div className="header-actions">
                <button id="menuBtn" onClick={onOpenMenu}>
                    ☰
                </button>

                <div id="temaBtn" onClick={onToggleTheme}>
                    {/* Lua */}
                    <span className="icon moon">
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path
                                d="M21 12.79A9 9 0 1111.21 3 
                                   7 7 0 0021 12.79z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>

                    {/* Sol */}
                    <span className="icon sun">
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="5" fill="currentColor" />
                            <g stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="1" x2="12" y2="4" />
                                <line x1="12" y1="20" x2="12" y2="23" />
                                <line x1="1" y1="12" x2="4" y2="12" />
                                <line x1="20" y1="12" x2="23" y2="12" />
                                <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
                                <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
                                <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
                                <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
                            </g>
                        </svg>
                    </span>

                    <div className="circle"></div>
                </div>
            </div>

        </header>
    );
}

export default Header;
