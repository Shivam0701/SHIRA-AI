import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />

      {/* 🔥 TOAST ROOT */}
      <Toaster
        position="bottom-right"
        richColors
        closeButton
        duration={3000}
      />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
