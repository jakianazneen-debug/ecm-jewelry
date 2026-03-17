import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "#FAF7F2" }}>
      {/* Header */}
      <div style={{
        background: "#1A1612",
        padding: "72px 32px",
        textAlign: "center",
      }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
          Reach Out
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 52px)", color: "#FAF7F2", fontWeight: "400" }}>
          Contact Us
        </h1>
        <div style={{ width: "48px", height: "1px", background: "#C9A84C", margin: "20px auto 0" }} />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "64px",
          alignItems: "start",
        }}
        className="contact-grid"
        >
          {/* Left Info */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "#1A1612", marginBottom: "20px" }}>
              We'd Love to Hear from You
            </h2>
            <div style={{ width: "40px", height: "1px", background: "#C9A84C", marginBottom: "24px" }} />
            <p style={{ fontSize: "14px", color: "#8B7D74", lineHeight: "1.8", marginBottom: "40px" }}>
              Whether you have a question about a piece, need help with an order, or simply want to share your story — we're here for you.
            </p>

            {[
              { label: "Email", value: "hello@aureliajewels.com" },
              { label: "Hours", value: "Mon – Fri: 9am – 6pm EST" },
              { label: "Response", value: "Within 24 hours" },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: "24px" }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  marginBottom: "6px",
                }}>
                  {item.label}
                </p>
                <p style={{ fontSize: "14px", color: "#1A1612", letterSpacing: "0.3px" }}>{item.value}</p>
              </div>
            ))}

            <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
              {["Instagram", "Pinterest", "Facebook"].map(s => (
                <a
                  key={s}
                  href="#"
                  style={{
                    padding: "10px 16px",
                    border: "1px solid rgba(201,168,76,0.4)",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div>
            {sent ? (
              <div style={{
                textAlign: "center",
                padding: "64px 32px",
                background: "#F5F0EA",
                border: "1px solid rgba(201,168,76,0.2)",
              }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>✦</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#1A1612", marginBottom: "12px" }}>
                  Message Received
                </h3>
                <p style={{ fontSize: "14px", color: "#8B7D74", lineHeight: "1.7" }}>
                  Thank you for reaching out. We'll respond within 24 hours with care and attention.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { key: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{
                      display: "block",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#8B7D74",
                      marginBottom: "8px",
                    }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                      placeholder={field.placeholder}
                      required
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        border: "1px solid rgba(201,168,76,0.3)",
                        background: "#fff",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "13px",
                        color: "#1A1612",
                        outline: "none",
                        transition: "border-color 0.3s",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#C9A84C")}
                      onBlur={e => (e.target.style.borderColor = "rgba(201,168,76,0.3)")}
                    />
                  </div>
                ))}

                <div>
                  <label style={{
                    display: "block",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#8B7D74",
                    marginBottom: "8px",
                  }}>
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Share your thoughts or questions..."
                    required
                    rows={6}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      border: "1px solid rgba(201,168,76,0.3)",
                      background: "#fff",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "13px",
                      color: "#1A1612",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.3s",
                    }}
                    onFocus={e => (e.target.style.borderColor = "#C9A84C")}
                    onBlur={e => (e.target.style.borderColor = "rgba(201,168,76,0.3)")}
                  />
                </div>

                <button type="submit" className="btn-gold" style={{ fontSize: "11px" }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
