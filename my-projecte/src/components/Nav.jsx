import { useState } from "react";

function Nav({ open, onOpenMenu }) {
    return (
        <>
            <nav id="sideMenu" className={open ? "open" : ""}>
                <button id="closeMenu" onClick={onOpenMenu}>✖</button>

                <h2>Menu</h2>
                <ul>
                    <li><a href="../App.jsx">🏠 Início</a></li>
                    <li><a href="#">📌 Recentes</a></li>
                    <li><a href="#">⭐ Favoritos</a></li>
                    <li><a href="#">📁 Todos os Dashboards</a></li>
                </ul>
            </nav>

            {/* Clique fora para fechar */}
            {open && (
                <div 
                    className="overlay" 
                    onClick={onOpenMenu}>
                </div>
            )}
        </>
    );
}

export default Nav;