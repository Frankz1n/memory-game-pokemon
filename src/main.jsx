import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Game from "./pages/Game/index.jsx";
import ScoreBoard from "./pages/ScoreBoard/index.jsx";
import GlobalStyle from "./GlobalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/scoreboard" element={<ScoreBoard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
