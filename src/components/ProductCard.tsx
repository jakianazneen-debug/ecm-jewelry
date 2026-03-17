import React from "react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewProduct }) => {
  const { addToCart } = useCart();

  return (
    <div
      className="product-card"
      style={{
        background: "#fff",
        cursor: "pointer",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
    >
      {/* Image Container */}
      <div
        style={{ position: "relative", overflow: "hidden", background: "#F5F0EA" }}
        onClick={() => onViewProduct(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <div style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: product.badge === "New" ? "#1A1612" : product.badge === "Premium" ? "#8B7D74" : "#C9A84C",
            color: "#fff",
            fontSize: "9px",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "600",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            padding: "5px 10px",
          }}>
            {product.badge}
          </div>
        )}

        {/* Quick Add Overlay */}
        <div
          className="quick-add-overlay"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          ✦ Quick Add to Cart
        </div>
      </div>

      {/* Product Info */}
      <div
        style={{ padding: "16px 14px 18px" }}
        onClick={() => onViewProduct(product)}
      >
        <div style={{
          fontSize: "9px",
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#C9A84C",
          marginBottom: "6px",
        }}>
          {product.category}
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "15px",
          fontWeight: "500",
          color: "#1A1612",
          marginBottom: "8px",
          lineHeight: "1.3",
        }}>
          {product.name}
        </h3>

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "18px",
            fontWeight: "600",
            color: "#1A1612",
          }}>
            ${product.price}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          className="btn-outline"
          style={{ width: "100%", textAlign: "center", padding: "10px 12px", fontSize: "10px" }}
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
