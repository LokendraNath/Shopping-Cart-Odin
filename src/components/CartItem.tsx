import { X } from "lucide-react";
import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext.js";

const CartItem = ({ item }) => {
  const { handleCartQtyClick, handleDeleteCartItem } = useContext(
    ShopContext
  ) as {
    handleCartQtyClick: (type: "min" | "plus", id: string | number) => void;
    handleDeleteCartItem: (id: string | number) => void;
  };

  return (
    <div
      key={item.id}
      className="relative w-full border-b-1 py-4 px-3 sm:px-5 grid grid-cols-12 items-start min-h-32 sm:h-40 gap-3 sm:gap-4"
    >
      <X
        className="absolute right-1 top-1 sm:right-[-7px] sm:top-[-7px] bg-red-500 rounded-full text-white cursor-pointer z-10"
        size={18}
        onClick={() => handleDeleteCartItem(item.id)}
      />
      <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-30 md:h-30 shrink-0 overflow-hidden col-span-3 sm:col-span-2">
        <img
          src={item.image}
          className="h-full w-full object-cover object-top rounded-md"
          alt={item.title}
        />
      </div>
      <div className="shrink flex flex-col sm:flex-row items-start justify-between col-span-9 sm:col-span-10 gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-sm sm:text-base md:text-lg font-medium text-left text-wrap line-clamp-2 mb-2">
            {item.title}
          </h2>
          <div className="flex flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-1">
              <span className="text-gray-600">Each:</span>
              <span className="font-semibold">${item.price}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-600">Total:</span>
              <span className="font-semibold text-blue-600">
                ${(item.qty * item.price).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className="text-xs sm:text-sm text-gray-600 font-medium">
            Quantity
          </span>
          <div className="border border-gray-300 px-2 py-1 rounded-2xl flex items-center bg-white">
            <span
              onClick={() => handleCartQtyClick("min", item.id)}
              className="text-lg sm:text-xl cursor-pointer active:scale-95 transition-transform hover:bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center"
            >
              -
            </span>
            <input
              type="number"
              min={1}
              value={item.qty}
              max={10}
              className="bg-white text-black w-6 sm:w-8 border-none focus:border-none outline-none mx-2 text-center text-sm sm:text-base"
              readOnly
            />
            <span
              onClick={() => handleCartQtyClick("plus", item.id)}
              className="text-lg sm:text-xl cursor-pointer active:scale-95 transition-transform hover:bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center"
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
