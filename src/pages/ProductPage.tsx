import React, { useState } from "react";
import { Product, products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

interface ProductPageProps {
  product: Product;
  onBack: () => void;
  onViewProduct: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onBack, onViewProduct }) => {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "#FAF7F2" }}>
      {/* Breadcrumb */}
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "11px",
        letterSpacing: "0.5px",
        color: "#8B7D74",
      }}>
        <button
          onClick={onBack}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#8B7D74", fontSize: "11px", fontFamily: "'Montserrat', sans-serif" }}
        >
          ← Back
        </button>
        <span>/</span>
        <button
          onClick={onBack}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#8B7D74", fontSize: "11px", fontFamily: "'Montserrat', sans-serif" }}
        >
          {product.category}
        </button>
        <span>/</span>
        <span style={{ color: "#1A1612" }}>{product.name}</span>
      </div>

      {/* Main Product Section */}
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 32px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "start",
      }}
      className="product-layout"
      >
        {/* LEFT: Product Gallery */}
        <div>
          {/* Main Image */}
          <div style={{
            overflow: "hidden",
            marginBottom: "16px",
            background: "#F5F0EA",
            position: "relative",
          }}>
            {product.badge && (
              <div style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                background: product.badge === "New" ? "#1A1612" : "#C9A84C",
                color: "#fff",
                fontSize: "10px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "600",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "6px 12px",
                zIndex: 1,
              }}>
                {product.badge}
              </div>
            )}
            <img
              src={product.images[selectedImage] || product.image}
              alt={product.name}
              style={{
                width: "100%",
                aspectRatio: "1/1",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div style={{ display: "flex", gap: "12px" }}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  style={{
                    width: "72px",
                    height: "72px",
                    border: selectedImage === idx ? "2px solid #C9A84C" : "2px solid transparent",
                    padding: "2px",
                    cursor: "pointer",
                    background: "none",
                    overflow: "hidden",
                    transition: "border-color 0.3s",
                  }}
                >
                  <img
                    src={img}
                    alt={`View ${idx + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Product Info */}
        <div style={{ paddingTop: "8px" }}>
          {/* Category */}
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "12px",
          }}>
            {product.category}
          </p>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3.5vw, 40px)",
            fontWeight: "500",
            color: "#1A1612",
            lineHeight: "1.2",
            marginBottom: "20px",
          }}>
            {product.name}
          </h1>

          {/* Price */}
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "32px",
            fontWeight: "600",
            color: "#1A1612",
            marginBottom: "24px",
          }}>
            ${product.price}
          </div>

          <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "24px" }} />

          {/* Stars */}
          <div style={{ display: "flex", gap: "4px", marginBottom: "24px", alignItems: "center" }}>
            {[1,2,3,4,5].map(s => (
              <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <span style={{ fontSize: "12px", color: "#8B7D74", fontFamily: "'Montserrat', sans-serif", marginLeft: "8px" }}>
              (4.9) · 128 reviews
            </span>
          </div>

          {/* Description */}
          <p style={{
            fontSize: "14px",
            color: "#2D2926",
            lineHeight: "1.9",
            letterSpacing: "0.3px",
            marginBottom: "32px",
          }}>
            {product.description}
          </p>

          {/* Quantity */}
          <div style={{ marginBottom: "24px" }}>
            <p style={{ fontSize: "11px", fontFamily: "'Montserrat', sans-serif", letterSpacing: "1.5px", textTransform: "uppercase", color: "#8B7D74", marginBottom: "10px" }}>
              Quantity
            </p>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid rgba(201,168,76,0.4)",
            }}>
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                style={{
                  width: "44px", height: "44px", background: "none", border: "none",
                  cursor: "pointer", fontSize: "18px", color: "#1A1612",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >−</button>
              <span style={{
                width: "52px", textAlign: "center",
                fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: "500", color: "#1A1612",
              }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                style={{
                  width: "44px", height: "44px", background: "none", border: "none",
                  cursor: "pointer", fontSize: "18px", color: "#1A1612",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >+</button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="btn-gold"
            onClick={handleAddToCart}
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "12px",
              padding: "18px",
              marginBottom: "14px",
              background: added ? "#5a7a5a" : undefined,
              transition: "all 0.3s",
            }}
          >
            {added ? "✓ Added to Cart" : "Add to Cart"}
          </button>

          <button
            className="btn-outline"
            style={{ width: "100%", textAlign: "center", fontSize: "12px", padding: "17px", marginBottom: "32px" }}
          >
            Add to Wishlist ♡
          </button>

          {/* Story */}
          <div style={{
            background: "#F5F0EA",
            padding: "24px",
            borderLeft: "2px solid #C9A84C",
            marginBottom: "32px",
          }}>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: "10px",
            }}>
              The Story
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "17px",
              fontStyle: "italic",
              color: "#2D2926",
              lineHeight: "1.7",
            }}>
              {product.story}
            </p>
          </div>

          {/* Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { icon: "✦", text: "18k Gold-Plated Sterling Silver" },
              { icon: "✦", text: "Hypoallergenic & Nickel-Free" },
              { icon: "✦", text: "Free Shipping on orders over $75" },
              { icon: "✦", text: "30-Day Return Policy" },
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "#C9A84C", fontSize: "10px" }}>{f.icon}</span>
                <span style={{ fontSize: "13px", color: "#2D2926", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.3px" }}>
                  {f.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div style={{
          background: "#F5F0EA",
          padding: "72px 32px",
        }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A84C", marginBottom: "10px" }}>
                You May Also Love
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", color: "#1A1612" }}>
                Related Pieces
              </h2>
              <div className="gold-divider" />
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
            className="related-grid"
            >
              {related.map(p => (
                <ProductCard key={p.id} product={p} onViewProduct={onViewProduct} />
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .product-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
          .related-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .related-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  );
};

export default ProductPage;
