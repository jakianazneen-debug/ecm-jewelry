import React from "react";
import { useCart } from "../context/CartContext";

const Toast: React.FC = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="toast">
      {toast}
    </div>
  );
};

export default Toast;
