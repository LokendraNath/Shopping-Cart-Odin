import Home from "../pages/Home.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import Products from "../pages/Product.jsx";
import { App } from "../App.jsx";

const dataLoader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const productsData = await response.json();
  return { productsData };
};

export const routes = [
  {
    path: "/",
    element: <App />,
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
        element: <Products />,
      },
    ],
  },
];
