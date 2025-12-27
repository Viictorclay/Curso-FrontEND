import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import DesktopNav from "./components/DesktopNav.jsx";

// páginas
import Home from "./pages/Home.jsx";
import Favoritos from "./pages/Favoritos.jsx";
import AdicionarDashboard from "./pages/AdicionarDashboard.jsx";
import TodosDashboards from "./pages/TodosDashboards.jsx";
import Contato from "./pages/contato.jsx";

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <Header title="Dashboards Line" onOpenMenu={() => setOpen(true)} theme={theme} onToggleTheme={toggleTheme} />

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
    </div>
  );
}

export default App;
