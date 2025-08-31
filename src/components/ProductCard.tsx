import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext.js";
import type { Product } from "../Context/ShopContext.js";

interface ProductCardProps {
  productDetail: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ productDetail }) => {
  const context = useContext(ShopContext);
  if (!context)
    throw new Error("ShopContext must be used within ShopContextProvider");

  const onAddToCart = (
    context as { onAddToCart: (product: Product, quantity: number) => void }
  ).onAddToCart;
  const [quantity, setQuantity] = useState<number | string>(1);

  function handleQtyClick(arg: "plus" | "min") {
    setQuantity((prev) => {
      const numPrev = typeof prev === "string" ? Number(prev) : prev;
      if (arg === "plus" && numPrev < 10) return numPrev + 1;
      else if (arg === "min" && numPrev > 1) return numPrev - 1;
      return numPrev;
    });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value === "") {
      setQuantity("");
      return;
    }
    const num = Number(value);
    if (!isNaN(num) && num >= 1 && num <= 10) {
      setQuantity(num);
    }
  }

  function handleAddToCart() {
    if (quantity && Number(quantity) > 0) {
      onAddToCart(productDetail, Number(quantity));
      setQuantity(1);
    }
  }

  return (
    <div className="border-1 flex flex-col items-center justify-center py-3 px-5 rounded-lg hover:scale-105 transition-transform duration-300 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] hover:shadow-[0px_8px_12px_0px_rgba(0,_0,_0,_0.1)]">
      <img src={productDetail.image} className="h-50" alt="image tha" />
      <div className="mt-10 px-3 flex items-center flex-col">
        <h2 className="text-xl mb-3 text-start line-clamp-1">
          {productDetail.title}
        </h2>
        <div className="flex text-black items-center mb-5">
          <p className="text-xl text-start mr-5">${productDetail.price}</p>
          <div className="border border-black px-2 py-1 rounded-2xl flex items-center">
            <span
              onClick={() => handleQtyClick("min")}
              className="text-xl cursor-pointer active:scale-95 transition-transform"
            >
              -
            </span>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={handleInputChange}
              max={10}
              className="bg-white text-black w-8 border-none focus:border-none outline-none ml-4"
            />
            <span
              onClick={() => handleQtyClick("plus")}
              className="text-xl cursor-pointer active:scale-95 transition-transform"
            >
              +
            </span>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex bg-blue-800 text-white py-2 text-xl items-center px-5 rounded-full gap-3 active:scale-95 transition-transform duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
