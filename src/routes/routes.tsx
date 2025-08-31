import Home from "../pages/Home.js";
import Cart from "../pages/Cart/Cart.js";
import Products from "../pages/Product.js";
import { App } from "../App.js";

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
