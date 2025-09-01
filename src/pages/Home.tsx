import { ArrowRightIcon, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Products from "./Product.js";

const Home = () => {
  return (
    <div className="h-[calc(100vh-64px)] w-full text-blue-900 flex flex-col md:flex-row items-center justify-center">
      <div className="hidden md:w-1/2 md:flex items-center justify-center">
        <img
          src="https://img.freepik.com/premium-vector/happy-couple-shopping-with-discounts-sales_123891-155782.jpg"
          className="w-[80%]"
        />
      </div>
      <div className="md:w-1/2 flex flex-col items-center justify-center text-center md:text-start">
        <p className="text-xl md:text-xl mb-2 font-bold md:mb-4 tracking-widest">
          Welcome To{" "}
        </p>
        <h1 className="text-6xl md:text-7xl mt-2 md:mt-3 font-bold block tracking-normal">
          Quick
          <span className="whitespace-nowrap overflow-hidden basket">
            Basket
          </span>
        </h1>
        <p className="text-sm md:text-lg tracking-wide mb-5 md:mb-10 font-semibold text-blue-500 mt-3 w-80">
          Smart, seamless shopping starts here. Quick, easy, and always
          affordable.
        </p>
        <button className="mt-5 md:mt-7 py-2 md:py-4 px-5 md:px-10 bg-gradient-to-l to-blue-500 from-blue-800 rounded-xl md:rounded-2xl text-xl md:text-2xl font-bold text-white group transition-transform duration-300">
          <Link to="products" className="flex items-center gap-4">
            Shop Now{" "}
            <ArrowRightIcon className="transform transition-transform duration-300 group-hover:translate-x-3" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
