import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { contactInfo } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/mnjqkjew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Message sent! We'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section section-dark contact-section">
      <div className="shira-container">

        {/* Big editorial heading */}
        <div className="contact-header">
          <div className="section-eyebrow">Get In Touch</div>
          <h2 className="contact-header__title">
            Let's Build Your<br />
            <span className="gradient-text">Digital Future</span>
          </h2>
          <p className="body-medium contact-header__sub">
            Ready to transform your digital presence? Tell us about your project.
          </p>
        </div>

        <div className="contact-layout">

          {/* Left — info */}
          <div className="contact-info">
            <div className="contact-info__item">
              <div className="contact-info__icon"><Mail size={16} color="var(--cyan)" /></div>
              <div>
                <div className="contact-info__label mono-font">Email</div>
                <a href={`mailto:${contactInfo.email}`} className="contact-info__value">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon"><Phone size={16} color="var(--cyan)" /></div>
              <div>
                <div className="contact-info__label mono-font">Phone</div>
                <a href={`tel:${contactInfo.phone}`} className="contact-info__value">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon"><MapPin size={16} color="var(--cyan)" /></div>
              <div>
                <div className="contact-info__label mono-font">Location</div>
                <span className="contact-info__value">{contactInfo.location}</span>
              </div>
            </div>

            <div className="contact-tagline mono-font">
              — Response within 24 hours
            </div>
          </div>

          {/* Right — form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="contact-input"
            />
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project..."
              className="contact-input contact-textarea"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary contact-submit"
            >
              {loading ? 'Sending...' : 'Send Message'}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
