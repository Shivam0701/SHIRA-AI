import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactInfo } from '../mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/mnjqkjew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section section-dark">
      <div className="shira-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            className="mono-font"
            style={{
              fontSize: '14px',
              color: 'var(--brand-electric)',
              marginBottom: '12px',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Get In Touch
          </div>

          <h2 className="heading-1" style={{ marginBottom: '16px' }}>
            Let's Build Your <span className="gradient-text">Digital Future</span>
          </h2>

          <p className="body-medium" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Ready to transform your digital presence? Reach out and let's create something amazing together.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
          }}
        >
          {/* Contact Info */}
          <div>
            <h3 className="heading-2" style={{ marginBottom: '32px' }}>
              Contact Information
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <a
                href={`mailto:${contactInfo.email}`}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  padding: '20px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.3s ease',
                }}
              >
                <Mail size={20} color="var(--brand-blue)" />
                {contactInfo.email}
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  padding: '20px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <Phone size={20} color="var(--brand-electric)" />
                {contactInfo.phone}
              </a>

              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '20px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <MapPin size={20} color="var(--brand-blue)" />
                {contactInfo.location}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="heading-2" style={{ marginBottom: '32px' }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />

                {/* Message */}
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
