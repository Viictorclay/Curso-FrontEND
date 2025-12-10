import { useState } from "react";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";

function app() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <Header 
      title="Dasboards Line"
      onOpenMenu={() => setOpen(true)}
    />

    <Nav 
      open={open} 
      onOpenMenu={() => setOpen(false)}
    />

    <Home/>

    <Footer/>
    </>
  )
}
export default app;