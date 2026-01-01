import React, { useState } from 'react';
import { Send } from 'lucide-react';
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
        body: JSON.stringify(formData),
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

          <p
            className="body-medium"
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            Ready to transform your digital presence? Reach out and let's create
            something amazing together.
          </p>
        </div>

        {/* Centered Contact Form */}
        <div
          style={{
            maxWidth: '620px',
            margin: '0 auto',
            background: 'var(--bg-secondary)',
            padding: '40px',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <h3
            className="heading-2"
            style={{ marginBottom: '32px', textAlign: 'center' }}
          >
            Send a Message
          </h3>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                style={inputStyle}
              />

              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                style={{ ...inputStyle, resize: 'vertical' }}
              />

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
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '16px',
  background: 'var(--bg-primary)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--text-primary)',
  fontSize: '16px',
  outline: 'none',
};

export default Contact;
