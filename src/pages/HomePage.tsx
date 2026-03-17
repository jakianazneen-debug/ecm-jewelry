import React, { useState } from "react";
import { products, categories } from "../data/products";
import { Product } from "../data/products";
import ProductCard from "../components/ProductCard";

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  onViewProduct: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, onViewProduct }) => {
  const [activeCategory, setActiveCategory] = useState("Complete");
  const filteredProducts = activeCategory === "Complete"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        className="hero-section"
        style={{
          height: "100vh",
          minHeight: "600px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          background: "#1A1612",
        }}
      >
        {/* Background Image */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
        }} />

        {/* Gradient overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(26,22,18,0.9) 0%, rgba(26,22,18,0.4) 50%, rgba(26,22,18,0.7) 100%)",
        }} />

        {/* Gold accent lines */}
        <div style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          width: "1px",
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "40px",
          left: "40px",
          width: "120px",
          height: "1px",
          background: "linear-gradient(to right, transparent, #C9A84C, transparent)",
        }} />

        {/* Hero Content */}
        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 48px",
          width: "100%",
        }}>
          <div style={{ maxWidth: "680px" }}>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}>
              <span style={{ width: "30px", height: "1px", background: "#C9A84C", display: "inline-block" }} />
              Luxury Jewelry Collection 2024
            </p>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: "500",
              color: "#FAF7F2",
              lineHeight: "1.08",
              marginBottom: "24px",
              letterSpacing: "-0.5px",
            }}>
              Jewelry for<br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>the Soul</em>
            </h1>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(16px, 2.5vw, 22px)",
              color: "rgba(250,247,242,0.75)",
              marginBottom: "48px",
              letterSpacing: "0.5px",
              lineHeight: "1.5",
              fontStyle: "italic",
            }}>
              For those who collect stories, not just jewelry
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button
                className="btn-gold"
                onClick={() => setCurrentPage("collections")}
                style={{ fontSize: "11px" }}
              >
                Shop Now
              </button>
              <button
                className="btn-outline"
                onClick={() => setCurrentPage("about")}
                style={{ fontSize: "11px", color: "#FAF7F2", borderColor: "rgba(250,247,242,0.4)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(250,247,242,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >
                Our Story
              </button>
            </div>
          </div>

          {/* Stats */}
          <div style={{
            position: "absolute",
            right: "48px",
            bottom: "-40px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
          className="hero-stats"
          >
            {[
              { num: "500+", label: "Pieces" },
              { num: "50+", label: "Countries" },
              { num: "10k+", label: "Stories" },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "#C9A84C", fontWeight: "600" }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(250,247,242,0.5)", fontFamily: "'Montserrat', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 2,
          animation: "bounce 2s infinite",
        }}>
          <p style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(250,247,242,0.5)", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase" }}>
            Scroll
          </p>
          <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, rgba(201,168,76,0.8), transparent)" }} />
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(8px); }
          }
          @media (max-width: 768px) {
            .hero-stats { display: none !important; }
          }
        `}</style>
      </section>

      {/* ===== MARQUEE STRIP ===== */}
      <div style={{
        background: "#C9A84C",
        padding: "12px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}>
        <div style={{
          display: "inline-flex",
          gap: "48px",
          animation: "marquee 20s linear infinite",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "11px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#fff",
        }}>
          {Array(6).fill(0).map((_, i) => (
            <span key={i} style={{ display: "flex", gap: "48px", flexShrink: 0 }}>
              <span>✦ Free Shipping on Orders $75+</span>
              <span>✦ Culturally Inspired</span>
              <span>✦ Ethically Sourced</span>
              <span>✦ Handcrafted with Love</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ===== ALL PRODUCTS ===== */}
      <section style={{ padding: "96px 32px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
            Our Collection
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "500", color: "#1A1612", marginBottom: "16px" }}>
            Shop All Pieces
          </h2>
          <div className="gold-divider" />
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "#8B7D74", fontStyle: "italic", marginTop: "16px" }}>
            Each piece narrates a unique story
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "48px",
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "10px 24px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                border: activeCategory === cat ? "1px solid #C9A84C" : "1px solid #E0D9D0",
                background: activeCategory === cat ? "#C9A84C" : "transparent",
                color: activeCategory === cat ? "#fff" : "#8B7D74",
                cursor: "pointer",
                borderRadius: "2px",
                transition: "all 0.2s ease",
                fontWeight: activeCategory === cat ? "600" : "400",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Count */}
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "12px",
          color: "#8B7D74",
          letterSpacing: "1px",
          marginBottom: "32px",
          textAlign: "center",
        }}>
          {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
        </p>

        {/* Products Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
        }}
        className="all-products-grid"
        >
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} onViewProduct={onViewProduct} />
          ))}
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .all-products-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
          @media (max-width: 768px) {
            .all-products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .all-products-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          }
        `}</style>
      </section>

      {/* ===== BRAND STATEMENT ===== */}
      <section style={{
        background: "#1A1612",
        padding: "96px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative bg */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1573408301185-9519f94816ca?w=1200&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ width: "40px", height: "1px", background: "#C9A84C", margin: "0 auto 32px" }} />
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(22px, 4vw, 38px)",
            fontStyle: "italic",
            fontWeight: "300",
            color: "#FAF7F2",
            lineHeight: "1.5",
            letterSpacing: "0.5px",
          }}>
            "Unearth exceptional adornments that resonate with cultural depth and authenticity"
          </p>
          <div style={{ width: "40px", height: "1px", background: "#C9A84C", margin: "32px auto 0" }} />
        </div>
      </section>

      {/* ===== IMAGE + TEXT SECTION ===== */}
      <section style={{ padding: "96px 32px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="split-grid"
        >
          {/* Left Image */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute",
              top: "-16px",
              left: "-16px",
              right: "16px",
              bottom: "16px",
              border: "1px solid rgba(201,168,76,0.3)",
              zIndex: 0,
            }} />
            <div style={{ position: "relative", zIndex: 1, overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
                alt="Cultural jewelry"
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          </div>

          {/* Right Text */}
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
              Our Philosophy
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: "500",
              color: "#1A1612",
              lineHeight: "1.2",
              marginBottom: "24px",
            }}>
              Cultural<br />
              <em style={{ fontStyle: "italic" }}>Richness</em>
            </h2>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "24px" }} />
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              color: "#8B7D74",
              fontStyle: "italic",
              marginBottom: "20px",
              lineHeight: "1.6",
            }}>
              Every piece narrates a unique story
            </p>
            <p style={{
              fontSize: "14px",
              color: "#2D2926",
              lineHeight: "1.9",
              letterSpacing: "0.3px",
              marginBottom: "16px",
            }}>
              Each Aurelia piece is born from a deep respect for cultural heritage. We work with artisans who have inherited their craft across generations, ensuring that every jewel carries authentic stories and timeless techniques.
            </p>
            <p style={{
              fontSize: "14px",
              color: "#2D2926",
              lineHeight: "1.9",
              letterSpacing: "0.3px",
              marginBottom: "40px",
            }}>
              From moonlit deserts to ancient temples, our inspirations span the globe — creating jewelry that transcends trends and becomes a piece of your own story.
            </p>
            <button className="btn-gold" onClick={() => setCurrentPage("collections")}>
              Shop All
            </button>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .split-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ===== CATEGORY TILES ===== */}
      <section style={{ padding: "0 32px 96px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
            Browse By Category
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 40px)", color: "#1A1612" }}>
            Collections
          </h2>
          <div className="gold-divider" />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
        className="cat-grid"
        >
          {[
            { name: "Earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80" },
            { name: "Necklaces", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80" },
            { name: "Bracelets", img: "https://images.unsplash.com/photo-1573408301369-0e29f5f8b1b0?w=500&q=80" },
            { name: "Rings", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80" },
          ].map(cat => (
            <button
              key={cat.name}
              onClick={() => setCurrentPage("collections")}
              style={{
                position: "relative",
                overflow: "hidden",
                border: "none",
                cursor: "pointer",
                background: "none",
                padding: 0,
                display: "block",
                width: "100%",
              }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1.08)";
                const overlay = e.currentTarget.querySelector(".cat-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1)";
                const overlay = e.currentTarget.querySelector(".cat-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "0.6";
              }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
              />
              <div
                className="cat-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(26,22,18,0.85) 0%, rgba(26,22,18,0.1) 60%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "24px",
                  opacity: "0.6",
                  transition: "opacity 0.3s",
                }}
              >
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  color: "#FAF7F2",
                  marginBottom: "8px",
                }}>
                  {cat.name}
                </span>
                <span style={{
                  fontSize: "9px",
                  fontFamily: "'Montserrat', sans-serif",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                }}>
                  Shop Now →
                </span>
              </div>
            </button>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .cat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .cat-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{
        background: "#F5F0EA",
        padding: "80px 32px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
            Stories from Our Community
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 38px)", color: "#1A1612", marginBottom: "16px" }}>
            What They Say
          </h2>
          <div className="gold-divider" style={{ marginBottom: "48px" }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
          }}
          className="testi-grid"
          >
            {[
              { text: "The Luna Crescent Earrings are absolutely stunning. I wear them every day and get compliments constantly.", name: "Amara K.", loc: "London" },
              { text: "Beautiful packaging, beautiful jewelry. The Moonstone Necklace is exactly as described — ethereal and glowing.", name: "Sofia R.", loc: "New York" },
              { text: "I love how each piece comes with a story card. It makes gifting so much more meaningful.", name: "Priya M.", loc: "Mumbai" },
            ].map((t, i) => (
              <div key={i} style={{
                background: "#fff",
                padding: "32px 28px",
                position: "relative",
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "48px",
                  color: "#C9A84C",
                  opacity: 0.3,
                  lineHeight: "1",
                  marginBottom: "12px",
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "17px",
                  fontStyle: "italic",
                  color: "#2D2926",
                  lineHeight: "1.7",
                  marginBottom: "24px",
                }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center" }}>
                  <div style={{ width: "32px", height: "1px", background: "#C9A84C" }} />
                  <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: "500", color: "#1A1612" }}>{t.name}</div>
                    <div style={{ fontSize: "11px", color: "#8B7D74", letterSpacing: "0.5px" }}>{t.loc}</div>
                  </div>
                  <div style={{ width: "32px", height: "1px", background: "#C9A84C" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .testi-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 560px) {
            .testi-grid { grid-template-columns: 1fr !important; max-width: 500px; margin: 0 auto; }
          }
        `}</style>
      </section>
    </div>
  );
};

export default HomePage;
