import { useEffect, useState } from "react";

export default function Tema() {
  const [tema, setTema] = useState("claro");

  useEffect(() => {
    document.body.style.backgroundColor = tema === "claro" ? "#ffffff" : "#121212";
    document.body.style.color = tema === "claro" ? "#000000" : "#ffffff";
  }, [tema]);

  function alternarTema() {
    setTema(tema === "claro" ? "escuro" : "claro");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <h2>Tema atual: {tema}</h2>

      <div
        onClick={alternarTema}
        style={{
          width: "60px",
          height: "30px",
          borderRadius: "999px",
          backgroundColor: tema === "claro" ? "#e5e7eb" : "#111827",
          display: "flex",
          alignItems: "center",
          padding: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            transform: tema === "claro" ? "translateX(0)" : "translateX(30px)",
            transition: "transform 0.3s ease",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>
    );
}