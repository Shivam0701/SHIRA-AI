import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ScrollToTop from './components/ScrollToTop'; // ✅ ADD THIS

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop /> {/* 🔥 MOST IMPORTANT LINE */}

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
