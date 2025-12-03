function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <button id="menuBtn">☰</button>
            <p>Acesse, compare e visualize painéis antigos e atuais</p>
        </header>
    );
}

export default Header;