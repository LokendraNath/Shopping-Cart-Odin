import { createContext } from "react";

export const ShopContext = createContext({
  cart: [],
  productsData: [],
  setCart: [],
  onAddToCart: () => {},
  handleCartQtyClick: () => {},
  handleDeleteCartItem: () => {},
});
