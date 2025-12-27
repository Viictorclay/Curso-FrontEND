function Header({ onOpenMenu, theme, onToggleTheme }) {
    return (
        <header>
            <h1>Dashboards Line</h1>
            <button id="menuBtn" onClick={onOpenMenu}>☰</button>
            <div id="temaBtn" onClick={onToggleTheme}>
                <span>🌙</span>
                <span>☀️</span>
                <div className="circle"></div>
            </div>
            <p>Acesse, compare e visualize painéis antigos e atuais</p>
        </header>
    );
}

export default Header;
