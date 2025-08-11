import { Header } from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import { useCart } from "./hooks/useCart";
import { ShopContext } from "./Context/ShopContext";

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
    <ShopContext
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
        <Header />
        <main className="flex-1 p-5">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ShopContext>
  );
};
