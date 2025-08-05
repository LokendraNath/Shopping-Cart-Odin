import { CircleUserRound, ShoppingCart } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = ({ cart }) => {
  console.log(cart);

  return (
    <nav className="h-14 flex items-center justify-between px-20 text-blue-800">
      <h1 className="text-3xl font-bold">
        {/* <img src="" alt="" /> */}
        <Link to="/">Shopping Cart</Link>
      </h1>
      <div>
        <ul className="flex gap-10 text-xl">
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
        <div className="relative">
          <ShoppingCart size={30} />
          <div className="bg-blue-500 absolute top-[-6px] right-[-2px] w-5 h-5 flex items-center justify-center rounded-full text-white">
            {cart.length ? cart.length : 0}
          </div>
        </div>
        <CircleUserRound size={30} />
      </div>
    </nav>
  );
};
