import { Header } from "./components/Header.js";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer.js";
import { useCart } from "./hooks/useCart.js";
import { ShopContext } from "./Context/ShopContext.js";

export const App = () => {
  const { productsData } = useLoaderData();
  const {
    cart,
    setCart,
    onAddToCart,
    handleCartQtyClick,
    handleDeleteCartItem,
  } = useCart();

  return (
    <ShopContext.Provider
      value={{
        cart,
        productsData,
        setCart,
        onAddToCart,
        handleCartQtyClick,
        handleDeleteCartItem,
      }}
    >
      <div className="flex flex-col min-h-screen font-poppins">
        <Header cartItemCount={cart.reduce((acc, item) => acc + item.qty, 0)} />
        <main className="flex-1 p-5">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ShopContext.Provider>
  );
};
