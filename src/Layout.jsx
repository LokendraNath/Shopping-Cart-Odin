import { Header } from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const Layout = () => {
  const { productData } = useLoaderData();
  const [cart, setCart] = useState([]);
  const [cartProductQtys, setCartProductQtys] = useState({});

  useEffect(() => {
    console.log("Cart Product Qty Updated", cartProductQtys);
  }, [cartProductQtys]);

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Header cart={cart} />
      <main className="flex-1 p-5">
        <Outlet
          context={{ productData, setCartProductQtys }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
