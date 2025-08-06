import { Header } from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
const Layout = () => {
  const { productData } = useLoaderData();
  const [cart, setCart] = useState([]);

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

  useEffect(() => {
    console.log("Cart Product Qty Updated", cart);
  }, [cart]);

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Header cart={cart} />
      <main className="flex-1 p-5">
        <Outlet
          context={{
            productData,
            setCart,
            cart,
            onAddToCart,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
