function Nav() {
    return (
        <nav id="sideMenu">
            <button id="claseMenu">✖</button>
            <h2>Menu</h2>
            <ul>
                <li><a href="#">📌 Recentes</a></li>
                <li><a href="#">⭐ Favoritos</a></li>
                <li><a href="#">📊 Comparar Dashboards</a></li>
                <li><a href="#">📁 Todos os Dashboards</a></li>
            </ul>
        </nav>
    )
}

function Menu() {
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("claseMenu");
    const sideMenu = document.getElementById("sideMenu");

    menuBtn?.addEventListener("click", () => {
        sideMenu.classList.add("open");
    });

    closeBtn?.addEventListener("click", () => {
        sideMenu.classList.remove("open");
    });

    document.addEventListener("click", (e) => {
        if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            sideMenu.classList.remove("open");
        }
    });
}


export { Menu };
export default Nav;