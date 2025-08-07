import { Header } from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import { useCart } from "./hooks/useCart";

const App = () => {
  const { productData } = useLoaderData();

  const {
    cart,
    setCart,
    onAddToCart,
    handleCartQtyClick,
    handleDeleteCartItem,
  } = useCart();

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Header cart={cart} />
      <main className="flex-1 p-5">
        <Outlet
          context={{
            cart,
            productData,
            setCart,
            onAddToCart,
            handleCartQtyClick,
            handleDeleteCartItem,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
