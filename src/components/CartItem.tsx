import { X } from "lucide-react";
import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const CartItem = ({ item }) => {
  const { handleCartQtyClick, handleDeleteCartItem } = useContext(ShopContext);

  return (
    <div
      key={item.id}
      className="relative w-full border-1 py-4 px-5 grid grid-cols-12 items-start rounded-2xl h-40"
    >
      <X
        className="absolute right-[-7px] top-[-7px] bg-red-500 rounded-full text-white cursor-pointer"
        size={20}
        onClick={() => handleDeleteCartItem(item.id)}
      />
      <div className="w-30 h-30 shrink-0 overflow-hidden col-span-3">
        <img
          src={item.image}
          className="h-full w-full object-cover object-top"
          alt="item.title"
        />
      </div>
      <div className="shrink flex items-start justify-between col-span-9">
        <h2 className="text-lg max-w-50 text-left text-wrap">{item.title}</h2>
        <div className="flex flex-col items-center">
          Each: <h1>${item.price}</h1>
        </div>
        <div className="flex flex-col items-center">
          Quantity:{" "}
          <div className="border border-black px-2 py-1 rounded-2xl flex items-center">
            <span
              onClick={() => handleCartQtyClick("min", item.id)}
              className="text-xl cursor-pointer active:scale-95 transition-transform"
            >
              -
            </span>
            <input
              type="number"
              min={1}
              value={item.qty}
              // onChange={handleInputChange}
              max={10}
              className="bg-white text-black w-8 border-none focus:border-none outline-none ml-4"
            />
            <span
              onClick={() => handleCartQtyClick("plus", item.id)}
              className="text-xl cursor-pointer active:scale-95 transition-transform"
            >
              +
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center w-20">
          Total: <h1>${item.qty * item.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
