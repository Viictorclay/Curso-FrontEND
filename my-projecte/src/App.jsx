import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import DesktopNav from "./components/DesktopNav.jsx";

// páginas
import Home from "./pages/Home.jsx";
import Recentes from "./pages/Recentes.jsx";
import Favoritos from "./pages/Favoritos.jsx";
import AdicionarDashboard from "./pages/AdicionarDashboard.jsx";
import TodosDashboards from "./pages/TodosDashboards.jsx";
import Contato from "./pages/contato.jsx";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header title="Dashboards Line" onOpenMenu={() => setOpen(true)} />

      <Nav open={open} onOpenMenu={() => setOpen(false)} />
      <DesktopNav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recentes" element={<Recentes />} />
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