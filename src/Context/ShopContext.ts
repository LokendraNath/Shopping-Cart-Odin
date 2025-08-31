import React, { createContext } from "react";
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}
interface CartItem extends Product {
  qty: number;
}
interface ShopContextType {
  cart: CartItem[];
  productsData: Product[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  onAddToCart: (product: Product, qty: number) => void;
  handleCartQtyClick: (action: "plus" | "min", productId: number) => void;
  handleDeleteCartItem: (productId: number) => void;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);
