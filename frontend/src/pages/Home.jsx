import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Impact from '../components/Impact';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/shira-theme.css';

const Home = () => {
  useEffect(() => {
    // Set initial theme to dark
    document.documentElement.setAttribute('data-theme', 'dark');

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
