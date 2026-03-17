import React, { useState } from "react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer style={{ background: "#1A1612", color: "#FAF7F2" }}>
      {/* Newsletter Section */}
      <div style={{
        borderBottom: "1px solid rgba(201,168,76,0.2)",
        padding: "64px 32px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <p style={{ fontSize: "10px", fontFamily: "'Montserrat', sans-serif", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
            Newsletter
          </p>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: "400", color: "#FAF7F2", marginBottom: "12px" }}>
            Join Our Journey
          </h3>
          <p style={{ fontSize: "13px", color: "rgba(250,247,242,0.6)", letterSpacing: "0.5px", marginBottom: "32px", lineHeight: "1.6" }}>
            Be the first to know about new collections, exclusive offers, and the stories behind each piece.
          </p>

          {subscribed ? (
            <div style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              padding: "16px 24px",
              fontFamily: "'Playfair Display', serif",
              fontSize: "16px",
              color: "#C9A84C",
            }}>
              ✦ Thank you for joining us
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "0", maxWidth: "440px", margin: "0 auto" }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  flex: 1,
                  padding: "14px 20px",
                  background: "rgba(250,247,242,0.05)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRight: "none",
                  color: "#FAF7F2",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "13px",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "14px 24px",
                  background: "#C9A84C",
                  border: "none",
                  color: "#fff",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background 0.3s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#A07830")}
                onMouseLeave={e => (e.currentTarget.style.background = "#C9A84C")}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "56px 32px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px",
          marginBottom: "48px",
        }}
        className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#FAF7F2", marginBottom: "4px" }}>Aurelia</div>
              <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#C9A84C", textTransform: "uppercase" }}>Jewels</div>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(250,247,242,0.55)", lineHeight: "1.8", letterSpacing: "0.3px", marginBottom: "24px" }}>
              Unearth exceptional adornments that resonate with cultural depth and authenticity. Every piece tells a story.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              {["instagram", "pinterest", "facebook"].map(social => (
                <a key={social} href="#" style={{
                  width: "36px", height: "36px",
                  border: "1px solid rgba(201,168,76,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#C9A84C",
                  transition: "all 0.3s",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontFamily: "'Montserrat', sans-serif",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A84C"; }}
                >
                  {social === "instagram" ? "IG" : social === "pinterest" ? "PT" : "FB"}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
              Shop
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["All Collections", "Earrings", "Necklaces", "Bracelets", "Rings", "Extras"].map(item => (
                <li key={item}>
                  <button
                    onClick={() => setCurrentPage("collections")}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: "13px", color: "rgba(250,247,242,0.6)",
                      fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.3px",
                      transition: "color 0.3s", textAlign: "left"
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.6)")}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
              About
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Our Story", "Craftsmanship", "Sustainability", "Blog"].map(item => (
                <li key={item}>
                  <button
                    onClick={() => setCurrentPage("about")}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: "13px", color: "rgba(250,247,242,0.6)",
                      fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.3px",
                      transition: "color 0.3s", textAlign: "left"
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.6)")}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
              Policies
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Privacy Policy", "Terms of Service", "Shipping Policy", "Refund Policy", "Contact Us"].map(item => (
                <li key={item}>
                  <button
                    onClick={() => setCurrentPage("contact")}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: "13px", color: "rgba(250,247,242,0.6)",
                      fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.3px",
                      transition: "color 0.3s", textAlign: "left"
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.6)")}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid rgba(201,168,76,0.15)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ fontSize: "11px", color: "rgba(250,247,242,0.4)", letterSpacing: "0.5px" }}>
            © 2024 Aurelia Jewels. All rights reserved.
          </p>
          <p style={{ fontSize: "11px", color: "rgba(250,247,242,0.4)", letterSpacing: "0.5px" }}>
            Crafted with ✦ for those who collect stories
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
