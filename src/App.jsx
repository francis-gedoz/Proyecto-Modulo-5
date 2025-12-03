import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NetworksPage from "./Pages/NetworksPage";
import StationsPage from "./Pages/StationsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/networks" element={<NetworksPage />} />
        <Route path="/stations/:id" element={<StationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;