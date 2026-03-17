import React from "react";
import { useCart } from "../context/CartContext";

const CartSidebar: React.FC = () => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, total, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div style={{
          padding: "24px 28px",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#FAF7F2",
        }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#1A1612" }}>
              Your Cart
            </h3>
            <p style={{ fontSize: "11px", color: "#8B7D74", letterSpacing: "1px", marginTop: "2px" }}>
              {items.length} {items.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1612" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 28px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1" style={{ margin: "0 auto 16px", display: "block" }}>
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#1A1612", marginBottom: "8px" }}>
                Your cart is empty
              </p>
              <p style={{ fontSize: "12px", color: "#8B7D74", letterSpacing: "0.5px" }}>
                Add some beautiful pieces to begin
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "8px" }}>
              {items.map(item => (
                <div key={item.product.id} style={{
                  display: "flex",
                  gap: "14px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(201,168,76,0.1)",
                }}>
                  <div style={{ width: "72px", height: "72px", overflow: "hidden", flexShrink: 0 }}>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "14px",
                      color: "#1A1612",
                      marginBottom: "4px",
                      lineHeight: "1.3",
                    }}>
                      {item.product.name}
                    </div>
                    <div style={{ fontSize: "13px", color: "#C9A84C", fontWeight: "500", marginBottom: "10px" }}>
                      ${item.product.price}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid rgba(201,168,76,0.3)",
                        borderRadius: "2px",
                      }}>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          style={{
                            width: "28px", height: "28px", background: "none", border: "none",
                            cursor: "pointer", fontSize: "14px", color: "#1A1612",
                            display: "flex", alignItems: "center", justifyContent: "center"
                          }}
                        >−</button>
                        <span style={{ width: "28px", textAlign: "center", fontSize: "12px", fontFamily: "'Montserrat', sans-serif" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          style={{
                            width: "28px", height: "28px", background: "none", border: "none",
                            cursor: "pointer", fontSize: "14px", color: "#1A1612",
                            display: "flex", alignItems: "center", justifyContent: "center"
                          }}
                        >+</button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        style={{
                          background: "none", border: "none", cursor: "pointer",
                          color: "#8B7D74", fontSize: "11px", letterSpacing: "1px",
                          fontFamily: "'Montserrat', sans-serif", textDecoration: "underline"
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: "500", color: "#1A1612", flexShrink: 0 }}>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{
            padding: "20px 28px 28px",
            borderTop: "1px solid rgba(201,168,76,0.2)",
            background: "#FAF7F2",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px", letterSpacing: "1px", color: "#8B7D74", textTransform: "uppercase" }}>Subtotal</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#1A1612" }}>
                ${total.toFixed(2)}
              </span>
            </div>
            <p style={{ fontSize: "11px", color: "#8B7D74", marginBottom: "20px", letterSpacing: "0.3px" }}>
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-gold" style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}>
              Checkout
            </button>
            <button
              onClick={clearCart}
              style={{
                width: "100%", background: "none", border: "none", cursor: "pointer",
                fontSize: "11px", color: "#8B7D74", letterSpacing: "1px",
                fontFamily: "'Montserrat', sans-serif", textDecoration: "underline",
                textAlign: "center", padding: "6px"
              }}
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
