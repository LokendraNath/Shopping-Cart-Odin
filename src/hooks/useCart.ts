// src/hooks/useCart.js
import { useEffect, useState } from "react";
import { type CartItem, type Product } from "../Context/ShopContext.js";

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("odin-shop-cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("odin-shop-cart", JSON.stringify(cart));
  }, [cart]);

  const onAddToCart = (productDetail: Product, qty: number) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === productDetail.id);

      if (existing) {
        return prev.map((item) =>
          item.id === productDetail.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...productDetail, qty }];
    });
  };

  const handleCartQtyClick = (arg: "plus" | "min", productDetailId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productDetailId) {
          if (arg === "plus" && item.qty < 10)
            return { ...item, qty: item.qty + 1 };
          if (arg === "min" && item.qty > 1)
            return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
    );
  };

  const handleDeleteCartItem = (productDetailId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productDetailId)
    );
  };

  return {
    cart,
    setCart,
    onAddToCart,
    handleCartQtyClick,
    handleDeleteCartItem,
  };
};
