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

      {/* 🔥 GLOBAL TOAST (MOBILE + DESKTOP SAFE) */}
      <Toaster
        position="top-center"     // ✅ mobile-friendly
        richColors
        closeButton
        duration={3000}
        toastOptions={{
          style: {
            zIndex: 9999,         // ✅ navbar & menu se upar
            marginTop: '80px',    // ✅ fixed navbar ke niche
          },
        }}
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
