import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { Product } from "./data/products";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function AppInner() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("Complete");
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);
  const [prevPage, setPrevPage] = useState("collections");

  const handleViewProduct = (product: Product) => {
    setPrevPage(currentPage);
    setViewingProduct(product);
    setCurrentPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSetPage = (page: string) => {
    setCurrentPage(page);
    setViewingProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setCurrentPage(prevPage);
    setViewingProduct(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handleSetPage}
        setSelectedCategory={setSelectedCategory}
        onViewProduct={handleViewProduct}
      />

      <main style={{ flex: 1 }}>
        {currentPage === "home" && (
          <HomePage
            setCurrentPage={handleSetPage}
            onViewProduct={handleViewProduct}
          />
        )}

        {currentPage === "collections" && (
          <CollectionPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onViewProduct={handleViewProduct}
          />
        )}

        {currentPage === "product" && viewingProduct && (
          <ProductPage
            product={viewingProduct}
            onBack={handleBack}
            onViewProduct={handleViewProduct}
          />
        )}

        {currentPage === "about" && <AboutPage />}
        {currentPage === "contact" && <ContactPage />}
      </main>

      <Footer setCurrentPage={handleSetPage} />
      <CartSidebar />
      <Toast />
    </div>
  );
}

export function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  );
}
