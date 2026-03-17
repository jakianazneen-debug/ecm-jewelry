import React, { useState, useEffect, useRef } from "react";
import { products, Product } from "../data/products";
import { useCart } from "../context/CartContext";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewProduct: (product: Product) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onViewProduct }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [addedId, setAddedId] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) {
      setResults([]);
      return;
    }
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const handleViewProduct = (product: Product) => {
    onViewProduct(product);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 200,
          backdropFilter: "blur(4px)",
          animation: "fadeIn 0.2s ease",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "72px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "680px",
          zIndex: 201,
          animation: "slideDown 0.25s ease",
        }}
      >
        {/* Search Input Box */}
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            overflow: "hidden",
          }}
        >
          {/* Input Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "16px 20px",
              borderBottom: results.length > 0 ? "1px solid #f0ebe0" : "none",
              gap: "12px",
            }}
          >
            {/* Search Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search jewelry, categories..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "17px",
                fontFamily: "'Montserrat', sans-serif",
                color: "#1A1612",
                background: "transparent",
              }}
            />

            {/* Clear button */}
            {query && (
              <button
                onClick={() => setQuery("")}
                style={{
                  background: "#f0ebe0",
                  border: "none",
                  borderRadius: "50%",
                  width: "26px",
                  height: "26px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                color: "#888",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "13px",
                letterSpacing: "0.5px",
              }}
            >
              ESC
            </button>
          </div>

          {/* Results */}
          {query && results.length === 0 && (
            <div
              style={{
                padding: "40px 20px",
                textAlign: "center",
                color: "#888",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "14px",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>🔍</div>
              <div>No results for "<strong style={{ color: "#1A1612" }}>{query}</strong>"</div>
              <div style={{ marginTop: "8px", fontSize: "12px", color: "#aaa" }}>
                Try searching: earrings, necklace, ring, bracelet
              </div>
            </div>
          )}

          {results.length > 0 && (
            <div style={{ maxHeight: "420px", overflowY: "auto" }}>
              {/* Result count */}
              <div
                style={{
                  padding: "10px 20px 6px",
                  fontSize: "11px",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#C9A84C",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                }}
              >
                {results.length} result{results.length !== 1 ? "s" : ""} found
              </div>

              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleViewProduct(product)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "12px 20px",
                    cursor: "pointer",
                    transition: "background 0.15s",
                    borderBottom: "1px solid #f8f5ef",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#fdf9f0")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {/* Product Image */}
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "1px solid #f0ebe0",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  {/* Product Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "15px",
                        color: "#1A1612",
                        fontWeight: "600",
                        marginBottom: "3px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {product.name}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontFamily: "'Montserrat', sans-serif",
                        color: "#C9A84C",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                        marginBottom: "4px",
                      }}
                    >
                      {product.category}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#1A1612",
                      }}
                    >
                      ${product.price}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    style={{
                      background: addedId === product.id ? "#2d7a3a" : "#1A1612",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "8px 14px",
                      fontSize: "11px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: "600",
                      letterSpacing: "0.5px",
                      cursor: "pointer",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {addedId === product.id ? "✓ Added!" : "+ Cart"}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Quick search suggestions (when empty) */}
          {!query && (
            <div style={{ padding: "16px 20px 20px" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#aaa",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Popular Searches
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Earrings", "Necklaces", "Rings", "Bracelets", "Gold", "Moonstone"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    style={{
                      background: "#f8f5ef",
                      border: "1px solid #e8e0d0",
                      borderRadius: "20px",
                      padding: "6px 14px",
                      fontSize: "12px",
                      fontFamily: "'Montserrat', sans-serif",
                      color: "#1A1612",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#C9A84C";
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.border = "1px solid #C9A84C";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f8f5ef";
                      e.currentTarget.style.color = "#1A1612";
                      e.currentTarget.style.border = "1px solid #e8e0d0";
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-12px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  );
};

export default SearchModal;
