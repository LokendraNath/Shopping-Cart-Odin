import Layout from "../Layout.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";
import Product from "../pages/Product.jsx";
import Cart from "../pages/Cart/Cart.jsx";

const dataLoader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const productData = await response.json();
  return { productData };
};

export const routes = [
  {
    path: "/",
    element: <Layout />,
    loader: dataLoader,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products",
        element: <Product />,
      },
    ],
  },
];
