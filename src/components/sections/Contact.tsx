"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text =
      `Hello Lotus Dental Care! 👋\n\n` +
      `I would like to book an appointment.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Message:* ${formData.message || "N/A"}`;

    const whatsappUrl = `https://wa.me/917200849216?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="sec panel" id="contact">
      <div className="wrap">
        <div className="head" style={{ maxWidth: "100%", textAlign: "center", margin: "0 auto 46px" }}>
          <span className="eyebrow">Get in touch</span>
          <h2>Book your appointment</h2>
          <p style={{ marginLeft: "auto", marginRight: "auto" }}>
            Call us, message on WhatsApp, or send the form below and we&rsquo;ll get back to you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact information */}
          <div className="contact-info">
            <h3>Visit us</h3>

            <div className="row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div>
                <div className="lbl">Address</div>
                <div className="val">
                  LIG Phase I &amp; II, Plot No:1853 TNHB,<br />
                  Ayapakkam, Chennai 600077
                </div>
              </div>
            </div>

            <div className="row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 18v4a16 16 0 0 1-15-18Z" />
                </svg>
              </span>
              <div>
                <div className="lbl">Phone</div>
                <a className="val" href="tel:+917200849216">7200849216</a>
              </div>
            </div>

            <div className="row">
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div>
                <div className="lbl">Email</div>
                <a className="val" href="mailto:lotusdentists@gmail.com">lotusdentists@gmail.com</a>
              </div>
            </div>

            <div className="row" style={{ marginBottom: 0 }}>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div>
                <div className="lbl">Hours</div>
                <div className="val">
                  Mon–Sat · 10:00 AM – 1:00 PM<br />
                  &amp; 5:00 PM – 9:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="form-card">
            <h3>Send a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="email">Email address *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.8-2.8-1.2-4.6-4.1-4.7-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.2.2-.3.4-.1.7.5.8 1 1.3 1.7 1.8.3.2.5.2.7 0l.6-.8c.2-.2.3-.2.6-.1l1.9.9c.2.1.4.2.4.4.1.2.1.8-.1 1.1Z" />
                </svg>
                Book via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8693855126803!2d80.1308311!3d13.1074599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526245bddd8a11%3A0x22d8755236dd395a!2sLotus%20Multispeciality%20Dental%20Care!5e0!3m2!1sen!2sin!4v1768884464382!5m2!1sen!2sin"
            width="100%"
            height="360"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lotus Dental Care location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
