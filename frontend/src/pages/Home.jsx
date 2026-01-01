
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChoose from '../components/WhyChoose';
import Impact from '../components/Impact';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import '../styles/shira-theme.css';

const Home = () => {
  const location = useLocation();

  // 🔹 Scroll to section when URL has hash (#about, #services, etc.)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // No hash → scroll to top (Home click / logo click)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // 🔹 Initial theme + scroll animations
  useEffect(() => {
    // Set initial theme to dark
    document.documentElement.setAttribute('data-theme', 'dark');

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
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="why-us">
        <WhyChoose />
      </section>

      <section id="impact">
        <Impact />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;