import { CircleUserRound, ShoppingCart } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = ({ cart }) => {
  return (
    <nav className="py-5 flex items-center justify-between px-20 text-blue-800">
      <h1 className="text-3xl font-bold">
        <Link to="/">QuickBasket</Link>
      </h1>
      <div className="flex gap-5">
        <div className="relative">
          <Link to="cart">
            <ShoppingCart size={30} className="cursor-pointer" />
          </Link>
          {cart?.length ? (
            <div className="bg-blue-500 absolute top-[-6px] right-[-2px] w-5 h-5 flex items-center justify-center rounded-full text-white">
              {cart.length}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};
