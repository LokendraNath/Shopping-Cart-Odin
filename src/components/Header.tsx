import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Links = ({ cartItemCount }: { cartItemCount: number }) => {
  return (
    <ul className="relative">
      <Link to="cart">
        <ShoppingCart size={30} className="cursor-pointer" />
      </Link>
      {cartItemCount ? (
        <div className="bg-blue-500 absolute top-[-6px] right-[-2px] w-5 h-5 flex items-center justify-center rounded-full text-white">
          {cartItemCount}
        </div>
      ) : (
        ""
      )}
    </ul>
  );
};

export const Header = ({ cartItemCount }: { cartItemCount: number }) => {
  return (
    <header className="py-2 lg:py-5 flex items-center justify-between px-5 lg:px-20 text-blue-800">
      <h1 className="d text-2xl lg:text-3xl font-bold">
        <Link to="/">QuickBasket</Link>
      </h1>
      <nav className="flex gap-5">
        <Links cartItemCount={cartItemCount} />
      </nav>
    </header>
  );
};
