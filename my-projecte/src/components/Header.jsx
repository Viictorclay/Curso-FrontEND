function Header({ onOpenMenu }) {
    return (
        <header>
            <h1>Dasboards Line</h1>
            <button id="menuBtn" onClick={onOpenMenu}>☰</button>
            <p>Acesse, compare e visualize painéis antigos e atuais</p>
        </header>
    );
}

export default Header;