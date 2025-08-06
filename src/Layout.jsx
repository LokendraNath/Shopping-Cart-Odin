import { Header } from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const Layout = () => {
  const { productData } = useLoaderData();
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
  useEffect(() => {
    console.log("Cart Update", cart);
  }, [cart]);

  function handleCartQtyClick(arg, productId) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          if (arg === "plus" && item.qty < 10) {
            return { ...item, qty: item.qty + 1 };
          } else if (arg === "min" && item.qty > 1) {
            return { ...item, qty: item.qty - 1 };
          }
        }
        return item;
      });
    });
  }

  function handleDeleteCartItem(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

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

export default Layout;
