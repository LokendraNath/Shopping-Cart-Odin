import { ArrowRightIcon, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-full w-full text-blue-900">
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="https://img.freepik.com/premium-vector/happy-couple-shopping-with-discounts-sales_123891-155782.jpg"
          className="w-[80%]"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-center pl-20">
        <h1 className="text-2xl font-bold mb-4">
          Welcome To <span className="text-6xl mt-3 block">QuickBasket</span>
        </h1>
        <p className="text-lg tracking-wide mb-10 font-semibold text-blue-500 mt-3">
          Smart, seamless shopping starts here. Quick, easy, and always
          affordable.
        </p>
        <button className="py-4 px-10 bg-gradient-to-l to-blue-500 from-blue-800 rounded-2xl text-2xl font-bold text-white group transition-transform duration-300">
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
