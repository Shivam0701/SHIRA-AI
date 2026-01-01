
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Toaster } from "./components/ui/sonner";
import ScrollToTop from "./components/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop /> 
      <AnimatedRoutes />
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
}

export default App;