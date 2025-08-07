// src/hooks/useCart.js
import { useEffect, useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("odin-shop-cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("odin-shop-cart", JSON.stringify(cart));
  }, [cart]);
  
  const onAddToCart = (product, qty) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  const handleCartQtyClick = (arg, productId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          if (arg === "plus" && item.qty < 10)
            return { ...item, qty: item.qty + 1 };
          if (arg === "min" && item.qty > 1)
            return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
    );
  };

  const handleDeleteCartItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return {
    cart,
    setCart,
    onAddToCart,
    handleCartQtyClick,
    handleDeleteCartItem,
  };
};
