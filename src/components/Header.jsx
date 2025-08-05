import { CircleUserRound, ShoppingCart } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="h-14 flex items-center justify-between px-20 text-blue-800">
      <h1 className="text-3xl font-bold">
        {/* <img src="" alt="" /> */}
        <Link to="/">Shopping Cart</Link>
      </h1>
      <div>
        <ul className="flex gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Support</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <ShoppingCart />
        <CircleUserRound />
      </div>
    </nav>
  );
};
