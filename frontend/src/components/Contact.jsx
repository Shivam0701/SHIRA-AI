import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { contactInfo } from '../mock';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault(); setLoading(true);
    try {
      const r = await fetch('https://formspree.io/f/mnjqkjew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (r.ok) { toast.success("Message sent! We'll get back to you soon."); setForm({ name:'', email:'', message:'' }); }
      else toast.error('Something went wrong. Please try again.');
    } catch { toast.error('Network error. Please try again later.'); }
    finally { setLoading(false); }
  };

  return (
    <section id="contact" className="contact-section section section-dark" ref={ref}>
      <div className="section-index mono-font">05</div>

      {/* Oversize background word */}
      <div className="contact-bg-word" aria-hidden="true">TALK</div>

      <div className="shira-container">
        <div className="contact-layout">

          {/* Left — big heading + info */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.19,1,0.22,1] }}
          >
            <div className="section-eyebrow mono-font">Get In Touch</div>
            <h2 className="contact-headline">
              Let's Build<br />
              Your Digital<br />
              <span className="gradient-text">Future</span>
            </h2>
            <p className="body-medium" style={{ marginBottom: 40, maxWidth: 340 }}>
              Ready to transform your digital presence? Tell us about your project and we'll get back within 24 hours.
            </p>

            <div className="contact-info-list">
              {[
                { icon: Mail,  label: 'Email',    val: contactInfo.email,  href: `mailto:${contactInfo.email}` },
                { icon: Phone, label: 'Phone',    val: contactInfo.phone,  href: `tel:${contactInfo.phone}` },
                { icon: MapPin,label: 'Location', val: contactInfo.location, href: null },
              ].map(({ icon: Icon, label, val, href }) => (
                <div key={label} className="contact-info-item">
                  <div className="contact-info-item__icon">
                    <Icon size={14} color="var(--cyan)" />
                  </div>
                  <div>
                    <div className="mono-font contact-info-item__label">{label}</div>
                    {href
                      ? <a href={href} className="contact-info-item__val">{val}</a>
                      : <span className="contact-info-item__val">{val}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            className="contact-form"
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.19,1,0.22,1] }}
          >
            {[
              { name:'name',  type:'text',  ph:'Your Name' },
              { name:'email', type:'email', ph:'Email Address' },
            ].map(f => (
              <div key={f.name} className="contact-field">
                <input
                  type={f.type} name={f.name}
                  value={form[f.name]} onChange={onChange}
                  required placeholder={f.ph}
                  className="contact-input"
                />
              </div>
            ))}
            <div className="contact-field">
              <textarea
                name="message" rows="5"
                value={form.message} onChange={onChange}
                required placeholder="Tell us about your project..."
                className="contact-input contact-textarea"
              />
            </div>
            <button type="submit" disabled={loading} className="btn-primary contact-submit">
              {loading ? 'Sending...' : 'Send Message'}
              <Send size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
