import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "#FAF7F2" }}>
      {/* Hero */}
      <div style={{
        height: "480px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1573408301185-9519f94816ca?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(26,22,18,0.65)",
        }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
            Our Story
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: "400",
            color: "#FAF7F2",
            marginBottom: "16px",
          }}>
            About Aurelia
          </h1>
          <div style={{ width: "48px", height: "1px", background: "#C9A84C", margin: "0 auto" }} />
        </div>
      </div>

      {/* Story Section */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(20px, 3vw, 28px)",
            fontStyle: "italic",
            color: "#1A1612",
            lineHeight: "1.6",
            marginBottom: "32px",
          }}>
            "We believe that jewelry is not merely adornment — it is a language, a memory, a story worn close to the skin."
          </p>
          <div style={{ width: "48px", height: "1px", background: "#C9A84C", margin: "0 auto" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
          marginBottom: "64px",
        }}
        className="about-grid"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700&q=80"
              alt="Our artisans"
              style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", display: "block" }}
            />
          </div>
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>
              Founded 2018
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", color: "#1A1612", marginBottom: "20px", lineHeight: "1.2" }}>
              Born from a Love of Culture & Craft
            </h2>
            <p style={{ fontSize: "14px", color: "#2D2926", lineHeight: "1.9", marginBottom: "16px" }}>
              Aurelia was founded with a single vision: to create jewelry that bridges cultures and carries stories. Our founder, inspired by travels across ancient civilizations, sought to bring the richness of global artisanship to the modern world.
            </p>
            <p style={{ fontSize: "14px", color: "#2D2926", lineHeight: "1.9" }}>
              Every collection is born from deep research, travel, and a profound respect for the artisans who breathe life into our pieces.
            </p>
          </div>
        </div>

        {/* Values */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
        }}
        className="values-grid"
        >
          {[
            { title: "Authenticity", desc: "Every piece is inspired by real cultural heritage and crafted with traditional techniques.", icon: "◆" },
            { title: "Sustainability", desc: "We source ethically and work with artisans who practice environmentally conscious craftsmanship.", icon: "◆" },
            { title: "Storytelling", desc: "Each jewel comes with its own story — because the meaning matters as much as the beauty.", icon: "◆" },
          ].map(v => (
            <div key={v.title} style={{ textAlign: "center", padding: "32px 20px", background: "#F5F0EA" }}>
              <div style={{ color: "#C9A84C", fontSize: "20px", marginBottom: "16px" }}>{v.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#1A1612", marginBottom: "12px" }}>
                {v.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#8B7D74", lineHeight: "1.7" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
