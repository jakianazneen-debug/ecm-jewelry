import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Product } from "../data/products";
import SearchModal from "./SearchModal";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setSelectedCategory?: (cat: string) => void;
  onViewProduct?: (product: Product) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, setSelectedCategory, onViewProduct }) => {
  const { itemCount, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search on ESC key globally
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "Collections", page: "collections" },
    { label: "About", page: "about" },
    { label: "Contact", page: "contact" },
  ];

  const handleNav = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (page === "collections" && setSelectedCategory) {
      setSelectedCategory("Complete");
    }
  };

  const handleViewProduct = (product: Product) => {
    if (onViewProduct) {
      onViewProduct(product);
    }
    setSearchOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.4s ease",
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
          boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.08)" : "0 1px 10px rgba(0,0,0,0.04)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

            {/* Logo */}
            <button
              onClick={() => handleNav("home")}
              style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" stroke="#C9A84C" strokeWidth="1.5" />
                  <path d="M14 6 L16.5 11.5 L22 12.5 L18 16.5 L19 22 L14 19.5 L9 22 L10 16.5 L6 12.5 L11.5 11.5 Z"
                    stroke="#C9A84C" strokeWidth="1" fill="rgba(201,168,76,0.15)" />
                </svg>
                <div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#1A1612",
                    lineHeight: "1",
                    letterSpacing: "0.5px"
                  }}>
                    Aurelia
                  </div>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "8px",
                    letterSpacing: "3px",
                    color: "#C9A84C",
                    textTransform: "uppercase",
                    lineHeight: "1"
                  }}>
                    Jewels
                  </div>
                </div>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div style={{ display: "flex", gap: "36px", alignItems: "center" }} className="desktop-nav">
              {navLinks.map(link => (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`nav-link ${currentPage === link.page ? "active" : ""}`}
                  style={{ background: "none", border: "none" }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px",
                  borderRadius: "8px",
                  transition: "background 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f8f5ef")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                title="Search products"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1612" strokeWidth="1.8">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px",
                  position: "relative",
                  borderRadius: "8px",
                  transition: "background 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f8f5ef")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1612" strokeWidth="1.5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {itemCount > 0 && (
                  <span style={{
                    position: "absolute",
                    top: "-2px",
                    right: "-2px",
                    background: "#C9A84C",
                    color: "#fff",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    fontSize: "10px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
                className="mobile-menu-btn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1612" strokeWidth="1.5">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} style={{ zIndex: 998 }}>
        <button
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "absolute", top: "24px", right: "24px",
            background: "none", border: "none", cursor: "pointer"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1612" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "#1A1612" }}>Aurelia</div>
          <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#C9A84C", textTransform: "uppercase", marginTop: "4px" }}>Jewels</div>
        </div>

        <div style={{ width: "40px", height: "1px", background: "#C9A84C", margin: "0 auto 24px" }} />

        {/* Mobile Search */}
        <button
          onClick={() => { setMobileMenuOpen(false); setSearchOpen(true); }}
          style={{
            background: "#f8f5ef",
            border: "1px solid #e8e0d0",
            borderRadius: "12px",
            padding: "12px 24px",
            width: "80%",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            color: "#888",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "14px",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          Search products...
        </button>

        {navLinks.map(link => (
          <button
            key={link.page}
            onClick={() => handleNav(link.page)}
            style={{
              background: "none",
              border: "none",
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px",
              color: currentPage === link.page ? "#C9A84C" : "#1A1612",
              cursor: "pointer",
              padding: "8px 0",
              textAlign: "center",
            }}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onViewProduct={handleViewProduct}
      />

      <style>{`
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
