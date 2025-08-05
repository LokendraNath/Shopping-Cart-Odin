import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Proudct.jsx";

const dataLoader = async () => {
  // const response = await fetch("https://fakestoreapi.com/products");
  // const productData = await response.json();
  const productData = [
    {
      id: 1,
      image: "./image/hello.jpg",
      price: 235.0,
      title: "Nike Air 69",
    },
    {
      id: 2,
      image: "./image/hello.jpg",
      price: 125.0,
      title: "Puma Tshirt",
    },
    {
      id: 3,
      image: "../image/hello.jpg",
      price: 765.0,
      title: "Air Jorden 696969969",
    },
    {
      id: 4,
      image: "./image/hello.jpg",
      price: 455.0,
      title: "Playstation 5 (for kids only)",
    },
    {
      id: 5,
      image: "./image/hello.jpg",
      price: 95.0,
      title: "Macbook air 23 dufkuekj",
    },
  ];
  return { productData };
};

const router = createBrowserRouter([
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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
