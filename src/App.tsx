import { Header } from "./components/Header.js";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Footer from "./components/Footer.js";
import { useCart } from "./hooks/useCart.js";
import { ShopContext } from "./Context/ShopContext.js";
import Products from "./pages/Product.js";
import ToastContainer from "./components/ToastContainer.js";

export const App = () => {
  const { productsData } = useLoaderData();
  const location = useLocation();
  const {
    cart,
    setCart,
    onAddToCart,
    handleCartQtyClick,
    handleDeleteCartItem,
  } = useCart();

  // Show Products component only on home page (root path)
  const isHomePage = location.pathname === "/";

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
        <main className="flex-1 p-5 mt-15">
          <Outlet />
          {isHomePage && <Products />}
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </ShopContext.Provider>
  );
};
