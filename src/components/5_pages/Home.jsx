import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = (e) => navigate("/page2");

  return (
    <div>
      <button onClick={handleButtonClick}>Pagina 2</button>
    </div>
  );
}
