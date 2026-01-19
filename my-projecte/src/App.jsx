import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/NavMobile.jsx";
import DesktopNav from "./components/DesktopNav.jsx";

import Home from "./pages/Home.jsx";
import Favoritos from "./pages/Favoritos.jsx";
import AdicionarDashboard from "./pages/AdicionarDashboard.jsx";
import TodosDashboards from "./pages/TodosDashboards.jsx";
import Contato from "./pages/Contato.jsx";

import "./assets/css/scrollbar/globals.css";
import "./assets/css/scrollbar/scrollbar.css";
import "./assets/css/scrollbar/themes.css";

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header
        title="Dashboards Line"
        onOpenMenu={() => setOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <div className="info-bar">
        Acesse, compare e visualize painéis antigos e atuais
      </div>

      <Nav open={open} onOpenMenu={() => setOpen(false)} />
      <DesktopNav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/adicionar" element={<AdicionarDashboard />} />
          <Route path="/todos" element={<TodosDashboards />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
