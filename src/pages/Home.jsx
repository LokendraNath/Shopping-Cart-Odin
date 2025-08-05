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
        <h1 className="text-5xl font-bold mb-4">Shopping Cart</h1>
        <p className="text-lg tracking-wide mb-10 font-semibold text-blue-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          veritatis corporis, impedit quasi eaque quos?
        </p>
        <button className="py-4 px-10 bg-gradient-to-l to-blue-500 from-blue-800 rounded-2xl text-2xl font-bold text-white">
          <Link to="products">Shop Now !!</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
