import React, { useState } from "react";
import { categories, getProductsByCategory } from "../data/products";
import { Product } from "../data/products";
import ProductCard from "../components/ProductCard";

interface CollectionPageProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onViewProduct: (product: Product) => void;
}

const CollectionPage: React.FC<CollectionPageProps> = ({
  selectedCategory,
  setSelectedCategory,
  onViewProduct,
}) => {
  const [sortBy, setSortBy] = useState("default");

  const rawProducts = getProductsByCategory(selectedCategory);
  const sortedProducts = [...rawProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div style={{ paddingTop: "72px", minHeight: "100vh", background: "#FAF7F2" }}>
      {/* Page Header */}
      <div style={{
        background: "#1A1612",
        padding: "64px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
        }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "12px",
          }}>
            Aurelia Jewels
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: "500",
            color: "#FAF7F2",
            marginBottom: "12px",
          }}>
            {selectedCategory === "Complete" ? "All Collections" : selectedCategory}
          </h1>
          <div style={{ width: "48px", height: "1px", background: "#C9A84C", margin: "0 auto 16px" }} />
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "18px",
            fontStyle: "italic",
            color: "rgba(250,247,242,0.65)",
          }}>
            {sortedProducts.length} pieces for you to discover
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "48px 32px" }}>
        {/* Category Filter Tabs */}
        <div style={{
          display: "flex",
          gap: "0",
          marginBottom: "40px",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
          overflowX: "auto",
          paddingBottom: "0",
        }}
        className="category-tabs"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "14px 24px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: selectedCategory === cat ? "#C9A84C" : "#8B7D74",
                borderBottom: selectedCategory === cat ? "2px solid #C9A84C" : "2px solid transparent",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                fontWeight: selectedCategory === cat ? "600" : "400",
              }}
              onMouseEnter={e => {
                if (selectedCategory !== cat) e.currentTarget.style.color = "#1A1612";
              }}
              onMouseLeave={e => {
                if (selectedCategory !== cat) e.currentTarget.style.color = "#8B7D74";
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort + Count Bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "12px",
            color: "#8B7D74",
            letterSpacing: "0.5px",
          }}>
            Showing <strong style={{ color: "#1A1612" }}>{sortedProducts.length}</strong> products
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "11px", fontFamily: "'Montserrat', sans-serif", color: "#8B7D74", letterSpacing: "1px", textTransform: "uppercase" }}>
              Sort by
            </span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              style={{
                padding: "8px 16px",
                border: "1px solid rgba(201,168,76,0.3)",
                background: "#fff",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px",
                color: "#1A1612",
                cursor: "pointer",
                outline: "none",
                appearance: "none",
                paddingRight: "32px",
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='10' height='6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23C9A84C'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
              }}
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>

        {/* Product Grid — 4 columns desktop, 2 mobile */}
        {sortedProducts.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
            className="product-grid"
          >
            {sortedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewProduct={onViewProduct}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "80px 20px" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#8B7D74" }}>
              No products found
            </p>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .product-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .product-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
          .category-tabs { gap: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default CollectionPage;
