import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/5_pages/Home";

import "./styles/App.css";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
